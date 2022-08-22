/**
 * @link https://leetcode.com/problems/balanced-binary-tree/
 */

import { TreeNode } from '../common/TreeNode';

function isBalanced(root: TreeNode | null): boolean {
    if (root === null) {
        return true;
    }

    const heightLeft = getHeight(root.left);
    const heightRight = getHeight(root.right);
    return Math.abs(heightLeft - heightRight) < 2
        ? isBalanced(root.left) && isBalanced(root.right)
        : false;
}

function getHeight(root: TreeNode | null): number {
    if (root === null) {
        return 0;
    }

    return Math.max(getHeight(root.left), getHeight(root.right)) + 1;
}
