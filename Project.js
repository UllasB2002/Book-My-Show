document.addEventListener("DOMContentLoaded",function(e){
    console.log("In JavaScript Code");

    const loginButton = document.getElementById("loginButton");

    loginButton.addEventListener("click",function(){
        let termCondition = document.getElementById("terms").checked;
        let password = document.getElementById("pass").value;
        var username = document.getElementById("user").value;
    
        // let welcomeUser = document.getElementById("welcomeUser")
        console.log("In loginButton")
        if(!termCondition){
            alert("Please accept the terms and conditions");
        }
        if(username=="Ullas" && password == "1234"){
            alert("Login Success");
            window.location.href="Project.html"
            localStorage.setItem("username",username);
            console.log("In welcome user")
        }
        else{
            alert("Please Enter Correct Password or User name");
        }
        console.log("In JavaScript Function")
    });
})

document.addEventListener("DOMContentLoaded",function(e){
    const name = localStorage.getItem("username");
    const para = document.getElementById("welcomeUser");
    para.textContent = `Welcome ${name}`
})



    