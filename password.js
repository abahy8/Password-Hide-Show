let eyeicon = document.querySelector("#eyeicon");
let password = document.querySelector("#password");

eyeicon.onclick = function(){
    if(password.type == "password"){
        password.type = "text";
        eyeicon.src = "images/eye-open.1024x738.png";
    }else{
        password.type = "password";
        eyeicon.src = "images/eye-closed.1024x928.png";
    }
}