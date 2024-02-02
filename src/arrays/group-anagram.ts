
/**
Date: 31 Jan, 2024
Example 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
Example 2:

Input: strs = [""]
Output: [[""]]
Example 3:

Input: strs = ["a"]
Output: [["a"]]

Constraints:

1 <= strs.length <= 104
0 <= strs[i].length <= 100
strs[i] consists of lowercase English letters.

* */


export function groupAnagrams(strs: string[]): string[][] {
  const ans: { [key: string]: string[] } = {};

  for (const s of strs) {
    const count: number[] = Array(26).fill(0);

    for (const c of s) {
      count[c.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }

    const key = count.join(',');

    if (ans[key]) {
      ans[key].push(s);
    } else {
      ans[key] = [s];
    }
  }

  return Object.values(ans)
}