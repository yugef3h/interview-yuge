// 给你一个整数数组 nums ，其中可能包含重复元素，请你返回该数组所有可能的 子集（幂集）。

// 解集 不能 包含重复的子集。返回的解集中，子集可以按 任意顺序 排列。

 

// 示例 1：

// 输入：nums = [1,2,2]
// 输出：[[],[1],[1,2],[1,2,2],[2],[2,2]]
// 示例 2：

// 输入：nums = [0]
// 输出：[[],[0]]


// 要穷举所有可能（所有子集、所有排列、所有组合），那么就要用到回溯算法。
// 回溯要 push 就要 pop 撤销


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    nums.sort((a, b) => a - b)

    const result = []
    let path = []

    const backTrack = (startIndex) => {
        result.push([...path]) // 拷贝副本存入结果
        for (let i = startIndex; i < nums.length; i++) {
            if (i > startIndex && nums[i] === nums[i - 1]) continue;
            path.push(nums[i])
            backTrack(i + 1)
            path.pop()
        }
    }

    backTrack(0)
    return result
};