/**
 * @link https://leetcode.com/problems/invert-binary-tree
 */
import { TreeNode } from '../common/TreeNode';

function invertTree(root: TreeNode | null): TreeNode | null {
    if (root === null || (root.left === null && root.right === null)) {
        return root;
    }

    let currentNode = root;
    let temp: TreeNode;

    temp = currentNode.left;
    currentNode.left = currentNode.right;
    currentNode.right = temp;
    invertTree(currentNode.left);
    invertTree(currentNode.right);

    return currentNode;
}
