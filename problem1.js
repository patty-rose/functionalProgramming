// Question #1: Turning Strings to URLs
// URLs cannot have spaces. Instead, all spaces in a string are replaced with %20. Write an algorithm that replaces all spaces in a string with %20.

// You may not use the replace() method or regular expressions to solve this problem. Solve the problem with and without recursion.

// Example
// Input: "Jasmine Ann Jones"

// Output: "Jasmine%20Ann%20Jones"

//iterative:
//declare empty string
//itterate over input string
  //if input at index is a space
    //add "%20" to the empty string
  //else add input at index to the empty string
//return empty string

function stringToUrl(str){
  let strNoSpaces = "";
  for (let i = 0; i < str.length; i++){
    if (str[i] === " "){
      strNoSpaces += "%20";
    } else {
      strNoSpaces += str[i];
    }
  }
  return strNoSpaces;
}

const problem1 = stringToUrl("hi no spaces here right?");
console.log("iterative:", problem1);

//recursive:
//if str length is 0 return
//else if str at index 0 is a space 
  //return "%20" + recursive at str sliced at index 1

function recursiveStringToUrl(str){
  if (str.length === 0){ //base case
    return str;
  } else if (str[0] === " "){ //recursion conditionals
    return "%20" + recursiveStringToUrl(str.slice(1));
  } else {
    return str[0] + recursiveStringToUrl(str.slice(1));
  }
  //needs a termination case
}

const problem1Recursive = recursiveStringToUrl("hi no spaces here right?");
console.log("recursive:", problem1Recursive);