import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import vm from "node:vm";
import assert from "node:assert/strict";
import test from "node:test";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

function tick() {
  return new Promise((resolve) => setImmediate(resolve));
}

function responseWithJson(payload) {
  return {
    clone() {
      return {
        headers: {
          get(name) {
            return /^content-type$/i.test(name) ? "application/json" : "";
          },
        },
        async json() {
          return payload;
        },
        async text() {
          return JSON.stringify(payload);
        },
      };
    },
  };
}

test("page bridge emits submission signals from LeetCode submit fetch and check XHR", async () => {
  const source = await readFile(path.join(projectRoot, "extension", "leetcode-exporter", "page-bridge.js"), "utf8");
  const messages = [];

  class FakeXhr {
    constructor() {
      this.listeners = {};
      this.responseType = "";
      this.responseText = "";
    }

    addEventListener(event, callback) {
      this.listeners[event] = callback;
    }

    open() {}

    send() {
      this.responseText = JSON.stringify({ state: "SUCCESS", status_msg: "Accepted" });
      this.listeners.loadend?.();
    }
  }

  const windowObject = {
    __leetcodeRepoExporterNetworkObserverInstalled: false,
    fetch: async () => responseWithJson({ submission_id: 123456 }),
    XMLHttpRequest: FakeXhr,
    postMessage(message) {
      messages.push(message);
    },
  };

  const context = {
    window: windowObject,
    document: {
      currentScript: { dataset: { mode: "network-observer" } },
      title: "Two Sum - LeetCode",
    },
    location: {
      href: "https://leetcode.com/problems/two-sum/",
    },
    URL,
    URLSearchParams,
    FormData: class FormData {},
  };

  vm.runInNewContext(source, context);

  await windowObject.fetch("https://leetcode.com/problems/two-sum/submit/", {
    method: "POST",
    body: JSON.stringify({ lang: "python3" }),
  });
  await tick();
  await tick();

  const xhr = new windowObject.XMLHttpRequest();
  xhr.open("GET", "https://leetcode.com/submissions/detail/123456/check/");
  xhr.send();

  const signals = messages
    .filter((message) => message.source === "leetcode-repo-exporter-page-network")
    .map((message) => message.payload);

  assert.equal(signals.length, 2);
  assert.equal(signals[0].kind, "submit");
  assert.equal(signals[0].submissionId, "123456");
  assert.equal(signals[1].kind, "check");
  assert.equal(signals[1].submissionId, "123456");
  assert.equal(signals[1].status, "Accepted");
});
