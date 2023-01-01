// Rewrite the function using ? and ||

// using ?

// function checkAge(age){
//     return (age>18)?true:confirm("Did parents allow you?");
// }
// console.log(checkAge(17));

// using ||

function checkAge(age){
    return (age>18) || confirm("Did parents allow you");
}

document.write(checkAge(19));

// Function min(a,b)

function min(a,b){
    return (a>=b)?b:a;
}
document.write(min(-2,-1));


// Function pow (x,n)

function pow(x, n) {
    let result = x;
  
    for (let i = 1; i < n; i++) {
      result *= x;
    }
  
    return result;
  }
  
  let x = prompt("x?", '');
  let n = prompt("n?", '');
  
  if (n < 1) {
    alert(`Power ${n} is not supported, use a positive integer`);
  } else {
    alert( pow(x, n) );
  }



let ask =(question,yes,no)=>{
    if(confirm(question)){
        return yes()
    }else{
        return no()
    }
}
document.write(ask("Do you agree?", ()=>alert("You agreed"), ()=>alert("You canceled the excution")));
