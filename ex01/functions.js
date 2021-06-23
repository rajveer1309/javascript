function confirmPassword(){
    var password=document.getElementById("password").value;
    var confirmpassword=document.getElementById("confirmpassword").value;
    
    if(password==confirmpassword){
        alert("success")
    }
    else{
        alert("fail")
    }

}
