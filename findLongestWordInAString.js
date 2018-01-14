
function findLongestWord(str) {
  var newArray = str.split(' '); //split the words in the first string into several strings in a single array. 
  var longestWord = 0;
  //using a for-loop, count the number of letters in each word of the array
  for (var i = 0; i < newArray.length; i++){ //starting at 0, and as long as our current iteration is less than the length of the array newArray, apply the conditions between the braces, then increment by 1 when you complete the loop
    if(newArray[i].length > longestWord){ //check to see if the length of the item within newArray is larger than longestWord. if so, longestWord will take on the value of the length of that newArray item. 
      longestWord = newArray[i].length;
    }
      
  }
  //return the word associated with the highest value for word length
  return longestWord;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
