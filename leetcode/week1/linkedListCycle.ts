/**
 * @link https://leetcode.com/problems/linked-list-cycle/
 */
import { ListNode } from "../common/ListNode";

// Loop method
function hasCycle(head: ListNode | null): boolean {
    if (head === null) {
        return false;
    }

    const nodes: ListNode[] = [];
    while (head.next !== null) {
        if (nodes.includes(head)) {
            return true;
        }
        nodes.push(head);
        head = head.next;
    }
    return false;
}

// Fast and Slow method
function hasCycleFastAndSlow(head: ListNode | null): boolean {
    let fast = head;
    let slow = head;
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) {
            return true;
        }
    }
    return false;
};
