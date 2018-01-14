//create an array, "slasher," that takes two arguments, "arr" and "howMany," as parameters.
function slasher(arr, howMany) {
  arr.splice(0, howMany);
  //Takes your array, and calls splice(0 is the starting index point. howMany is the number to cut)
  return arr;
}

slasher([1, 2, 3], 2);
