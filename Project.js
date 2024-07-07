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
    const forgotPassword = document.getElementById("ForgotPassword");
    const createNewAccount = document.getElementById("CreateNewUser");
    forgotPassword.addEventListener("click", function(){
        window.location.href="ForgotPassword.html"
    })
    createNewAccount.addEventListener("click",function(){
        window.location.href="CreatePassword.html"

    })
})

document.addEventListener("DOMContentLoaded",function(){
    const opt = document.getElementById("OTPclick")
    opt.addEventListener("click",function(e){
        const enterOTP = document.getElementById("OTP");
        enterOTP.innerHTML = '<input type="password" placeholder="Enter your OTP" id="OTPid">'
    })
})

document.addEventListener("DOMContentLoaded",function(e){
    const name = localStorage.getItem("username");
    const para = document.getElementById("welcomeUser");
    para.textContent = `Welcome ${name}`
})

// This ths javaSCript File for Create User

document.addEventListener("DOMContentLoaded",function(e){
    const NewUserConfirm = document.getElementById("CreateUserButton");
    NewUserConfirm.addEventListener("click",function(){
        const firstName = document.getElementById("FirstName").value;
        const middleName = document.getElementById("MiddleName").value;
        const lastName = document.getElementById("LastName").value;
        const address = document.getElementById("Address").value;
        const emailId = document.getElementById("EmailId").value;
        const phoneNo = document.getElementById("PhoneNo").value;
        if (firstName === "") {
            alert("Enter First Name");
        } else if (lastName === "") {
            alert("Enter Last Name");
        } else if (address === "") {
            alert("Enter Address");
        } else if (!emailId.includes("@gmail.com")) {
            alert("Invalid Email ID");
        } else if (phoneNo.toString().length !== 10) {
            alert("Enter 10 digit Phone Number");
        } else {
            const userOtp = document.getElementById("NewUserOTP");
            userOtp.innerHTML='<input type="number" class="OTP" id="CreateUserOtp">';
            NewUserConfirm.removeEventListener("click",this)
            NewUserConfirm.setAttribute("id","CreateUserButtonNew")
            NewUserConfirm.innerText="Confirm OTP";

            const NewUserOTP = document.getElementById("CreateUserButtonNew")

            NewUserOTP.addEventListener("click",function(e){
                const NewUserOTPEnter = document.getElementById("CreateUserOtp").value;
                NewUserOTPEnter = 1234;

                if(NewUserOTPEnter == 1234){
                    alert("Login Successfull")
                }
                else{
                    console.log(NewUserOTPEnter)
                    alert("Enter Correct OTP")
                }
            })

        }
    })
})

    