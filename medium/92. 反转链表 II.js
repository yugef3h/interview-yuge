/**
 * 反转从位置 m 到 n 的链表。请使用一趟扫描完成反转
 * 1 ≤ m ≤ n ≤ 链表长度
 * 
 * 输入: 1->2->3->4->5->NULL, m = 2, n = 4
 * 输出: 1->4->3->2->5->NULL
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
// 链表反转
// var reverse = function (head) {
//     if (!head)
//         return null
//     let pre = null, cur = head;
//     while(cur) {
//         let next = cur.next;
//         cur.next = pre;
//         pre = cur;
//         cur = next;
//     }
//     return pre;
// }
// 链表从1到n反转
var extraN = null;
var reverseN = function (head, n) {
    if (n === 1) {
        extraN = head.next;
        return head;
    }
    let last = reverseN(head.next, n-1)
    head.next.next = head;
    head.next = extraN;
    return last
}
var reverseBetween = function(head, m, n) {
    // base
    if (m === 1) {
        return reverseN(head, n)
    }
    // 右移，直到满足 base
    head.next = reverseBetween(head.next, m-1, n-1)
    return head;
};