let getNumber = +prompt("Enter a numner");
i=0
while(i<getNumber){
    alert(i);
    i+=1;
}

for(let i=1;i<=10;i+=1){
    alert(i)
    
}  
// let i= 0;


// do{
//     alert(i);
//     i+=1;
// }while(i<7);



// odd n even  
  
let getNaturalNumber = +prompt("Enter a number ");
if(getNaturalNumber<0){
    alert("Negative number");
}else if(getNaturalNumber===0){
    alert("Number is zero");
}else{
    alert("Positive number");

    if(getNaturalNumber%2===0){
        alert("even number");
    }else{
        alert("odd number");
    }
}


for(let i=0;i<10;i+=1){
    if(i%2==0)continue;
    alert(i)
}

// prime number
  
let getValue = +prompt("number? ");

for(let startNumber=2;startNumber<getValue;startNumber+=1){
    if(getValue%startNumber==0)break;
    alert(`${getValue} is a prime number`)
}


// Output even numbers in the loop

// use the for loop to output even numbers from 2to 10.
  
for(let num=2;num<=10;num++){
    if(num%2==0){
        alert(num)
    }
}


// Replace "for" with "while"
  
let i=0;
while(i<3){
    alert(`number ${i}!`);
    i++;
}


  
while(true){
    let number = +prompt("Enter a number greater than 100?")
    if(number>=100)break;
}



// Output prime numbers

let n = +prompt("Enter a number");
if (n<1){
    alert("Invalid")
}else if(n==1){
    alert(`the ${n} is prime number `);
}else{
    for(let i=2;i<n;i++){
        if (n%i==0) break;
        else{
            alert(`${n} is a prime numbeer`);
        }
}

}
