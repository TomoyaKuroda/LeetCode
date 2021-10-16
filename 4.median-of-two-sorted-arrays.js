/*
 * @lc app=leetcode id=4 lang=javascript
 *
 * [4] Median of Two Sorted Arrays
 *
 * https://leetcode.com/problems/median-of-two-sorted-arrays/description/
 *
 * algorithms
 * Hard (32.83%)
 * Likes:    12851
 * Dislikes: 1729
 * Total Accepted:    1.1M
 * Total Submissions: 3.4M
 * Testcase Example:  '[1,3]\n[2]'
 *
 * Given two sorted arrays nums1 and nums2 of size m and n respectively, return
 * the median of the two sorted arrays.
 *
 * The overall run time complexity should be O(log (m+n)).
 *
 *
 * Example 1:
 *
 *
 * Input: nums1 = [1,3], nums2 = [2]
 * Output: 2.00000
 * Explanation: merged array = [1,2,3] and median is 2.
 *
 *
 * Example 2:
 *
 *
 * Input: nums1 = [1,2], nums2 = [3,4]
 * Output: 2.50000
 * Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
 *
 *
 * Example 3:
 *
 *
 * Input: nums1 = [0,0], nums2 = [0,0]
 * Output: 0.00000
 *
 *
 * Example 4:
 *
 *
 * Input: nums1 = [], nums2 = [1]
 * Output: 1.00000
 *
 *
 * Example 5:
 *
 *
 * Input: nums1 = [2], nums2 = []
 * Output: 2.00000
 *
 *
 *
 * Constraints:
 *
 *
 * nums1.length == m
 * nums2.length == n
 * 0 <= m <= 1000
 * 0 <= n <= 1000
 * 1 <= m + n <= 2000
 * -10^6 <= nums1[i], nums2[i] <= 10^6
 *
 *
 */

/*
var findMedianSortedArrays = function (nums1, nums2) {
  let array = [],
    left = 0,
    right = 0,
    output;

  while (left < nums1.length || right < nums2.length) {
    if (nums2[right] == null || nums1[left] <= nums2[right]) {
      array.push(nums1[left]);
      left++;
    } else if (nums1[left] == null || nums1[left] > nums2[right]) {
      array.push(nums2[right]);
      right++;
    }
  }
  //[1,2,3,4]
  if (array.length % 2 === 0) {
    output = (array[array.length / 2] + array[array.length / 2 - 1]) / 2;
  } else {
    output = array[Math.floor(array.length / 2)];
  }
  return output;
};
// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let output = [];
  while (nums1.length && nums2.length) {
    if (nums1[0] < nums2[0]) {
      output.push(nums1.shift());
    } else {
      output.push(nums2.shift());
    }
  }
  if (nums1.length) {
    output = output.concat(nums1);
  } else {
    output = output.concat(nums2);
  }
  if (output.length % 2 === 0) {
    return (output[output.length / 2] + output[output.length / 2 - 1]) / 2;
  } else {
    return output[Math.floor(output.length / 2)];
  }
};
// @lc code=end
