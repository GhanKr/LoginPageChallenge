function validateForm(event){
const fname=document.forms["login-form"]["fname"];
const lname=document.forms["login-form"]["lname"];
const email=document.forms["login-form"]["email"];
const password=document.forms["login-form"]["password"];
const label=document.querySelectorAll('.label');
let regex= /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
let result=true;
if(fname.value.length == 0){
 label[0].style.display="block";
 !result;

}
if(lname.value.length == 0){
  label[1].style.display="block";
  !result;
 
 }
 if(!regex.test(email.value)){
  label[2].style.display="block";
  !result;
 }
 if(password.value.length == 0){
  label[3].style.display="block";
   !result;
 }
 event.preventDefault();
 return result;
}
