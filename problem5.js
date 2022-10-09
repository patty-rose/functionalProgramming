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
//declare pivot value
  //sort into two arrays greater than and less than pivot value
//repeat until 

function quickSort(arr){
  if (arr.length <= 1){
    return [arr];
  } else {
    let lessThan = [];
    let moreThan = [];
    const pivot = arr[0];
    for (let i = 0; i < arr.length; i++){
      if(arr[i] > pivot){
        moreThan.push(arr[i]);
      } else if(arr[i] < pivot) {
        lessThan.push(arr[i]);
      }
    }
    return quickSort(lessThan) + pivot + quickSort(moreThan);
  } 
}

const quickSortProblem5 = quickSort([9, 2, 7, 12, 1, 24, 18, 8, 22, 13]);
console.log("quickSort:", quickSortProblem5);