"use strict";
/*  Function Type extention */
/* 2.    Generic Function   */
function GenericFuntion(arr) {
    return arr[1];
}
GenericFuntion([1, 2, 3]);
/* 2.1     Inference   */
function numOfArray(arr, fun) {
    return arr.map(fun);
}
numOfArray(["1", "2", "3"], (x) => parseInt(x));
/* 2.2     Constraints     */
/* 2.3     Specifying Type  */
//==>   when call a funtion then you give arg with Specified type 
//funcall<string | number > ( "String type")
/* 3.    Optional Parameters   */
function Optional(x) {
    // you can call this funtion with x argument or without argument 
}
/* 4.    Function Overload     */
//
/* 5.   Destructuring Parameter     */
function Destructuring([a, b, ...c]) {
}
Destructuring([1, 2, 3, 4]);
