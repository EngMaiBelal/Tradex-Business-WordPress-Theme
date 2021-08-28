//scroll
mybutton = document.getElementById("myBtn__top");

//  scrolls down 100px 
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
////////////////////////////////////////////////////////////////////////////

// Validation

var isUserValid;
var isMobileValid;
var isEmailValid;
var isPasswordValid;
var isPasswordConfirm;
var isFormValid
var userPassword;


function validateUserName(inputObject){
    let min=3;
    let max=25;
    let userValidator=document.querySelector('#userValidator');
    if(inputObject.value == ""){
        userValidator.innerHTML="<b> !</b>";
        inputObject.select();
        inputObject.style.border="2px solid red";
        userValidator.style.color="red";
        userValidator.style.display="inline-block";
        isUserValid= false;


    }else if(inputObject.value.length < min || inputObject.value.length > max ){
        inputObject.focus();
        inputObject.style.border="2px solid red";
        userValidator.style.display="block";
        userValidator.style.color="white";

        userValidator.innerHTML=`Username between ${min} and ${max} chars.`;
        isUserValid= false;
    }else{
        inputObject.style.border="2px solid gray";
        userValidator.innerHTML="<b>\u2713</b>";
        userValidator.style.display="inline-block";
        userValidator.style.color="green";
        isUserValid= true;
    }
}

function validateEmail(emailObject){
    let regEmail= /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    let isMatched= regEmail.test(emailObject.value);
    let emailValidator= document.querySelector('#emailValidator');

    if(emailObject.value == ""){
        emailValidator.innerHTML="<b> !</b>";
        emailValidator.style.color="red";
        emailValidator.style.display="inline-block";
        emailObject.select();
        emailObject.style.border="2px solid red";
        isEmailValid= false;


    }else if(isMatched == false) {
        emailObject.focus();
        emailObject.style.border="2px solid red";
        emailValidator.style.display="block";
        emailValidator.style.color="white";
        emailValidator.innerHTML="Email is not valid"
        isEmailValid= false;
    }else{
        emailObject.style.border="2px solid gray";
        emailValidator.innerHTML="<b>\u2713</b>";
        emailValidator.style.display="inline-block";
        emailValidator.style.color="green";
        isEmailValid= true;
    }
}


function validateMobile(mobileObject){
    let regPhone= /^01(1|0|2|5)\d{8}$/;
    let isMatched= regPhone.test(mobileObject.value);
    let MobileValidator= document.querySelector('#MobileValidator');

    if(mobileObject.value == ""){
        MobileValidator.innerHTML="<b> !</b>";
        mobileObject.select();
        mobileObject.style.border="2px solid red";
        MobileValidator.style.color="red";
        MobileValidator.style.display="inline-block";
        isMobileValid= false;


    }else if(isMatched == false) {
        mobileObject.focus();
        mobileObject.style.border="2px solid red";
        MobileValidator.style.display="block";
        MobileValidator.style.color="white";
        MobileValidator.innerHTML="Ex: 012/00000000"
        isMobileValid= false;
    }else{
        mobileObject.style.border="2px solid gray";
        MobileValidator.innerHTML="<b>\u2713</b>";
        MobileValidator.style.display="inline-block";
        MobileValidator.style.color="green";
        isMobileValid= true;

    }
    
}


function validatePassword(passwordObject){
    let regPassword= /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
    let isMatched= regPassword.test(passwordObject.value);
    userPassword = passwordObject.value;
    let PasswordValidator= document.querySelector('#PasswordValidator');

    if(passwordObject.value == ""){
        PasswordValidator.innerHTML="<b> !</b>";
        PasswordValidator.style.display="inline-block";
        passwordObject.select();
        passwordObject.style.border="2px solid red";
        PasswordValidator.style.color="red";
        isPasswordValid= false;

    }else if(isMatched == false) {
        passwordObject.focus();
        passwordObject.style.border="2px solid red";
        PasswordValidator.style.display="block";
        PasswordValidator.style.color="white";

        PasswordValidator.innerHTML="Password must has at least 8 chars that include ( 1 lowercase, 1 uppercase, 1 number, and 1 special character in (!@#$%^&*)"
        isPasswordValid= false;

    }else{
        passwordObject.style.border="2px solid gray";
        PasswordValidator.innerHTML="<b>\u2713</b>";
        PasswordValidator.style.display="inline-block";
        PasswordValidator.style.color="green";
        isPasswordValid= true;
        document.querySelector('#confirm-password').disabled=false

        
        
    }  
}


function confirmPassword(confirmObject){
    let PasswordConfirm= document.querySelector('#PasswordConfirm');
    if(confirmObject.value == ""){
        PasswordConfirm.innerHTML="<b> !</b>";
        PasswordConfirm.style.display="inline-block";
        PasswordConfirm.style.color="red";
        confirmObject.style.border="2px solid red";
        isPasswordConfirm= false;

    }else if (confirmObject.value !=  userPassword) {
        // confirmObject.focus();
        confirmObject.style.border="2px solid red";
        PasswordConfirm.style.display="block";
        PasswordConfirm.style.color="white";
        PasswordConfirm.innerHTML="Password not match"
        isPasswordConfirm= false;

    }else if (confirmObject.value ==  userPassword){
        confirmObject.style.border="2px solid gray";
        PasswordConfirm.innerHTML="<b>\u2713</b>";
        PasswordConfirm.style.display="inline-block";
        PasswordConfirm.style.color="green";

        isPasswordConfirm= true;
    }  
}


function validateForm(ev){
    ev.preventDefault()
    let FormValid= document.querySelector('#FormValid');
    if(isUserValid == true && isMobileValid == true && isEmailValid == true && isPasswordValid == true && isPasswordConfirm == true){
        ev.target.submit();
        FormValid.innerHTML="";
        isFormValid= true;
    }else{
        FormValid.innerHTML="Please insert all input";
        FormValid.style.display='block';
        isFormValid= false;
    }
}

/////////////////////////////////////////////////////////////////////


var counterTimer;
function interval(){
    counterTimer = setInterval("counterNumber()", 20);
}
function counterNumber(){
    for(counter=0;counter<=1000;counter++){

        
        document.getElementById('counter1').innerHTML= "counter++";
        console.log(counter);
    
    }
    console.log(counter);
    if(counter == 1000){
        clearInterval()
    }

}




// $(window).scroll(function() {

//   var oTop = $('#counter').offset().top - window.innerHeight;
//   if (counted == 0 && $(window).scrollTop() > oTop) {
//     $('.count').each(function() {
//       var $this = $(this),
//         countTo = $this.attr('data-count');
//       $({
//         countNum: $this.text()
//       }).animate({
//           countNum: countTo
//         },

//         {

//           duration: 2000,
//           easing: 'swing',
//           step: function() {
//             $this.text(Math.floor(this.countNum));
//           },
//           complete: function() {
//             $this.text(this.countNum);
//             //alert('finished');
//           }

//         });
//     });
//     counted = 1;
//   }

// });




