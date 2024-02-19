// A->A->B->A->[B] B A k = 1
// {A: 1}; dom = 1; max = 1
// {A: 2}; dom = 2; max = 2
// {A: 2, B: 1};dom = 2;max = 3
// {A: 3, b: 1};dom: 3;max = 4
//{A: 3, B: 2 -> 1}; dom: 3; max = 4 -> 4

export function characterReplacement(s: string, k: number): number {
  const charCount: {[key: string]: number} = {} 

  let max = 0
  let domChar = 0
  let l = 0

  for(let i = 0; i < s.length; i++){
    if(s[i] in charCount) charCount[s[i]]++
    else charCount[s[i]] = 1

    domChar = Math.max(domChar, charCount[s[i]])

    // case: invalid window
    while(i-l+1 - domChar > k){
      charCount[s[i]]--
      if(charCount[s[l]] === 0) delete charCount[s[l]]
      l++
    }
    max = Math.max(max, i - l + 1)    
  }

  return max
}

