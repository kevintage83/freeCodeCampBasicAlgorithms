// create a function, bouncer, that takes an array as an argument
function bouncer(arr) {
  //filter-out any boolean value from the argument passed to the bouncer function
  return arr.filter(Boolean);
}
//call the bouncer function
bouncer([7, "ate", "", false, 9]);

/*
Remove all falsy values from an array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

bouncer([7, "ate", "", false, 9]) should return [7, "ate", 9].
bouncer(["a", "b", "c"]) should return ["a", "b", "c"].
bouncer([false, null, 0, NaN, undefined, ""]) should return [].
bouncer([1, null, NaN, 2, undefined]) should return [1, 2].
*/
