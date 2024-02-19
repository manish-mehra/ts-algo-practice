import { Stringbuilder } from "./arrays/string-compression";

let testStr = "I tried implementing my own StringBuilder for fun to see if I couldimprove upon the 10 seconds it takes in Firefox and failed. My version of StringBuilder implemented in Javascript in Firefox took over 70 seconds to handle 2^27concatenations. Javascript provides a couple ways of creating strings directly from arrays.The first I tried was String.fromCharCode. This method looked like it would be faster; however, at 2^17 it fails with Uncaught RangeError: Maximum call stack size exceeded because String.fromCharCode uses function parameter arguments. As a result, when you use ... array expansion or Function.apply, you blow up your stack.In my second attempt, I tried using TextDecoder and TextEncoder. In Firefox took over 70 seconds to handle 2^27 concatenations! As a result, you cannot implement a StringBuilder efficiently in Javascript yet";

let newStr = ""
let strB = new Stringbuilder(testStr.length)

const startTime = performance.now();
for (let i = 0; i < testStr.length; i++) {
  // newStr += testStr.charAt(i)
  strB.append(testStr.charAt(i))
}
const newStrB = strB.toString

// Get the end time
const endTime = performance.now();

// Calculate the elapsed time
const elapsedTime = endTime - startTime;

console.log(`Elapsed time: ${elapsedTime} milliseconds`);