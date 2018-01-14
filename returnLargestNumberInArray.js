
function largestOfFour(arr) {
  var newArray = [0,0,0,0]; //make sure you have the same number of items in this array as there are subarrays in largestOfFour (which is 4)
  //compare each number in the first sub-array by bubble sort comparison
  for (var i = 0; i < arr.length; i++){ //the first for-loop will iterate through the array. it will start at 0 and increment by 1 through each loop. It should loop for each item in the array (length)
   for (var subArrayI = 0; subArrayI < arr[i].length; subArrayI++){ //the second for-loop will iterate through each item in the sub-arrays. it will start at 0 and increment by 1 through each loop. It should loop for each item in the array (length)
     if (arr[i][subArrayI] > newArray[i]){ //check to see if the number at each index is larger than the item at a similar index in newArray. If it is larger, replace that number in newArray with the number you found in that particular subarray.
       newArray[i] = arr[i][subArrayI];
     }
   }
  }
  //push the largest number into a new array
  // repeat the comparing process for the remaining sub-arrays
  // return the new array, containing the largest numbers
  return newArray;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
