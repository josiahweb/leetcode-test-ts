/*
 * @lc app=leetcode.cn id=9 lang=typescript
 *
 * [9] 回文数
 *
 * Note：一个数的回文数等于它本身，使用字符串就用reverse，不使用字符串就除10取余翻转
 */

// @lc code=start
const reverseInt = (x: number): number => {
    let reverseNumber = 0
    while (x > 0) {
        reverseNumber = reverseNumber * 10 + (x % 10)
        x = Math.floor(x / 10)
    }
    return reverseNumber
}
function isPalindrome(x: number): boolean {
    return reverseInt(x) === x
}
// @lc code=end
