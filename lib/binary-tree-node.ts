export class BinaryTreeNode<T> {
  private readonly _value: T;

  private _parent?: BinaryTreeNode<T>;

  private readonly _left?: BinaryTreeNode<T>;

  private readonly _right?: BinaryTreeNode<T>;

  private readonly _height: number;

  private readonly _depth: number;

  constructor(
    value: T,
    parent?: BinaryTreeNode<T>,
    left?: BinaryTreeNode<T>,
    right?: BinaryTreeNode<T>
  ) {
    this._value = value;

    this._parent = parent;
    this._left = left;
    this._right = right;

    this._height = Math.max(left?._height ?? 0, right?._height ?? 0) + 1;
    this._depth = parent === undefined ? 0 : parent._depth + 1;
  }

  private set parent(node: BinaryTreeNode<T>) {
    this._parent = node;
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
    node: TreeNode | null
  ): BinaryTreeNode<number> | undefined {
    if (node === null) {
      return undefined;
    }

    const left = BinaryTreeNode.fromLeetCode(node.left);
    const right = BinaryTreeNode.fromLeetCode(node.right);
    const parent = new BinaryTreeNode(node.val, left, right);

    if (left !== undefined) {
      left.parent = parent;
    }

    if (right !== undefined) {
      right.parent = parent;
    }

    return parent;
  }

  public inOrder(): ReadonlyArray<BinaryTreeNode<T>> {
    return [
      ...(this._left?.inOrder() ?? []),
      this,
      ...(this._right?.inOrder() ?? []),
    ];
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
