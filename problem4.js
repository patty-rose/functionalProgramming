// Question #4: Checking for Uniqueness
// Write an algorithm that determines whether all the elements in a string are unique. You may not convert the string into an array or use array methods to solve this problem. The algorithm should return a boolean.

// Example
// Input: "hello"
// Output: false

// Input: "copyright"
// Output: true

//frecuency map:
//create a frecuency map of string chars
//loop through map 
  //if value > 1 return false
//return true

function mapUniqueCheck(str){
  const counts = {};
  for(let i = 0; i < str.length; i++){
    counts[str[i]] = counts[str[i]] ? counts[str[i]] + 1 : 1;
  }
  for (const key in counts){
    if(counts[key] > 1) {
      return false;
    }
  }
  return true;
}

const map4True = mapUniqueCheck("copyright");
const map4False = mapUniqueCheck("hello");
console.log("map true:", map4True);
console.log("map false:", map4False);

//itterative:
//loop through string
  //if lastIndexOf != firstIndexOf
    //return false
//return true

function itterativeUniqueCheck(str){
  for(let i = 0; i < str.length; i++){
    if (str.lastIndexOf(str[i]) != str.indexOf(str[i])){
      return false;
    }
  }
  return true;
}

const itterative4True = itterativeUniqueCheck("copyright");
const itterative4False = itterativeUniqueCheck("hello");
console.log("itterative true:", itterative4True);
console.log("itterative false:", itterative4False);

//recursive:
//base case: if str length is 0 return true
//if lastIndexOf str[0] is not str[0]
  //return false
//else return recursive str sliced at 1

function recursiveUniqueCheck(str){
  if(str.length === 0){
    return true;
  } else if(str.lastIndexOf(str[0]) != 0){
    return false;
  } else {
    return recursiveUniqueCheck(str.slice(1));
  }
}

const recurse4True = recursiveUniqueCheck("copyright");
const recurse4False = recursiveUniqueCheck("hello");
console.log("recursive true:", recurse4True);
console.log("recursive false:", recurse4False);
