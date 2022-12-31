// let a=1, b=1;
// let c = ++a;
// let d = b++;
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d)


// 2

let a=2;
let x =1+(a*=2);//5
console.log(x)

console.log(""+1+0);//10
console.log(""-1+0);//-1
console.log(true+false);//output will be 1 bcz true value is 1 and false value is 0. i.e 1+0=1
console.log(true+true);//2
console.log(6/"3");//2
console.log("2"*"3");//6
console.log(4+5+"px");//9px
console.log("$"+4+5);//$45
console.log("4"-2);//2
console.log("4px"-2);//NaN
console.log(" -9 " +5);// -9 5
console.log(" -9 "-5);//-14 substraction always converts to number
console.log(null+1);//1 numeric convert null to 0
console.log(undefined+1);//nan undefined convert to nan
console.log(" \t \n" -2)//-2


// fix the addition

let getFirstNum = +prompt("first number", 1);
let getSecondNum = +prompt("second number", 2);
alert(getFirstNum+getFirstNum)



// comparision
