function validateName(){
    let nameError =document.getElementById('fullname-error');
    let name = document.getElementById('fullname');

    if(name.value.trim()== ''){
       nameError.innerHTML ='fullname cannot be blank'
       return false
    }else if(name.value.length <4){
        nameError.innerHTML = 'fullname must not be less than 4 characters'
        return false
    }
     else{
        nameError.innerHTML=''
        return true
     }

}

function validateEmail(){
    let email= document.getElementById('email')
    let emailError= document.getElementById('email-error')
    let regEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

    if(email.value.trim()==''){
    emailError.innerHTML='email cannot be blank'
     return false
} else if(!email.value.match(regEx)){
    emailError.innerHTML= " Email not in global format"
    return false
}else{
    emailError.innerHTML=''
    return true
}

}
function validatePassword(){
    let password= document.getElementById('password')
    let passwordError= document.getElementById('password-error')
    let regularExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

    if(password.value.trim()==''){
        passwordError.innerHTML ='password cannot be blank!!'
        return false
    }else if( password.value.length<6 || password.value.length>20){
          
        passwordError.innerHTML='password must be between 6 to 16 characters'
        return false

    }else if(!password.value.match(regularExpression)){

        passwordError.innerHTML='password should contain atleast one number and one special character'
        return false
    }else{
        passwordError.innerHTML=''
        return true
    }

}
function validateConfirmpw(){
    let password= document.getElementById('password')
    let confirm =document.getElementById('Confirmpswrd')
    let confirmError = document.getElementById('confirm-error')

    if(confirm.value != password.value){
        confirmError.innerHTML='password mismatch'
        return false
    }else{
        confirmError.innerHTML=''
        return true
    }
}
function validateUser(){
    let userName= document.getElementById('username')
    let userError= document.getElementById('username-error')

    if(userName.value.trim()==''){
        userError.innerHTML='username cannot be blank!!'
        return false
    }else if(userName.value.length<4){
        userError.innerHTML=' username must not be less than 4 characters'
        return false
    }else{
        userError.innerHTML=""
        return true
    }
}
function validateNum(){
    let number= document.getElementById('phonenumber')
    let numError= document.getElementById('num-error')
    let regExp= /^([0|\+[0-9]{1,5})?([7-9][0-9]{9})$/

    if(number.value.trim()==''){
        numError.innerHTML='phone number cannot be blank!!'
        return false
    }else if(!number.value.match(regExp)){
        numError.innerHTML= " not a valid phone number"
        return false
    }else{
        numError.innerHTML=''
        return true
    }

}
function validateForm(){
    let submit= document.getElementById('submit');
    let submitError= document.getElementById('submit-error')

    if(!validateName() || !validateEmail() ||!validatePassword() || !validateConfirmpw() || !validateUser() || !validateNum()){
        submitError.innerHTML='Invalid Data'
        return false
    }else{
        submitError.innerHTML=""
        return true
    }

}
