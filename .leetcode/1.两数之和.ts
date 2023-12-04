/*
 * @lc app=leetcode.cn id=1 lang=typescript
 *
 * [1] 两数之和
 *
 * Note：查找的时候本质上是找遍历元素和目标值的差，但是要注意避免找到本身，比如[3,2,4] 6这种情况
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
    for (let k = 0; k < nums.length; k++) {
        const index = nums.findIndex((item) => item === target - nums[k])
        if (index > -1 && index !== k) {
            return [k, index]
        }
    }
    return [-1, -1]
}
// @lc code=end
