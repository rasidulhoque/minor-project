function validate(){
    let firstname=document.getElementById("firstname");
    let lastname=document.getElementById("lastname");
    var gender=document.forms["form"]["gender"];
    let age=document.getElementById("age");
    let password=document.getElementById("password");
    let confpassword=document.getElementById("confirmPassword");

    if(firstname==null || firstname==""){
        alert("First name cannot be black");
        return false;
    }

    
    if(password.value !=confpassword.value){
        confpassword.setCustomValidity("Passwords Don't Match");  
    }else{
        confpassword.setCustomValidity('');
    }
    password.onchange = validatePassword;
    confpassword.onkeyup = validatePassword;
}