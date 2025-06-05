import { describe, it, expect } from "vitest";
import { BinaryTreeNode } from "../binary-tree-node";

describe("BinaryTreeNode", () => {
  describe("height", () => {
    it("Computes height for one node as 1.", () => {
      const tree = new BinaryTreeNode(5);

      expect(tree.height).toBe(1);
    });

    it("Computes the height when left is heavier.", () => {
      const tree = new BinaryTreeNode(
        5,
        new BinaryTreeNode(4, undefined, new BinaryTreeNode(3)),
        new BinaryTreeNode(1)
      );

      expect(tree.height).toBe(3);
    });

    it("Computes the height when right is heavier.", () => {
      const tree = new BinaryTreeNode(
        5,
        new BinaryTreeNode(1),
        new BinaryTreeNode(4, undefined, new BinaryTreeNode(3))
      );

      expect(tree.height).toBe(3);
    });
  });

  describe("isBalanced", () => {
    it("Is balanced with no child nodes.", () => {
      const tree = new BinaryTreeNode(5);

      expect(tree.isBalanced).toBe(true);
    });

    it("Is balanced when child heights are same.", () => {
      const tree = new BinaryTreeNode(
        5,
        new BinaryTreeNode(4, undefined, new BinaryTreeNode(3)),
        new BinaryTreeNode(4, new BinaryTreeNode(1), new BinaryTreeNode(3))
      );

      expect(tree.isBalanced).toBe(true);
    });

    it("Is balanced when child heights are different by 1.", () => {
      const tree = new BinaryTreeNode(
        5,
        new BinaryTreeNode(4, undefined, new BinaryTreeNode(3)),
        new BinaryTreeNode(4)
      );

      expect(tree.isBalanced).toBe(true);
    });

    it("Is is not balanced when child heights are different by more than 1.", () => {
      const tree = new BinaryTreeNode(
        5,
        new BinaryTreeNode(4, new BinaryTreeNode(3, new BinaryTreeNode(0))),
        new BinaryTreeNode(4)
      );

      expect(tree.isBalanced).toBe(false);
    });
  });

  describe("inOrder", () => {
    it("Returns single node.", () => {
      const tree = new BinaryTreeNode(5);

      expect(tree.inOrder()).toStrictEqual([5]);
    });

    it("Traverses multiple node.", () => {
      const tree = new BinaryTreeNode(
        5,
        new BinaryTreeNode(4, undefined, new BinaryTreeNode(4.5)),
        new BinaryTreeNode(10)
      );

      expect(tree.inOrder().map((n) => n.value)).toStrictEqual([4, 4.5, 5, 10]);
    });
  });
});
