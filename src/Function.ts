            /*  Function Type extention */

/* 1.   Call Signature  */
//=> to Annotation of funtion

type grretFunction = (x: string ) => string ;       // use this as a callback fun & to define fun in Object & fun parameter as a fun 

/* 2.    Generic Function   */
function GenericFuntion<Type>(arr: Type[]):Type{
    return arr[1];
}
GenericFuntion<number>([1,2,3])

/* 2.1     Inference   */
function numOfArray<Input , Output>(arr: Input[] , fun: (value: Input)=> Output)/* check greetFuntion */  : Output[]{
    return arr.map(fun);
}
numOfArray(["1","2","3"] , (x) => parseInt(x))

/* 2.2     Constraints     */


/* 2.3     Specifying Type  */
//==>   when call a funtion then you give arg with Specified type 
//funcall<string | number > ( "String type")


/* 3.    Optional Parameters   */
function Optional(x? : number){
    // you can call this funtion with x argument or without argument 
}


/* 4.    Function Overload     */

//


/* 5.   Destructuring Parameter     */
function Destructuring([a,b,...c]){

}
Destructuring([1,2,3,4])
