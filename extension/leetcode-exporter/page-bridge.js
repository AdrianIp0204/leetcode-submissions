(() => {
  const requestId = document.currentScript?.dataset.requestId || "";

  function readMonacoModel() {
    const monaco = window.monaco;
    const models = monaco?.editor?.getModels?.() || [];
    const candidates = models
      .map((model) => ({
        value: model.getValue?.() || "",
        languageId: model.getLanguageId?.() || "",
        uri: String(model.uri || ""),
      }))
      .filter((model) => model.value.trim().length > 0)
      .sort((left, right) => right.value.length - left.value.length);

    return candidates[0] || null;
  }

  function readNextData() {
    const raw = document.getElementById("__NEXT_DATA__")?.textContent;
    if (!raw) return null;
    try {
      const parsed = JSON.parse(raw);
      return {
        page: parsed.page || "",
        query: parsed.query || {},
        propsKeys: Object.keys(parsed.props || {}),
      };
    } catch {
      return null;
    }
  }

  window.postMessage(
    {
      source: "leetcode-repo-exporter-page",
      requestId,
      payload: {
        model: readMonacoModel(),
        nextData: readNextData(),
        title: document.title,
        href: location.href,
      },
    },
    "*",
  );
})();
