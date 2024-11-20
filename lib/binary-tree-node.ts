export class BinaryTreeNode<T> {
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

  public get height(): number {
    return this._height;
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
