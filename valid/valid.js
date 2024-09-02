function validateForm(){
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    if(name==null || name==""){
        document.getElementById("namespan").innerHTML = "please enter your name";
        return false;
    }
    else if(email==null || email==""){
        document.getElementById("emailspan").innerHTML = "please enter your email";
        return false;
    }
    else if(password==null){
        document.getElementById("passspan").innerHTML = "please enter your password";
        return false;
    }
    else if(password.length<5){
        document.getElementById("passspan").innerHTML = "password must be 5 character";
        return false;
    }
    

}
function clearspan(){
    let spans = document.getElementsByClassName("spn");
    for(i=0;i<spans.length;i++){
        spans[i].innerHTML = "";
    }
}