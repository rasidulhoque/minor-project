function validate(){

	let adminid = document.getElementById("adminid");
    let password= document.getElementById("password");
	let flag=1;

	if(adminid.value==""){
		document.getElementById("idError").innerHTML="Admin Id is empty";
		flag=0;
	}else if(adminid.value.length < 5){
		document.getElementById("idError").innerHTML="Admin Id must more that 5 character";
		flag=0;
	}else{
		document.getElementById("idError").innerHTML="";
		flag=1;
	}

	if(uniqueId.value==""){
		document.getElementById("uidError").innerHTML="Unique Id is empty";
		flag=0;
	}
	else{
		document.getElementById("uidError").innerHTML="";
		flag=1;
	}

	if(password.value ==""){
		document.getElementById("passError").innerHTML="Password is empty";
		flag=0;
	}else if(password.value.length<6){
		document.getElementById("passError").innerHTML="Passworword must contain more than 6 characeters";
		flag=0;
	}else{
		document.getElementById("passError").innerHTML="";
		flag=1;
	}
	if(flag){
		return true;
	}else{
		return false
	}
}

	




































// var adminid = document.forms['form']['adminid'];
// var password = document.forms['form']['password'];

// var id_error = document.getElementById('id_error');
// var pass_error = document.getElementById('pass_error');

// adminid.addEventListener('textInput', id_verify);
// password.addEventListener('textInput', pass_Verify);

// function validated(){
// 	if (adminid.value.length < 9) {
// 		adminid.style.border = "1px solid red";
// 		id_error.style.display = "block";
// 		adminid.focus();
// 		return false;
// 	}
// 	if (password.value.length < 6) {
// 		password.style.border = "1px solid red";
// 		pass_error.style.display = "block";
// 		password.focus();
// 		return false;
// 	}

// }
// function id_verify(){
// 	if (adminid.value.length >= 8) {
// 		adminid.style.border = "1px solid silver";
// 		id_error.style.display = "none";
// 		return true;
// 	}
// }
// function pass_Verify(){
// 	if (password.value.length >= 5) {
// 		password.style.border = "1px solid silver";
// 		pass_error.style.display = "none";
// 		return true;
// 	}
// }
