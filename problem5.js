// Question #5: Array Sorting
// Write an algorithm that sorts an array without using the sort() method. There are many different sorting algorithms — take the time to read about the following:

// Quick sort
// Merge sort
// Heap sort
// Insertion sort
// Bubble sort
// Selection sort
// You may implement any of the above algorithms (or your own) to solve the problem — as long as it doesn't use sort().

// Example
// Input: [9, 2, 7, 12]
// Output: [2, 7, 9, 12]

//quicksort:
//base case when arr length is 1 or less
  //return arr
//declare pivot value
//declare empty sorted array
//declare 2 arrays for sorting less than and more than
//itterate over array 
  //sort into two arrays greater than and less than pivot value
//return concatenated sorted array with recursive less than and more than and pivot in the middle

function quickSort(arr){
  //base case:
  if (arr.length <= 1){
    return arr;

  } else {
    //declare vars:
    let lessThan = [];
    let moreThan = [];
    const pivot = arr.pop();
    let sorted = [];

    //loop and SORT into lesser and greater arrs:
    for (let i = 0; i < arr.length; i++){
      if(arr[i] >= pivot){
        moreThan.push(arr[i]);
      } else if(arr[i] <= pivot) {
        lessThan.push(arr[i]);
      }
    }

    return sorted.concat(quickSort(lessThan), pivot, quickSort(moreThan));
  } 
}

const quickSortProblem5 = quickSort([9, 2, 7, 12, 1, 24, 18, 8, 22, 13]);
console.log("quickSort:", quickSortProblem5);