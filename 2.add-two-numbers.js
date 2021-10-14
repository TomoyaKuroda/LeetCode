/*
 * @lc app=leetcode id=2 lang=javascript
 *
 * [2] Add Two Numbers
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let listNode = new ListNode();
  let outputNode = listNode;
  let parent = 0;
  while (l1 || l2 || parent) {
    let num1 = 0,
      num2 = 0;
    if (l1) {
      num1 = l1.val;
      l1 = l1.next;
    }
    if (l2) {
      num2 = l2.val;
      l2 = l2.next;
    }

    let newNode = new ListNode((num1 + num2 + parent) % 10);
    listNode.next = newNode;
    listNode = newNode;

    parent = Math.floor((num1 + num2 + parent) / 10);
  }
  return outputNode.next;
};
// @lc code=end
