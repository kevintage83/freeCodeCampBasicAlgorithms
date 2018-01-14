
function chunkArrayInGroups(arr, size) {
  //create a new, empty array, chunkedArray, that will hold the new array items
  var chunkedArray = [];
  //count along the original array by the size of the second parameter, size, making slices at those increments
  for(var index = 0; index < arr.length; index += size) {
    //onto chunkedArray, push the items sliced from the first parameter of chunkArrayInGroups, starting from 0, and ending at the length indicated by the second parameter of chunkArrayInGroups, size. 
    chunkedArray.push(arr.slice(index , index + size));
  }
  //return the new array, chunkedArray
  return chunkedArray;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
/*
Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

chunkArrayInGroups(["a", "b", "c", "d"], 2) should return [["a", "b"], ["c", "d"]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3) should return [[0, 1, 2], [3, 4, 5]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2) should return [[0, 1], [2, 3], [4, 5]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4) should return [[0, 1, 2, 3], [4, 5]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3) should return [[0, 1, 2], [3, 4, 5], [6]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4) should return [[0, 1, 2, 3], [4, 5, 6, 7], [8]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2) should return [[0, 1], [2, 3], [4, 5], [6, 7], [8]].
*/
