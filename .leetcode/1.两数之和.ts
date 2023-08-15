/*
 * @lc app=leetcode.cn id=1 lang=typescript
 *
 * [1] 两数之和
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
    function dd(numbers: number[], times: number): number[] {
        const num = numbers.shift() as number
        for (let k = 0; k < numbers.length; k++) {
            if (num + numbers[k] === target) {
                return [times, times + k + 1]
            }
        }
        times = times + 1
        dd(numbers, times)
    }
    return dd(nums, 0)
}
// @lc code=end
