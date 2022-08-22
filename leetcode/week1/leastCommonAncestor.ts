/**
 * @link https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/
 */
import { TreeNode } from '../common/TreeNode';

function lowestCommonAncestor(
    root: TreeNode,
    p: TreeNode,
    q: TreeNode
): TreeNode | null {
    const pPath = traverseNode(root, p, []);
    const qPath = traverseNode(root, q, []);
    const minLength = Math.min(pPath.length, qPath.length);

    let i = 0;
    for (i = 0; i < minLength; i++) {
        if (pPath[i].val !== qPath[i].val) {
            return pPath[i - 1];
        }
    }
    return pPath[i - 1] || qPath[i - 1];
}

function traverseNode(
    root: TreeNode,
    destination: TreeNode,
    path: TreeNode[]
): TreeNode[] {
    path.push(root);
    if (root.val === destination.val) {
        return path;
    }

    if (root.val < destination.val) {
        root = root.right;
        return traverseNode(root, destination, path);
    }

    if (root.val > destination.val) {
        root = root.left;
        return traverseNode(root, destination, path);
    }
}

function lowestCommonAncestorRecursive(
    root: TreeNode,
    p: TreeNode,
    q: TreeNode
) {
    // root is in middle of P & Q
    if (p.val < root.val && root.val < q.val) {
        return root;
    }
    if (q.val < root.val && root.val < p.val) {
        return root;
    }

    // Either P or Q is the root
    if (q.val === root.val || p.val === root.val) {
        return root;
    }

    // Both P&Q on the left side of the root
    if (p.val < root.val && q.val < root.val) {
        root = root.left;
        return lowestCommonAncestorRecursive(root, p, q);
    }

    // Both P&Q on the right side of the root
    if (p.val > root.val && q.val > root.val) {
        root = root.right;
        return lowestCommonAncestorRecursive(root, p, q);
    }
}
