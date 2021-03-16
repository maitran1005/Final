function validateForm(){  
var fname = document.myForm.Firstname.value; 
var lname = document.myForm.Lastname.value;
var email = document.myForm.Email.value;
var com = document.myForm.Comment.value;
var error = document.getElementById("error") 
var status =false;

if ((fname.length > 20) || fname==="null" || fname==="" || !/^[a-zA-Z]*$/g.test(document.myForm.Firstname.value) ){  
	error.textContent ="First name is required, accept only alphabetical value and maximum 20 characters";
	error.style.color = "red";
	return false;
	}else{
		status=true;}  

if((lname.length > 50) || lname==="null" || lname==="" || !/^[a-zA-Z]*$/g.test(document.myForm.Lastname.value) ){  
	error.textContent = "Last name is required, accept only alphabetical value and maximum 50 characters";
	error.style.color = "red";
	return false;
	}else{
	status=true;} 	

if(email===""){  
	error.textContent = "Email is required!"; 
	error.style.color = "red";
	return false;
	}else if( !/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/g.test(document.myForm.Email.value)){
		error.textContent = "Invaid email!";
		error.style.color = "red";
		return false;
		}else{
			status=true;} 
if(com===""){  
	error.textContent = "Comment is required!";
	error.style.color = "red";
	return false;
	}else{
		status=true;} 
			
}

formSubmit