let userCurrentAge = prompt("Your age ? ", 18);
if(userCurrentAge>=18){
    console.log("eligible");
}else if(userCurrentAge<18){
    console.log("not eligible");
}else{
    console.log("wrong");
}



let age = 2;
let userVerify = (age>18)? "yess":"no";
document.write(userVerify);


let getAge =prompt("enter your age? ");
let userAgeCheck = (getAge<3)?"Hello Baby":(getAge<18)?"hello":(getAge<100)?"greeting":"what an useless number";
alert(userAgeCheck)


// Question :- The name of Javascript


let nameOfJavaScript =prompt(`What's the "official" name of javascript? `);
if(nameOfJavaScript==="ECMASCRIPT"){
    document.write("Right!");
}else{
    document.write(`You don't know? "ECMASCRIPT"! `);
    
}



// show the sign
  
let getNumber = +prompt("Enter a number? ");
if (getNumber>0){
    document.write(1);
}else if(getNumber<0){
    document.write(-1);
}else{
    document.write(0);
}
   

let a = 2;
let b =1;
let result = (a+b <4)?"Below":"Over";
alert(result);

  

let login = "Director";
let message =(login=="Employee")?"Hello":(login=="Director")?"Greeting":(login=='')?"No login":"";
alert(message)

// check the range between 
