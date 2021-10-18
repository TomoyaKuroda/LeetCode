/*
 * @lc app=leetcode id=7 lang=javascript
 *
 * [7] Reverse Integer
 *
 * https://leetcode.com/problems/reverse-integer/description/
 *
 * algorithms
 * Medium (26.14%)
 * Likes:    5799
 * Dislikes: 8659
 * Total Accepted:    1.8M
 * Total Submissions: 6.9M
 * Testcase Example:  '123'
 *
 * Given a signed 32-bit integer x, return x with its digits reversed. If
 * reversing x causes the value to go outside the signed 32-bit integer range
 * [-2^31, 2^31 - 1], then return 0.
 *
 * Assume the environment does not allow you to store 64-bit integers (signed
 * or unsigned).
 *
 *
 * Example 1:
 * Input: x = 123
 * Output: 321
 * Example 2:
 * Input: x = -123
 * Output: -321
 * Example 3:
 * Input: x = 120
 * Output: 21
 * Example 4:
 * Input: x = 0
 * Output: 0
 *
 *
 * Constraints:
 *
 *
 * -2^31 <= x <= 2^31 - 1
 *
 *
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let output = [];
  let isNegative;
  x = x.toString().split("");
  if (x[0] === "-") {
    isNegative = true;
    x.shift();
  }
  if (x[x.length - 1] === "0") {
    x.pop();
  }
  while (x.length > 0) {
    output.push(x.pop());
  }
  if (isNegative) {
    output.unshift("-");
  }
  try {
    if (Number(output.join("")) < Math.pow(2, 31) * -1 || Number(output.join("")) > Math.pow(2, 31) - 1) {
      return 0;
    }
  } catch (error) {
    return 0;
  }
  return Number(output.join(""));
};
// @lc code=end
