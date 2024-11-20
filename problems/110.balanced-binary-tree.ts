/*
 * @lc app=leetcode id=110 lang=typescript
 *
 * [110] Balanced Binary Tree
 */

// @lc code=start
class BinaryTreeNode<T> {
  private readonly _value: T;

  private readonly _left?: BinaryTreeNode<T>;

  private readonly _right?: BinaryTreeNode<T>;

  private readonly _height: number;

  constructor(value: T, left?: BinaryTreeNode<T>, right?: BinaryTreeNode<T>) {
    this._value = value;

    this._left = left;
    this._right = right;

    this._height = Math.max(left?._height ?? 0, right?._height ?? 0) + 1;
  }

  public get isBalanced(): boolean {
    return (
      Math.abs((this._left?._height ?? 0) - (this._right?._height ?? 0)) <= 1 &&
      (this._left?.isBalanced ?? true) &&
      (this._right?.isBalanced ?? true)
    );
  }

  public static fromLeetCode(
    node: TreeNode | null
  ): BinaryTreeNode<number> | undefined {
    if (node === null) {
      return undefined;
    }

    return new BinaryTreeNode(
      node.val,
      BinaryTreeNode.fromLeetCode(node.left),
      BinaryTreeNode.fromLeetCode(node.right)
    );
  }
}

export class TreeNode {
  val: number;

  left: TreeNode | null;

  right: TreeNode | null;

  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function isBalanced(root: TreeNode | null): boolean {
  const tree = BinaryTreeNode.fromLeetCode(root);

  if (tree === undefined) {
    return true;
  }

  return tree?.isBalanced;
}

// @lc code=end
