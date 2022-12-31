let getUserAge = +prompt("Enter your age ");
if(getUserAge>=14 && getUserAge<=90){
    document.write("congo")
}else{
    document.write("fuckkk")
}

  

// Check the login
let userName = prompt("who's there?");
if (userName==""){
    document.write("Canceled");
}else if(userName != "Admin"){
    document.write(" I don't know you");
}else{
    let userPassword = prompt("Password? ");
    if(userPassword==""){
        document.write("Canceled");
    }else if(userPassword !="TheMaster"){
        document.write("Wrong Password")
    }else{
        document.write("Welcome!")
    }
}