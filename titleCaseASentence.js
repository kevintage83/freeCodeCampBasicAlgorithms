//create a function, "titleCase," that takes an argument, "str," as a parameter.
function titleCase(str) {
  //lowercase all the letters and split the string into individual words, all in an array
  var splitUpString = str.toLowerCase().split(' ');
  //using a for-loop, capitalize the first letter of each item in the array
  for (var i = 0; i < splitUpString.length; i++){
    splitUpString[i] = splitUpString[i].charAt(0).toUpperCase() + splitUpString[i].slice(1);
  }
  //combine those capitalized letters with their corresponding array items
  // join the items in the array as a single item in an array
  //return the array
  return splitUpString.join(" ");
//  return str.join(' ');
}

titleCase("I'm a little tea pot");
