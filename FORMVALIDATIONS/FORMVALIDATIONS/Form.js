// Name Input Validation

function validateInput() {
    const inputField = document.getElementById("inputField");
  const errorText = document.getElementById("nameError");
    
    // Check if the input is empty
    if (!inputField.value) {
      errorText.textContent = "Name is required";
    } else {
      // Check if the input contains only numeric characters
      if (/^\d+$/.test(inputField.value)) {
        errorText.textContent = "";
      } else {
        // Check if the input contains only alphabetic characters
        if (/^[A-Za-z]+$/.test(inputField.value)) {
          errorText.textContent = "";
        } else {
          errorText.textContent = "Only letters are allowed";
        }
      }
    }
  }
  

//   Email Input Validation

function validateEmail(){
    const emailInput=document.getElementById("email");
    const Element=document.getElementById("emailError");

    const email=emailInput.value;

    if(emailInput.value===""){
        
       Element.textContent="Please enter valid email"
    }else if(email.includes("@")){
        Element.textContent="Please enter valid email address";
        Element.style.display="none";
    }
    else{
        Element.style.display="inline";
    }
}

// Password & Confirm Password Validation



function validatePassword() {
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmPassword");
    const passwordError = document.getElementById("passwordError");
    const confirmPasswordError = document.getElementById("confirmPasswordError");
    
    // Check if either field is empty
    if (!password.value) {
      passwordError.textContent = "Password is required";
    } else {
      passwordError.textContent = "";
    }
    
    if (!confirmPassword.value) {
      confirmPasswordError.textContent = "Confirm Password is required";
    } else {
      confirmPasswordError.textContent = "";
    }
  
    // Check if password and confirm password match
    if (password.value !== confirmPassword.value) {
      confirmPasswordError.textContent = "Passwords do not match";
    }
    
    // Check if password is at least 8 characters long
    if (password.value.length > 0 && password.value.length < 8) {
      passwordError.textContent = "Please enter at least 8 characters";
    }
  }

function togglePasswordVisibility(inputId) {
    var passwordInput = document.getElementById(inputId);
    var togglePassword = document.querySelector("#" + inputId + " + .toggle-password");
    
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      togglePassword.innerHTML = '<i class="fa fa-eye-slash"></i>';
    } else {
      passwordInput.type = "password";
      togglePassword.innerHTML = '<i class="fa fa-eye"></i>';
    }
  }


  //Button Disabled to enable Validation
  function allfieldsValid(){
    let name=document.getElementById("inputField").value;   
    let email=document.getElementById("email").value;
    let password=document.getElementById("password").value;
   
    let isValid= name !==""  && email !== ""  && password !=="";
   
    return isValid;
   }
   
   
   function  Checkbtn(){
       let btnSubmit=document.getElementById("submit");
       btnSubmit.disabled=!allfieldsValid();
   }
   
   document.getElementById("inputField").addEventListener("input",Checkbtn);
   document.getElementById("email").addEventListener("input",Checkbtn);
   document.getElementById("password").addEventListener("input",Checkbtn);

   //LocalStorage Code
   function validatebtn(){
    if(localStorage){
        
            let name=document.getElementById("inputField").value;
            let email=document.getElementById("email").value;
            let password=document.getElementById("password").value;
            let confirmPassword = document.getElementById("confirmPassword").value;
            localStorage.setItem('name',name);
            localStorage.setItem('email',email);
            localStorage.setItem('password',password);
            localStorage.setItem('confirmPassword',confirmPassword)
}
   }