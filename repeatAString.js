//declare a function, repeatedStringNumTimes, with two arguments, str, and num
function repeatStringNumTimes(str, num) {
  //declare a variable, repeatedStr, that takes an empty value
  var repeatedStr = "";
  //as long as the second argument is positive, prepend the variable, repeatedStr, with the current iteration's value held within the variable str
while(num > 0){
    repeatedStr += str;
  //once you have the prepended variable repeatedStr, decrement num by 1 and check the while condition  
  num--;
}
  
///once the while condition is fully satisfied, return the current value of repeatedStr
return repeatedStr;

}
//call the function repeatStringNumTimes
repeatStringNumTimes("kim", 3);

/*
Repeat a given string (first argument) num times (second argument). Return an empty string if num is not a positive number.

repeatStringNumTimes("*", 3) should return "***".
repeatStringNumTimes("abc", 3) should return "abcabcabc".
repeatStringNumTimes("abc", 4) should return "abcabcabcabc".
repeatStringNumTimes("abc", 1) should return "abc".
repeatStringNumTimes("*", 8) should return "********".
repeatStringNumTimes("abc", -2) should return "".
*/
