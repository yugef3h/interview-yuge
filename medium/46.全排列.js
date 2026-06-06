/**
 * 给定一个 没有重复 数字的序列，返回其所有可能的全排列
 * 
 * 输入: [1,2,3]
 * 输出 数组9种变化...
 */

var permute = function(nums) {
  const result = [];

  // 交换两个元素
  const swap = (arr, i, j) => {
    [arr[i], arr[j]] = [arr[j], arr[i]];
  };

  // 递归生成：固定 first 位置，生成后面的排列
  const backtrack = (arr, first) => {
    // 所有位置都固定了，保存结果
    if (first === arr.length) {
      result.push([...arr]);
      return;
    }

    // 给 first 位置尝试所有可能
    for (let i = first; i < arr.length; i++) {
      swap(arr, i, first);   // 选择
      backtrack(arr, first + 1); // 递归
      swap(arr, i, first);   // 撤销选择（回溯）
    }
  };

  backtrack(nums, 0);
  return result;
};