/**
 * @link https://leetcode.com/problems/reverse-linked-list/
 */

import { ListNode } from '../common/ListNode';

function reverseList(head: ListNode | null): ListNode | null {
    if (head === null) {
        return head;
    }

    let result = new ListNode(head.val);
    while (head.next !== null) {
        const currNode = head.next;
        result = new ListNode(currNode.val, result);
        head = currNode;
    }

    return result;
}
