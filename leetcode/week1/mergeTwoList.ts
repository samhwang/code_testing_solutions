/**
 * @link https://leetcode.com/problems/merge-two-sorted-lists/
 */

import { ListNode } from '../common/ListNode';

function mergeTwoLists(
    list1: ListNode | null,
    list2: ListNode | null
): ListNode | null {
    if (list1 === null && list2 === null) {
        return null;
    }

    if (list1 === null) {
        return list2;
    }

    if (list2 === null) {
        return list1;
    }

    let head = new ListNode();
    let temp = head;

    if (list1.val <= list2.val) {
        head = new ListNode(list1.val);
        temp = head;
        list1 = list1.next;
    } else {
        head = new ListNode(list2.val);
        temp = head;
        list2 = list2.next;
    }

    while (list1 !== null && list2 !== null) {
        if (list1.val < list2.val) {
            temp.next = new ListNode(list1.val);
            list1 = list1.next;
        } else {
            temp.next = new ListNode(list2.val);
            list2 = list2.next;
        }
        temp = temp.next;
    }

    while (list1 !== null) {
        temp.next = new ListNode(list1.val);
        list1 = list1.next;
        temp = temp.next;
    }

    while (list2 !== null) {
        temp.next = new ListNode(list2.val);
        list2 = list2.next;
        temp = temp.next;
    }

    return head;
}
