function licenseKeyFormatting(s: string, k: number): string {
  
  // remove the hypens/dashes
  let newStr = ""
  for(let i = 0; i < s.length; i++){
    if(s[i] === "-") continue
    newStr += s[i]
  }
  // 5F3Z2e9w

  let retStr = ""
  let level = k
  for(let i = newStr.length - 1; i >= 0; i--){
    if(level === 0){
      retStr += "-" + newStr[i]
      level = k - 1 // refill
      continue
    }
    retStr += newStr[i]
    level--
  }
  return retStr.toUpperCase().split("").reverse().join("")
}