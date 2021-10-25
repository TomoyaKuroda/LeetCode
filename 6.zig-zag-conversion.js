/*
 * @lc app=leetcode id=6 lang=javascript
 *
 * [6] ZigZag Conversion
 *
 * https://leetcode.com/problems/zigzag-conversion/description/
 *
 * algorithms
 * Medium (39.88%)
 * Likes:    2915
 * Dislikes: 6928
 * Total Accepted:    652.8K
 * Total Submissions: 1.6M
 * Testcase Example:  '"PAYPALISHIRING"\n3'
 *
 * The string "PAYPALISHIRING" is written in a zigzag pattern on a given number
 * of rows like this: (you may want to display this pattern in a fixed font for
 * better legibility)
 *
 *
 * P   A   H   N
 * A P L S I I G
 * Y   I   R
 *
 *
 * And then read line by line: "PAHNAPLSIIGYIR"
 *
 * Write the code that will take a string and make this conversion given a
 * number of rows:
 *
 *
 * string convert(string s, int numRows);
 *
 *
 *
 * Example 1:
 *
 *
 * Input: s = "PAYPALISHIRING", numRows = 3
 * Output: "PAHNAPLSIIGYIR"
 *
 *
 * Example 2:
 *
 *
 * Input: s = "PAYPALISHIRING", numRows = 4
 * Output: "PINALSIGYAHRPI"
 * Explanation:
 * P     I    N
 * A   L S  I G
 * Y A   H R
 * P     I
 *
 *
 * Example 3:
 *
 *
 * Input: s = "A", numRows = 1
 * Output: "A"
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= s.length <= 1000
 * s consists of English letters (lower-case and upper-case), ',' and '.'.
 * 1 <= numRows <= 1000
 *
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (numRows == 1) return s;
  let output = [];
  let isGoingDown = true;
  for (let i = 0; i < numRows; i++) {
    output.push([]);
  }
  for (let i = 0; i < s.length; i++) {
    if (i % ((numRows - 1) * 2) === 0) {
      output[0] += s[i];
      isGoingDown = true;
    } else if (i % ((numRows - 1) * 2) === numRows - 1) {
      output[numRows - 1] += s[i];
      isGoingDown = false;
    } else {
      if (isGoingDown) {
        // i=7, index=1,numRows=4:
        let index = i % ((numRows - 1) * 2);
        output[index] += s[i];
      } else {
        //i = 11, index = 1, numRows=4:  8  -5
        let index = numRows * 2 - 2 - (i % ((numRows - 1) * 2));
        output[index] += s[i];
      }
    }
  }
  return output.join("");
};
// @lc code=end
