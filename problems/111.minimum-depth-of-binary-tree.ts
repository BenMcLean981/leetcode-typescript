/*
 * @lc app=leetcode id=111 lang=typescript
 *
 * [111] Minimum Depth of Binary Tree
 */

class TreeNode {
  val: number;

  left: TreeNode | null;

  right: TreeNode | null;

  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

// @lc code=start
class BinaryTreeNode<T> {
  private readonly _value: T;

  private _parent?: BinaryTreeNode<T>;

  private _depth: number;

  private _left?: BinaryTreeNode<T>;

  private _right?: BinaryTreeNode<T>;

  private _height: number;

  constructor(
    value: T,
    left?: BinaryTreeNode<T>,
    right?: BinaryTreeNode<T>,
    parent?: BinaryTreeNode<T>
  ) {
    this._value = value;

    this._parent = parent;
    this._left = left;
    this._right = right;

    this._height = Math.max(left?._height ?? 0, right?._height ?? 0) + 1;
    this._depth = parent === undefined ? 0 : parent._depth + 1;
  }

  private set parent(parent: BinaryTreeNode<T>) {
    this._parent = parent;
    this._depth = parent._depth + 1;
  }

  private set left(left: BinaryTreeNode<T> | undefined) {
    this._left = left;
    this._height = Math.max(this._height, (left?._height ?? 0) + 1);
  }

  private set right(right: BinaryTreeNode<T> | undefined) {
    this._right = right;
    this._height = Math.max(this._height, (right?._height ?? 0) + 1);
  }

  public get value(): T {
    return this._value;
  }

  public get left(): BinaryTreeNode<T> | undefined {
    return this._left;
  }

  public get right(): BinaryTreeNode<T> | undefined {
    return this._right;
  }

  public get height(): number {
    return this._height;
  }

  public get depth(): number {
    return this._depth;
  }

  public get isBalanced(): boolean {
    return (
      Math.abs((this._left?._height ?? 0) - (this._right?._height ?? 0)) <= 1 &&
      (this._left?.isBalanced ?? true) &&
      (this._right?.isBalanced ?? true)
    );
  }

  public static fromLeetCode(
    node: TreeNode | null,
    parent?: BinaryTreeNode<number>
  ): BinaryTreeNode<number> | undefined {
    if (node === null) {
      return undefined;
    }

    const result = new BinaryTreeNode(node.val, undefined, undefined, parent);
    result.left = BinaryTreeNode.fromLeetCode(node.left, result);
    result.right = BinaryTreeNode.fromLeetCode(node.right, result);

    return result;
  }

  public inOrder(): ReadonlyArray<BinaryTreeNode<T>> {
    return [
      ...(this._left?.inOrder() ?? []),
      this,
      ...(this._right?.inOrder() ?? []),
    ];
  }

  public toString(): string {
    return `${this._value}: ${this._depth}`;
  }
}

function minDepth(root: TreeNode | null): number {
  const tree = BinaryTreeNode.fromLeetCode(root);

  const nodes = tree?.inOrder();
  const leaves = nodes?.filter(
    (n) => n.left === undefined && n.right === undefined
  );

  const depths = leaves?.map((n) => n.depth);

  if (depths === undefined) {
    return 0;
  }

  return Math.min(...depths);
}
// @lc code=end
