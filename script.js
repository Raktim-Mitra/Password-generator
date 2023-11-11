const passwordBox=document.getElementById("password");
const lengt=12;
const upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase="abcdefghijklmnopqrstuvwxyz";
const numbers="1234567890";
const symbols="@#$%&!_~";
const allChars=upperCase+lowerCase+numbers+symbols;
function createPassword(){
    let password="";
    while(password.length<lengt){
        password+=allChars[Math.floor(Math.random()*allChars.length)];
    }
    passwordBox.value=password;
    passwordBox.value.style.fontSize="6px";
}
function copyPassword(){
    passwordBox.select();
    passwordBox.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(passwordBox.value);
}
