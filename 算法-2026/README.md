# 算法-2026

> 综合 [`面试-2026/`](../面试-2026/) 面经归纳 + [`链与树.md`](./链与树.md) 大厂链表/二叉树全题库，对标 [LeetCode](https://leetcode.cn/) 题号，并链接仓库内已有题解。  
> **目标：全练** — 链表 23 题 + 二叉树 36 题 + 其他专题 17 题（**去重合计 76 题**），面经原题与各专题交叉处只保留一处。⭐ = CodeTop / 面经高频原题。

相关面试梳理：[面试题库梳理-高频·高难度·资深推演](../面试-2026/面试题库梳理-高频·高难度·资深推演.md) · 链表/树分阶详解：[链与树.md](./链与树.md)

---

## 一、面经原题速查（必刷）

| LeetCode | 题目 | 难度 | 面经来源 | 本地题解 | 在全库中的位置 |
|:--------:|------|:----:|----------|----------|----------------|
| [146](https://leetcode.cn/problems/lru-cache/) | LRU 缓存 | Medium | [腾讯元宝-实习](../面试-2026/腾讯元宝-实习.md) | [146](../medium/146.%20LRU缓存机制.md) | 链表 Ⅲ |
| [206](https://leetcode.cn/problems/reverse-linked-list/) | 反转链表 | Easy | [字节-实习-1面](../面试-2026/字节-实习-1面.md)、[快手-实习-2面](../面试-2026/快手-实习-2面.md) | [206](../easy/206.%20反转链表.md) | 链表 Ⅰ |
| [21](https://leetcode.cn/problems/merge-two-sorted-lists/) | 合并两个有序链表 | Easy | [字节-实习-2面](../面试-2026/字节-实习-2面.md) | [21](../easy/21.合并两个有序链表.md) | 链表 Ⅰ |
| [5](https://leetcode.cn/problems/longest-palindromic-substring/) | 最长回文子串 | Medium | [快手-实习-1面](../面试-2026/快手-实习-1面.md) | [5](../medium/5.最长回文子串.js) | 其他 · 字符串 |
| — | 单例模式（设计模式） | — | [字节-实习-1面](../面试-2026/字节-实习-1面.md) | 非 LeetCode | 见 §七 说明 |

**跨面经高频**（[面试题库梳理](../面试-2026/面试题库梳理-高频·高难度·资深推演.md) §2.5）：LRU、反转链表、合并有序链表、最长回文子串、单例 —— AI 应用岗一面算法基本落在这几类。

---

## 二、链表全题库（23 题 · 3 阶）

> 社招资深：重工程实现（LRU、随机链表、多路归并）；实习/应届：Ⅰ 阶必全会。

### Ⅰ 基础打底（一面必考）

| 题号 | 题目 | 难度 | 本地题解 | 大厂考点 |
|:----:|------|:----:|----------|----------|
| [206](https://leetcode.cn/problems/reverse-linked-list/) | 反转链表 | Easy ⭐ | [206](../easy/206.%20反转链表.md) | 字节：迭代 + 递归双写法 |
| [92](https://leetcode.cn/problems/reverse-linked-list-ii/) | 反转链表 II | Medium ⭐ | [92](../medium/92.%20反转链表%20II.js) | 阿里 P7 手撕 |
| [24](https://leetcode.cn/problems/swap-nodes-in-pairs/) | 两两交换链表中的节点 | Medium | [24](../medium/24.两两交换链表中的节点.js) | 腾讯客户端 |
| [19](https://leetcode.cn/problems/remove-nth-node-from-end-of-list/) | 删除链表的倒数第 N 个结点 | Medium ⭐ | [19](../medium/19.删除链表的倒数第N个节点.js) | 美团/字节，dummy 哨兵 |
| [82](https://leetcode.cn/problems/remove-duplicates-from-sorted-list-ii/) | 删除排序链表中的重复元素 II | Medium | [82](../medium/82.%20删除排序链表中的重复元素%20II.js) | 与 83 区分，易坑 |
| [83](https://leetcode.cn/problems/remove-duplicates-from-sorted-list/) | 删除排序链表中的重复元素 | Easy | — | 保留一个重复，边界训练 |
| [21](https://leetcode.cn/problems/merge-two-sorted-lists/) | 合并两个有序链表 | Easy ⭐ | [21](../easy/21.合并两个有序链表.md) | **面经原题**，全厂入门 |
| [160](https://leetcode.cn/problems/intersection-of-two-linked-lists/) | 相交链表 | Easy ⭐ | — | 快慢指针 + 长度差 |
| [141](https://leetcode.cn/problems/linked-list-cycle/) | 环形链表 | Easy ⭐ | — | 快慢指针判环 |
| [142](https://leetcode.cn/problems/linked-list-cycle-ii/) | 环形链表 II | Medium ⭐ | — | 求入环点，数学推导 |
| [2](https://leetcode.cn/problems/add-two-numbers/) | 两数相加 | Medium ⭐ | [2](../medium/2.两数相加.js) | 头条/字节社招 |
| [328](https://leetcode.cn/problems/odd-even-linked-list/) | 奇偶链表 | Medium | — | 携程、网易 |
| [86](https://leetcode.cn/problems/partition-list/) | 分隔链表 | Medium | — | 快手 |

### Ⅱ 进阶中档（二面高频）

| 题号 | 题目 | 难度 | 本地题解 | 考点 |
|:----:|------|:----:|----------|------|
| [234](https://leetcode.cn/problems/palindrome-linked-list/) | 回文链表 | Medium ⭐ | [234](../easy/234.%20回文链表.md) | 快慢找中点 + 后半反转，O(1) 空间 |
| [61](https://leetcode.cn/problems/rotate-list/) | 旋转链表 | Medium | — | 成环边界 |
| [148](https://leetcode.cn/problems/sort-list/) | 排序链表 | Medium ⭐ | [148](../medium/148.%20排序链表.js) | 链表归并，O(1) 辅助空间 |
| [725](https://leetcode.cn/problems/split-linked-list-in-parts/) | 分隔链表成 k 段 | Medium | — | 字节 |

### Ⅲ 资深 Hard（终面 / P7+）

| 题号 | 题目 | 难度 | 本地题解 | 面试场景 |
|:----:|------|:----:|----------|----------|
| [25](https://leetcode.cn/problems/reverse-nodes-in-k-group/) | K 个一组翻转链表 | Hard ⭐ | [25](../hard/25.%20K%20个一组翻转链表.js) | 字节/阿里链表天花板 |
| [23](https://leetcode.cn/problems/merge-k-sorted-lists/) | 合并 K 个升序链表 | Hard ⭐ | — | **资深 TOP1**，堆 / 分治 |
| [138](https://leetcode.cn/problems/copy-list-with-random-pointer/) | 复制带随机指针的链表 | Medium | — | 阿里 P7，哈希 + 原地 |
| [146](https://leetcode.cn/problems/lru-cache/) | LRU 缓存 | Medium ⭐ | [146](../medium/146.%20LRU缓存机制.md) | **面经原题**，双向链表 + 哈希 |
| [432](https://leetcode.cn/problems/all-oone-data-structure/) | 全 O(1) 的数据结构 | Hard | — | LFU 简易版，阿里 P8 |
| [707](https://leetcode.cn/problems/design-linked-list/) | 设计链表 | Medium | — | 手写双向链表边界 |

---

## 三、二叉树全题库（36 题 · 3 阶）

> 资深：树形 DP、LCA 扩展、BST 修复、序列化、多树合并。

### Ⅰ 基础遍历与构造

#### 1. 遍历（前 / 中 / 后 / 层序）

| 题号 | 题目 | 难度 | 本地题解 | 备注 |
|:----:|------|:----:|----------|------|
| [94](https://leetcode.cn/problems/binary-tree-inorder-traversal/) | 二叉树的中序遍历 | Easy ⭐ | [94](../medium/94.%20二叉树的中序遍历.js) | 迭代栈必写 |
| [144](https://leetcode.cn/problems/binary-tree-preorder-traversal/) | 二叉树的前序遍历 | Easy | [144](../medium/144.二叉树的前序和后序遍历.js) | |
| [145](https://leetcode.cn/problems/binary-tree-postorder-traversal/) | 二叉树的后序遍历 | Easy | [145](../medium/145.%20二叉树的后序遍历.js) | |
| [102](https://leetcode.cn/problems/binary-tree-level-order-traversal/) | 层序遍历 | Medium ⭐ | [102](../medium/102.二叉树的层序遍历.md) | BFS 入门 |
| [103](https://leetcode.cn/problems/binary-tree-zigzag-level-order-traversal/) | 锯齿形层序遍历 | Medium | — | 腾讯 |
| [199](https://leetcode.cn/problems/binary-tree-right-side-view/) | 二叉树的右视图 | Medium ⭐ | [199](../medium/199.%20二叉树的右视图.md) | 字节 BFS 变式 |
| [513](https://leetcode.cn/problems/find-bottom-left-tree-value/) | 找树左下角的值 | Medium | — | BFS / DFS |

#### 2. 构造（前中 / 中后建树）

| 题号 | 题目 | 难度 | 本地题解 |
|:----:|------|:----:|----------|
| [105](https://leetcode.cn/problems/construct-binary-tree-from-preorder-and-inorder-traversal/) | 从前序与中序遍历构造二叉树 | Medium ⭐ | — |
| [106](https://leetcode.cn/problems/construct-binary-tree-from-inorder-and-postorder-traversal/) | 从中序与后序遍历构造二叉树 | Medium | — |
| [109](https://leetcode.cn/problems/convert-sorted-list-to-binary-search-tree/) | 有序链表转 BST | Medium ⭐ | — |
| [108](https://leetcode.cn/problems/convert-sorted-array-to-binary-search-tree/) | 将有序数组转换为 BST | Easy | [108](../easy/108.%20将有序数组转换为二叉搜索树.md) |

#### 3. 基础属性

| 题号 | 题目 | 难度 | 本地题解 |
|:----:|------|:----:|----------|
| [104](https://leetcode.cn/problems/maximum-depth-of-binary-tree/) | 二叉树的最大深度 | Easy | — |
| [111](https://leetcode.cn/problems/minimum-depth-of-binary-tree/) | 二叉树的最小深度 | Easy | [111](../easy/111.%20二叉树的最小深度.md) |
| [101](https://leetcode.cn/problems/symmetric-tree/) | 对称二叉树 | Easy ⭐ | [101](../easy/101.对称二叉树.md) |
| [543](https://leetcode.cn/problems/diameter-of-binary-tree/) | 二叉树的直径 | Medium ⭐ | [543](../easy/543.%20二叉树的直径.md) |
| [226](https://leetcode.cn/problems/invert-binary-tree/) | 翻转二叉树 | Easy | — |

### Ⅱ 进阶中档（BST · 路径 · LCA）

#### 1. BST

| 题号 | 题目 | 难度 | 本地题解 | 考点 |
|:----:|------|:----:|----------|------|
| [98](https://leetcode.cn/problems/validate-binary-search-tree/) | 验证二叉搜索树 | Medium ⭐ | [98](../medium/98.%20验证二叉搜索树.js) | 区间 [min,max] 递归 |
| [230](https://leetcode.cn/problems/kth-smallest-element-in-a-bst/) | BST 中第 K 小的元素 | Medium ⭐ | — | 中序，阿里原题 |
| [99](https://leetcode.cn/problems/recover-binary-search-tree/) | 恢复二叉搜索树 | Medium ⭐ | — | 两个乱序节点 |
| [235](https://leetcode.cn/problems/lowest-common-ancestor-of-a-binary-search-tree/) | BST 的最近公共祖先 | Medium | [235](../easy/235.%20二叉搜索树的最近公共祖先.md) | 对比 236 |
| [538](https://leetcode.cn/problems/convert-bst-to-greater-tree/) | 把 BST 转换为累加树 | Medium | — | 逆中序 |

#### 2. 路径求和

| 题号 | 题目 | 难度 | 本地题解 |
|:----:|------|:----:|----------|
| [112](https://leetcode.cn/problems/path-sum/) | 路径总和 | Easy | — |
| [113](https://leetcode.cn/problems/path-sum-ii/) | 路径总和 II | Medium ⭐ | — |
| [437](https://leetcode.cn/problems/path-sum-iii/) | 路径总和 III | Medium ⭐ | — |
| [129](https://leetcode.cn/problems/sum-root-to-leaf-numbers/) | 求根节点到叶节点数字之和 | Medium | — |

#### 3. LCA

| 题号 | 题目 | 难度 | 本地题解 | 面试 |
|:----:|------|:----:|----------|------|
| [236](https://leetcode.cn/problems/lowest-common-ancestor-of-a-binary-tree/) | 二叉树的最近公共祖先 | Medium ⭐ | [236](../medium/236.%20二叉树的最近公共祖先.js) | 字节/阿里三面必追 |

### Ⅲ 资深 Hard（树形 DP · 序列化 · 综合）

#### 1. 树形 DP

| 题号 | 题目 | 难度 | 本地题解 | 大厂场景 |
|:----:|------|:----:|----------|----------|
| [124](https://leetcode.cn/problems/binary-tree-maximum-path-sum/) | 二叉树中的最大路径和 | Hard ⭐ | [124](../hard/124.%20二叉树中的最大路径和.js) | 阿里 SP 树形 DP 天花板 |
| [687](https://leetcode.cn/problems/longest-univalue-path/) | 最长同值路径 | Hard | — | 与 543 同模型 |
| [865](https://leetcode.cn/problems/smallest-subtree-with-all-the-deepest-nodes/) | 具有所有最深节点的最小子树 | Hard | — | 美团资深三面 |
| [337](https://leetcode.cn/problems/house-robber-iii/) | 打家劫舍 III | Medium | — | 腾讯经典树 DP |

#### 2. 序列化

| 题号 | 题目 | 难度 | 本地题解 |
|:----:|------|:----:|----------|
| [297](https://leetcode.cn/problems/serialize-and-deserialize-binary-tree/) | 二叉树的序列化与反序列化 | Hard ⭐ | — |
| [449](https://leetcode.cn/problems/serialize-and-deserialize-bst/) | 序列化和反序列化 BST | Medium | — |

#### 3. 树综合

| 题号 | 题目 | 难度 | 本地题解 | 备注 |
|:----:|------|:----:|----------|------|
| [654](https://leetcode.cn/problems/maximum-binary-tree/) | 最大二叉树 | Medium | — | 构造变式 |
| [114](https://leetcode.cn/problems/flatten-binary-tree-to-linked-list/) | 二叉树展开为链表 | Medium ⭐ | — | 原地 O(1)，阿里 |
| [863](https://leetcode.cn/problems/all-nodes-distance-k-in-binary-tree/) | 距离 K 的所有节点 | Hard ⭐ | — | 图化 + BFS |
| [968](https://leetcode.cn/problems/binary-tree-cameras/) | 监控二叉树 | Hard | — | 树形 DP，微软/阿里 |

---

## 四、其他专题（面经延伸 · 与链/树不重复）

### 字符串 / 双指针

| 题号 | 题目 | 难度 | 本地题解 | 备注 |
|:----:|------|:----:|----------|------|
| [5](https://leetcode.cn/problems/longest-palindromic-substring/) | 最长回文子串 | Medium | [5](../medium/5.最长回文子串.js) | **面经原题** |
| [9](https://leetcode.cn/problems/palindrome-number/) | 回文数 | Easy | [9](../easy/9.回文数.md) | |
| [14](https://leetcode.cn/problems/longest-common-prefix/) | 最长公共前缀 | Easy | [14](../easy/14.最长公共前缀.md) | |
| [3](https://leetcode.cn/problems/longest-substring-without-repeating-characters/) | 无重复字符的最长子串 | Medium | [3](../medium/3.无重复字符的最长子串.js) | 滑动窗口 |
| [15](https://leetcode.cn/problems/3sum/) | 三数之和 | Medium | [15](../medium/15.三数之和.js) | 排序 + 双指针 |

### 哈希 / 设计（LRU 见 §二 Ⅲ）

| 题号 | 题目 | 难度 | 本地题解 |
|:----:|------|:----:|----------|
| [1](https://leetcode.cn/problems/two-sum/) | 两数之和 | Easy | [1](../easy/1.两数之和.md) |
| [350](https://leetcode.cn/problems/intersection-of-two-arrays-ii/) | 两个数组的交集 II | Easy | [350](../easy/350.%20两个数组的交集II.md) |

### 栈 / 队列

| 题号 | 题目 | 难度 | 本地题解 | 备注 |
|:----:|------|:----:|----------|------|
| [20](https://leetcode.cn/problems/valid-parentheses/) | 有效的括号 | Easy | [20](../easy/20.有效的括号.md) | |
| [225](https://leetcode.cn/problems/implement-stack-using-queues/) | 用队列实现栈 | Easy | [225](../easy/225.%20用队列实现栈.md) | |
| [232](https://leetcode.cn/problems/implement-queue-using-stacks/) | 用栈实现队列 | Easy | [232](../easy/232.%20用栈实现队列.md) | |
| [239](https://leetcode.cn/problems/sliding-window-maximum/) | 滑动窗口最大值 | Hard | [239](../hard/239.%20滑动窗口最大值.js) | 限流八股呼应 |

### 动态规划 / 贪心

| 题号 | 题目 | 难度 | 本地题解 |
|:----:|------|:----:|----------|
| [53](https://leetcode.cn/problems/maximum-subarray/) | 最大子数组和 | Easy | [53](../easy/53.最大子序和.md) |
| [70](https://leetcode.cn/problems/climbing-stairs/) | 爬楼梯 | Easy | [70](../easy/70.爬楼梯.md) |
| [121](https://leetcode.cn/problems/best-time-to-buy-and-sell-stock/) | 买卖股票的最佳时机 | Easy | [121](../medium/121.%20买卖股票的最佳时机.js) |
| [300](https://leetcode.cn/problems/longest-increasing-subsequence/) | 最长递增子序列 | Medium | [300](../medium/300.最长上升子序列.js) |

### 图 / BFS

| 题号 | 题目 | 难度 | 本地题解 |
|:----:|------|:----:|----------|
| [200](https://leetcode.cn/problems/number-of-islands/) | 岛屿数量 | Medium | [200](../medium/200.%20岛屿数量.md) |
| [547](https://leetcode.cn/problems/number-of-provinces/) | 省份数量 | Medium | [547](../medium/547.%20朋友圈.md) |

---

## 五、资深手写拓展（无 LC 编号 · 常口头手撕）

1. 双向循环链表实现 LRU / LFU（对照 [146](https://leetcode.cn/problems/lru-cache/)、[432](https://leetcode.cn/problems/all-oone-data-structure/)）
2. 多叉树 / N 叉树序列化（[429](https://leetcode.cn/problems/n-ary-tree-level-order-traversal/) 层序打底）
3. 多棵 BST 合并为一棵平衡 BST
4. LCA 扩展：多个节点的公共祖先（[236](https://leetcode.cn/problems/lowest-common-ancestor-of-a-binary-tree/) 变种）

**单例模式**（字节一面）：线程安全、懒汉/饿汉、双重检查锁 — 非 LeetCode，与 146 等设计题一并准备。

---

## 六、各公司算法考察倾向

| 公司 / 来源 | 算法风格 | 面经中的原题 |
|-------------|----------|--------------|
| **腾讯**（元宝 CSIG） | Easy~Medium 设计 + 链表/缓存 | LRU |
| **字节** | Easy 链表 + 设计模式 + Hard 链表/树 | 反转链表、单例、合并有序链表、K 组翻转、右视图 |
| **快手** | Medium 字符串 + Easy 链表 | 最长回文子串、反转链表 |
| **阿里** | 区间反转、随机链表、建树、树形 DP | 92、138、105、124、297 |
| **美团** | 删除倒数 N、合并 K 路、LCA 变式 | 19、23、865 |
| **OpenAI / Anthropic** | 工程编码为主，少考纯套路 | 系统设计为主 |

> 来源：[实习感悟](../面试-2026/实习感悟.md)、[谷歌收集-国外大厂](../面试-2026/谷歌收集-国外大厂.md)

---

## 七、推荐刷题顺序（全练路线）

### A. 面经必刷（1~2 天）

```
206 → 21 → 146 → 5 → 单例模式
```

### B. 链表全练（按阶，23 题）

```
Ⅰ：206 → 21 → 141 → 142 → 160 → 19 → 82/83 → 92 → 24 → 2 → 86 → 328
Ⅱ：234 → 148 → 61 → 725
Ⅲ：146 → 23 → 25 → 138 → 707 → 432
```

**资深链表核心 5 题**：146 → 23 → 25 → 138 → 148

### C. 二叉树全练（按阶，36 题）

```
Ⅰ 遍历：94 → 144 → 145 → 102 → 103 → 199 → 513
Ⅰ 构造：105 → 106 → 108 → 109
Ⅰ 属性：101 → 104 → 111 → 226 → 543
Ⅱ BST：98 → 230 → 235 → 99 → 538
Ⅱ 路径：112 → 113 → 437 → 129
Ⅱ LCA：236
Ⅲ：124 → 297 → 114 → 863 → 337 → 687 → 865 → 968 → 654 → 449
```

**资深二叉树核心 6 题**：236 → 124 → 297 → 98 → 437 → 543

### D. 其他专题（时间充裕）

```
字符串：3 → 15 | 哈希：1 → 350 | 栈：20 → 225 → 232
DP：53 → 70 → 121 → 300 | 图：200 → 547 | Hard：239
```

完整仓库索引：[根目录 README.md](../README.md)「2021-算法题」章节。

---

## 八、题量统计

| 模块 | 题数 | 仓库已有题解 |
|------|:----:|:------------:|
| 链表（§二） | 23 | 11 |
| 二叉树（§三） | 36 | 13 |
| 其他专题（§四） | 17 | 17 |
| **去重后合计** | **76** | **41** |

| LeetCode 标签 | 面经/大厂权重 |
|---------------|:-------------:|
| 链表 | ★★★★★ |
| 二叉树 / 树形 DP | ★★★★★ |
| 设计（LRU/LFU） | ★★★★☆ |
| 双指针 / 字符串 | ★★★★☆ |
| 栈 / 队列 | ★★★☆☆ |
| 动态规划 | ★★★☆☆ |
| 图 / BFS | ★★☆☆☆ |

---

*最后更新：2026-06-05 | 数据来源：`面试-2026/` 17 份文档 + `链与树.md`*
