/*
 * @lc app=leetcode.cn id=14 lang=typescript
 *
 * [14] 最长公共前缀
 *
 * Note：思路差不多，答案写法更高级，下面注释了
 */

// @lc code=start
function longestCommonPrefix(strs: string[]): string {
    if (strs[0] === '') return ''
    if (strs.length === 1) return strs[0]
    const dg = (result, count) => {
        const first = strs[0][count]
        if (first) {
            result += first
        } else {
            return result
        }
        for (let k = 0; k < strs.length; k++) {
            if (strs[k][count] !== result[result.length - 1]) {
                return result.slice(0, result.length - 1)
            }
        }
        if (count === strs[0].length) {
            return ''
        } else {
            count = count + 1
            return dg(result, count)
        }
    }

    return dg('', 0)
}

/**
 * 这段代码定义了一个名为 longestCommonPrefix 的函数
 * 它接受一个名为 strs 的参数，一个字符串数组
 * 函数的目的是找到给定字符串数组中的最长公共前缀
 * 首先，将 strs[0] 作为初始前缀 prefix
 * 然后，遍历字符串数组中的每个字符串 strs[i]
 * 使用 startsWith 方法检查 strs[i] 是否以 prefix 开头
 * 如果不是，则将 prefix 截断一个字符并继续循环
 * 当 prefix 变为空字符串时，说明已经找到最短公共前缀，返回 prefix
 */

// function longestCommonPrefix(strs: string[]): string {
//     let prefix = strs[0]

//     for (let i = 1; i < strs.length; i++) {
//         while (!strs[i].startsWith(prefix)) {
//             prefix = prefix.slice(0, -1)
//         }

//         if (prefix === '') {
//             return prefix
//         }
//     }

//     return prefix
// }
// @lc code=end
