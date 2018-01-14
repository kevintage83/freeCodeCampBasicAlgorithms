
function mutation(arr) {
  //create two arrays from the original array passed into the function "mutation."
  var mutated1 = arr[0];
  var mutated2 = arr[1];
  //format each of these arrays so that the letters in each array may be compared without case-incompatability
  var loweredMut1 = mutated1.toLowerCase();
  var loweredMut2 = mutated2.toLowerCase();
//create a for-loop that begins at 0 and iterates as many times as the length of loweredMut2, incrementing by 1 each time
  for(var i = 0; i < loweredMut2.length; i++){
    //create a variable that uses the distributive property to check each item in loweredMut1 is found within loweredMut2
    var value = loweredMut1.indexOf(loweredMut2[i]);
    //create a condition that any falsy value, which [default] evaluates to -1, should therefore evaluate to false
    if(value === -1){
      return false;
    }
      }
  //if the falsy value does not apply, evaluate to true
  return true;
}
//call the function "mutation" [above] and pass the following array into that function
mutation(["heLlo", "hey"]);

/*
Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".

Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".

mutation(["hello", "hey"]) should return false.
mutation(["hello", "Hello"]) should return true.
mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]) should return true.
mutation(["Mary", "Army"]) should return true.
mutation(["Mary", "Aarmy"]) should return true.
mutation(["Alien", "line"]) should return true.
mutation(["floor", "for"]) should return true.
mutation(["hello", "neo"]) should return false.
mutation(["voodoo", "no"]) should return false.

*/
