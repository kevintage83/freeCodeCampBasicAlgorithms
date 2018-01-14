  //create a function that takes two arguments 
function confirmEnding(str, target) {
  //count how many characters are in "target,' make that number negative
  /*
  use that negative number as an index, starting from the last index in "str,"
    to count backwards and cut out everything before that
  */
  var beginSlice = target.length * -1;
  var slicedStr = str.slice(beginSlice, );
  //then see if the sliced "str" matches "target." 
  //If they match, return true. If they don't match, return false.
  return slicedStr === target;
                            
}
  //execute the above function
confirmEnding("Bastian man pat", " pat");
/*
Check if a string (first argument, str) ends with the given target string (second argument, target).

This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

confirmEnding("Bastian", "n") should return true.
confirmEnding("Connor", "n") should return false.
confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification") should return false.
confirmEnding("He has to give me a new name", "name") should return true.
confirmEnding("Open sesame", "same") should return true.
confirmEnding("Open sesame", "pen") should return false.
confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain") should return false.
Do not use the built-in method .endsWith() to solve the challenge.

*/
