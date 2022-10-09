// Question #3: Compressing Strings
// Write an algorithm that takes a string with repeated characters and compresses them, using a number to show how many times the repeated character has been compressed. For instance, aaa would be written as 3a. Solve the problem with and without recursion.

// Example
// Input: "aaabccdddda"

// Output: "3ab2c4da"

//itterative:
//declare an empty string
//itterate over string with for loop
  //itterate over each char with a while loop..

function itterativeCompressString(str){
  let compressedStr = "";
  for(let i = 0; i < str.length; i++){
    if (str[i] === str[i-1]){
      continue;
    } else {
      let count = i;
      while (str[count] === str[i]){
        count++;
      }
      if (count - i === 1){
        compressedStr += str[i];
      } else {
        compressedStr += (count - i) + str[i];
      }
    }
    
  }
  return compressedStr;
}

const itterative3 = itterativeCompressString("aaabccdddda");
console.log("itterative:", itterative3);

//frecuency map:
//create a frecuency map
//using a for in loop
  //if obj[key] is 1 then return then push the key onto a string
  //if obj[key] >1 then push the value and the key onto a string
//return string

function frecuencyCompressString(str){ //this function works as long as like chars are lumped together and in order.. so the logic will not work
  let compressedStr = "";
  const counts = {};
  for (let i = 0; i < str.length; i++){
    counts[str[i]] = counts[str[i]] ? counts[str[i]] + 1 : 1;
  }
  for (const key in counts){
    counts[key] === 1 ? compressedStr += key : compressedStr += counts[key] + key;
  }
  return compressedStr;
}

const map3 = frecuencyCompressString("aaabccdddda");
console.log("frecuency:", map3);

//recursive:
//base case is if arr length is empty return arr
//declare a count var
//while loop while x is arr at position 0
  //counter++
//if counter is 1 return arr item and recurse with arr sliced at 1
//else if counter is greater than 1 return counter number + arr item and recursive arr sliced at counter-1

function recursiveCompressString(str){ //works and is most successful!
  if(str.length === 0){
    return str;
  }
  let i = 0;
  while(str[i] === str[0]){
    i++;
  }
  if (i === 1){
    return `${str[0]}` + recursiveCompressString(str.slice(i));
  } else{
    return `${i}${str[0]}` + recursiveCompressString(str.slice(i));
  }
}

const recurse3 = recursiveCompressString("aaabccdddda");
console.log("recursive:", recurse3);