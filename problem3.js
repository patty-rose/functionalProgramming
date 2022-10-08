// Question #3: Compressing Strings
// Write an algorithm that takes a string with repeated characters and compresses them, using a number to show how many times the repeated character has been compressed. For instance, aaa would be written as 3a. Solve the problem with and without recursion.

// Example
// Input: "aaabccdddda"

// Output: "3ab2c4da"

//itterative:
//declare an empty string
//itterate over string 

//frecuency map:
//create a frecuency map
//using a for in loop
  //if obj[key] is 1 then return then push the key onto a string
  //if obj[key] >1 then push the value and the key onto a string
//return string

function frecuencyCompressString(str){ //this function works as long as like chars are lumped together and in order
  let compressedStr = "";
  const counts = {};
  for (let i = 0; i < str.length; i++){
    counts[str[i]] = counts[str[i]] ? counts[str[i]] + 1 : 1;
  }
  console.log(counts);
  for (const key in counts){
    counts[key] === 1 ? compressedStr += key : compressedStr += counts + key;
  }
  return compressedStr;
}

const map3 = frecuencyCompressString("aaabccdddda");
console.log("frecuency:", map3);

//recursive:
//base case is if arr length is empty return arr
//declare a counter var
//while loop while x is arr at position 0
  //counter++
//if counter is 1 return arr item and recurse with arr sliced at 1
//else if counter is greater than 1 return counter number + arr item and recursive arr sliced at counter-1