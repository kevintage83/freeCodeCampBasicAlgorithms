function destroyer(arr) {
//create a variable, args, that uses the constructor, Array, that takes arguments that are passed into the function and removes mathing values found within "arr," starting at index 1, and beyond. 
  var args = Array.from(arguments).slice(1);
  //var p = 
  //iterate through each item in the array, incrementing your counter by 1 each time, checking for matching values found in arr that are also found in args
  for (var i = 0; i < arr.length; i++) {
 //within the first for-loop, perform another loop that looks at each value within "args," looking for matches in both value and type within "arr." If there is a match, delete the matched value found within "arr."  
    for (var j = 0; j < args.length; j++) {
      if (arr[i] === args[j]) {
        delete arr[i];
      }
    }
  }
  return arr.filter(Boolean);
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);


/*
You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

destroyer([1, 2, 3, 1, 2, 3], 2, 3) should return [1, 1].
destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3) should return [1, 5, 1].
destroyer([3, 5, 1, 2, 2], 2, 3, 5) should return [1].
destroyer([2, 3, 2, 3], 2, 3) should return [].
destroyer(["tree", "hamburger", 53], "tree", 53) should return ["hamburger"].
*/
