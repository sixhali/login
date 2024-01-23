const loginUserName=document.querySelector(".Login input")
const loginUserPassword=document.querySelector(".checkInput input")
const loginButon=document.getElementById("check")
const formContainer=document.querySelector(".form-container")

//register
const registerUserPassword=document.querySelector(".passwordinput input")


const reButtonSignUp=document.getElementById("login")
const reusername=document.querySelector(".usernameInputRegister")
const repassword=document.getElementById("password")
const reAgainPassword=document.getElementById("rePassword")
const reButton=document.getElementById("SignUp")

// Register Toogle Password Icon 

const toggleRegisterpasswordHideLogin=document.getElementById("hideRegisterPassword")
const toggleRegisterpasswordShowLogin=document.getElementById("viewRegisterPassword")


function registerTogglePassword(){
    const registerPasswordInput=registerUserPassword

    if (registerPasswordInput.type === "password") {
        registerPasswordInput.type = "text";
        toggleRegisterpasswordShowLogin.style.display = "block";
        toggleRegisterpasswordHideLogin.style.display = "none";
    } else {
        registerPasswordInput.type = "password";  
        toggleRegisterpasswordHideLogin.style.display = "block";
        toggleRegisterpasswordShowLogin.style.display = "none";
    }


}


toggleRegisterpasswordShowLogin.addEventListener("click",registerTogglePassword);
toggleRegisterpasswordHideLogin.addEventListener("click",registerTogglePassword);



// Register Again Toogle Password Icon 

const toggleAgainpasswordHide=document.getElementById("hideRegisterPasswordAgain")
const toggleAgainpasswordShow=document.getElementById("viewRegisterPasswordAgain")


function registerToggleAgainPassword(){
    const registerAgainUserPassword = document.getElementById("rePassword");

    if (registerAgainUserPassword.type === "password") {
        registerAgainUserPassword.type = "text";
        toggleAgainpasswordShow.style.display = "block";
        toggleAgainpasswordHide.style.display = "none";
    } else {
        registerAgainUserPassword.type = "password";  
        toggleAgainpasswordHide.style.display = "block";
        toggleAgainpasswordShow.style.display = "none";
    }


}


toggleAgainpasswordHide.addEventListener("click",registerToggleAgainPassword);
toggleAgainpasswordShow.addEventListener("click",registerToggleAgainPassword);






// Login Toogle Password Icon
const togglepasswordHideLogin=document.getElementById("hideLogin")
const togglepasswordShowLogin=document.getElementById("viewLogin")

function togglePassword() {
    const passwordInput = loginUserPassword;

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        togglepasswordShowLogin.style.display = "block";
        togglepasswordHideLogin.style.display = "none";
    } else {
        passwordInput.type = "password";  
        togglepasswordShowLogin.style.display = "none";
        togglepasswordHideLogin.style.display = "block";
    }
}


togglepasswordHideLogin.addEventListener("click",togglePassword);
togglepasswordShowLogin.addEventListener("click",togglePassword);



var username="Sixhali"
var password="123aze"


loginButon.addEventListener("click",function(e){
    e.preventDefault()
    formContainer.classList.remove("active")

    const userNameValue=loginUserName.value;
    const userPasswordValue=loginUserPassword.value;

    console.log("username:"+userNameValue)
    console.log("password:"+userPasswordValue)


    console.log("Login button clicked")

    if(userNameValue === username && userPasswordValue===password){
        console.log("correct username and password")
    }else{
        console.error("wrong username and password")
    }
})


reButtonSignUp.addEventListener("click",()=>{
    const reUsername=reusername.value;
    const rePassword=repassword.value;
    const reagainpassword=reAgainPassword.value;


    console.log("Re username:"+reUsername)
    console.log("Re password:"+rePassword)
    console.log("again password:"+reagainpassword)





    console.log("SignUp click")
})

reButton.addEventListener("click",(e)=>{
    console.log("onclick")
    e.preventDefault()
    formContainer.classList.add("active")
})




