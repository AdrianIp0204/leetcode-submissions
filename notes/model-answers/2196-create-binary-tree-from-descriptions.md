# Create Binary Tree From Descriptions

- Pattern: hash map node construction / root detection
- Original attempt: [submissions/2196-create-binary-tree-from-descriptions](../../submissions/2196-create-binary-tree-from-descriptions/)

## Model Solution

```python
class Solution:
    def createBinaryTree(self, descriptions: List[List[int]]) -> Optional[TreeNode]:
        nodes = {}
        children = set()

        def get_node(value: int) -> TreeNode:
            if value not in nodes:
                nodes[value] = TreeNode(value)
            return nodes[value]

        for parent, child, is_left in descriptions:
            parent_node = get_node(parent)
            child_node = get_node(child)
            children.add(child)

            if is_left:
                parent_node.left = child_node
            else:
                parent_node.right = child_node

        for value, node in nodes.items():
            if value not in children:
                return node
```

## Why This Is The Model

Each value must map to exactly one `TreeNode` object. The dictionary gives stable
node identity while the `children` set records which values cannot be the root.
After all edges are connected, the only value that never appeared as a child is
the root.

## Invariant

After reading any prefix of descriptions, every seen value has exactly one node
object in `nodes`, and every described child value is present in `children`.

## Complexity

- Time: O(n)
- Space: O(n)

## Review Prompt

What bug appears if you create a fresh `TreeNode(child)` every time a child value
is mentioned?
