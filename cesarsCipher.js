//create a function that takes a single argument
function rot13(string) { // LBH QVQ VG!
  //create an empty array to store values
  var array = [];
  //iterate through the items in the argument "string," incrementing by 1 each time you complete the [for] loop
  for(var index = 0; index < string.length; index++){
    //create a varaible, "character," that represents the Unicode character at a specified index in each item contained within "string."
    var character = string.charCodeAt(index);
    //create a condition for the value of the Unicode characters that fall outside the range of 65-90...
    //if these conditions are true, add the item to the top of the stack in the new array
    if (character < 65 || character > 90)
      array.push(string[index]);
    //however, if the Unicode value is less than 78, increment the Unicode value by 13, then add that new letter (that corresponds tot he new Unicode value) to the top to the stack of our new array
    else if (character < 78)
      array.push(String.fromCharCode(character + 13));
    else
      //otherwise, decrement the Unicode value by 13, then add that new letter (that corresponds tot he new Unicode value) to the top to the stack of our new array 
      array.push(String.fromCharCode(character - 13));
  }
  //return the resulting new array
  return array.join('');
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");

/*One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

rot13("SERR PBQR PNZC") should decode to "FREE CODE CAMP"
rot13("SERR CVMMN!") should decode to "FREE PIZZA!"
rot13("SERR YBIR?") should decode to "FREE LOVE?"
rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.") should decode to "THE QUICK BROWN DOG JUMPED OVER THE LAZY FOX."

*/
