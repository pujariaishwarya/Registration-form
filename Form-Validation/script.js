function validateForm(){
    const name = document.getElementById("name").value;
    const address = document.getElementById("address").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirm = document.getElementById("confirmPassword").value;
    const subject = document.getElementById("subject").value;
    const agree = document.getElementById("agree").checked;
    const nameError = document.getElementById("name-error");
    const addressError = document.getElementById("address-error");
    const phoneError = document.getElementById("phone-error")
    const emailError = document.getElementById("email-error");
    const passwordError = document.getElementById("password-error");
    const confirmError = document.getElementById("confirmPassword-error");
    const subjectError = document.getElementById("subject-error");
    const agreeError = document.getElementById("agree-error");
    
    
    nameError.textContent = "";
    addressError.textContent = "";
    phoneError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";
    confirmError.textContent = "";
    subjectError.textContent = "";
    agreeError.textContent = "";

    let isvalid = true;
    
    if(name === "" || /\d/.test(name)){
        nameError.textContent = "Please enter your name properly!";
        isvalid = false;
    }
    if(address === ""){
        addressError.textContent = "Please enter your address properly!";
        isvalid = false;
    }
    if(phone === "" || /^\d{10}$/.test(phone)){
        phoneError.textContent = "Please enter valid number";
    }
    if(email === "" || !email.includes("@")){
        emailError.textContent = "Please enter your email-address properly!";
        isvalid = false;
    }
    if(password === "" || password.length <8){
        passwordError.textContent = "Please enter password with at least 6 characters.";
        isvalid = false;
    }
    if(subject === ""){
        subjectError.textContent = "Please select your course.";
        isvalid = false;
    }
    if(confirm.trim()=== ""){
        confirmError.textContent = "Confirm password is required";
        isvalid = false;
    }
    else if(confirm !== password){
        confirmError.textContent = "Password do not match";
        isvalid = false;
    }
    if(!agree){
        agreeError.textContent = "Please agree to the above information.";
        isvalid = false;
    }
    return isvalid;
}