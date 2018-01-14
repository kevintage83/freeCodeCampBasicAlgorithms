//create a function "reverseString," which takes an argument "string" as its parameter.
function reverseString(string) {
//create a variable, "splitMyString," which splits up the "string" argument passed into "reverseMyString. 
    var splitMyString = string.split("");
    //create another variable, "reverseThisArray," which takes the items split-up by "splitMyString" and reverses their order.
    var reverseThisArray = splitMyString.reverse();
    //create a third variable, "joinArray," which takes the items that were reversed in "reverseThisArray" and joins them into one item.
    var joinArray = reverseThisArray.join("");
    //return the result of "joinArray."
    return joinArray;
}
//invoke the function "reverseString" and pass the argument "hello" into the function.
reverseString("hello");
