// Question #2: Array Deduping
// Write an algorithm that removes duplicates from an array. Do not use a function like filter() to solve this. Once you have solved the problem, demonstrate how it can be solved with filter(). Solve the problem with and without recursion.

// Example
// Input: [7, 9, "hi", 12, "hi", 7, 53]
// Output: [7, 9, "hi", 12, 53]

//unique set:
//declare and return unique set
function uniqueSetDedup(arr){
  const uniqueArr = [...new Set(arr)];
  return uniqueArr;
}

const problem2Set = uniqueSetDedup([7, 9, "hi", 12, "hi", 7, 53]);
console.log("unique set:", problem2Set);

//frecuency map & return the keys
//declare empty obj
//itterate through arr with for of loop
  //populate object with array items as keys and counters as values
//return the keys as an array Object.keys()

function mapDedup(arr){ //fails because it sorts num strings and alph strings in the returned array
  const counts = {};
  for (const element of arr){
    counts[element] = counts[element] ? counts[element] + 1 : 1;
  }
  const deduped = Object.keys(counts);
  return deduped;
}

const problem2Map = mapDedup([7, 9, "hi", 12, "hi", 7, 53]);
console.log("frecuency map:", problem2Map);

//filter and indexOf:
  //filter for x index equals indexOf x

function filterDedup(arr){
  const filtered = arr.filter(function(x, index){
    return arr.indexOf(x) === index;
  });
  return filtered;
}
const problem2Filter = filterDedup([7, 9, "hi", 12, "hi", 7, 53]);
console.log("filter and indexOf:", problem2Filter);


//recursion:
  //base case: if arr length is 0 return array
  //recursion: return arr at index 0 + recursive arr w/ all other arr at index 0 elements filtered out

function recursiveDedup(arr){
  if(arr.length === 0){
    return arr;
  } else {
    return arr[0] + recursiveDedup(arr.filter(x => x != arr[0]));
  }
}

const problem2Recursion = recursiveDedup([7, 9, "hi", 12, "hi", 7, 53]);
console.log("recursion and filter:", problem2Recursion);