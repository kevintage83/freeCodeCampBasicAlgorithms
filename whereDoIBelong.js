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
