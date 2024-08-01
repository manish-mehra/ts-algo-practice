function licenseKeyFormatting(s: string, k: number): string {
  

  let retStr = ""
  let level = k
  
  for(let i = s.length - 1; i >= 0; i--){  
    if(s[i] === "-") continue

    if(level === 0){
      retStr += "-" + s[i]
      level = k - 1
      continue
    }
    retStr += s[i]
    level--
  }
  return retStr.toUpperCase().split("").reverse().join("")
}
