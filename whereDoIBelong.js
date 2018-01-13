//declare a function, give it a name, and allow two arguments to pass into the function 
function getIndexToIns(array, number) {
  //Sort the items in the array according to their numerical size (not by Unicode position)...
  /*this means that you should use sort by also invoking "function," 
  otherwise, "sort" will sort the array items in-place and return their order by Unicode position.*/
  array.sort(function(arrayItem1,arrayItem2){
    return arrayItem1-arrayItem2;
  });
  /*now that the array is in sorted order...
  iterate through the array*/ 
  for (var index = 0; index < array.length; index++){
  /*Compare the value of the array items to the "num" value. 
  If the array value is at least the same value, or greater than, the value of "num," */
    if(array[index] >= number)
  //give us back the index value of the array item.   
      return index;
  }
  /*Finally, give us back the value that represents the length of the array; 
  this will give us the position on the number passed into the unsorted array*/
  return array.length;
}

getIndexToIns([40, 60], 50);

/*Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).

Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).

getIndexToIns([10, 20, 30, 40, 50], 35) should return 3.
getIndexToIns([10, 20, 30, 40, 50], 30) should return 2.
getIndexToIns([40, 60], 50) should return 1.
getIndexToIns([3, 10, 5], 3) should return 0.
getIndexToIns([5, 3, 20, 3], 5) should return 2.
getIndexToIns([2, 20, 10], 19) should return 2.
getIndexToIns([2, 5, 10], 15) should return 3.
*/
