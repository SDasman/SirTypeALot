"use strict";
console.log("Hello World");
// comment in TypeScript is used with //
var whatThis = 700;
// TS gets compiled into javascript
// TS is like java it is strongly typed. once it is decalred a string, that variable will always
// be a string
var myBool = true;
// our standard data types are "Strings", numbersa, boolean, any, as a general type
// array in TS
var langsLearned = ["JavaScript", "Java", "Python", "YO C++?"];
// arrays are like java, once we define the array to be of type stirng, it will always be of the
// type string.
// JAVA: the number of items matter AND the type of the elements matter!
// TYPESCRIPT: the number of elements DO NOT MATTER, BUT the TYPE MATTERS within the list.
// langsLearned = [300, "hello", true];
// the above produces and error.
// TUPLES exist in TypeScript:
// address example:
var address = [1234, "Main Street", "USA"];
//enums exist within TS as well.
