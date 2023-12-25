var userNamelogin = document.getElementById('userName')
var userEmailLogin = document.getElementById('userEmail')
var userPasswordlogin = document.getElementById('userPassword')

var userList = [] // list of users (Array)
hideBtSignIn()
// hideBtSignUp()

// if (hideBtSignUp() == true) {
//     hideBtSignUp()
// } else {
//     hideBtSignIn()
// }

if (localStorage.getItem('users') !== null) {
    userList = JSON.parse(localStorage.getItem('users'))
    // displayUserALert()
}
// add userdata => Main
function getValue() {

    getInputValue()
    displayUserALert()
    clearInput()
}
// to Login
function hideBtSignUp() {
    document.getElementById('userName').style.display = 'none'
    document.getElementById('alertusername').style.display = 'none'
    document.getElementById('btnSignUp').style.display = 'none'
    document.getElementById('btnSignIn').style.display = 'block'
    document.getElementById('hideBtSignUp').style.display = 'block'
    document.getElementById('hideBtSignIn').style.display = 'none'
}
// to signup
function hideBtSignIn() {
    document.getElementById('userName').style.display = 'block'
    document.getElementById('btnSignUp').style.display = 'block'
    document.getElementById('btnSignIn').style.display = 'none'
    document.getElementById('hideBtSignIn').style.display = 'block'
    document.getElementById('hideBtSignUp').style.display = 'none'
    
}
function getInputValue() {
    var userData = {
        name: userNamelogin.value,
        email: userEmailLogin.value,
        passord: userPasswordlogin.value
    }
    userList.push(userData)
    console.log(userList);
    localStorage.setItem('users', JSON.stringify(userList))
}
function displayUserALert() {
    if (check(userNamelogin.value) == true) {
        document.getElementById('alertusername').style.display = 'none'
        userList.push(userData)
        console.log(userList);
    } else {
        document.getElementById('alertusername').style.display = 'block'
    }
    if (checkEmail(userEmailLogin.value) == true) {
        document.getElementById('alertemail').style.display = 'none'

        userList.push(userData)
        console.log(userList);
    } else {
        document.getElementById('alertemail').style.display = 'block'
    }
    if (checkPassword(userPasswordlogin.value) == true) {
        document.getElementById('alertpass').style.display = 'none'
        userList.push(userData)
        console.log(userList);
    } else {
        document.getElementById('alertpass').style.display = 'block'
    }
}

//clear Input
function clearInput() {
    userNamelogin.value= "";
    userEmailLogin.value = "";
    userPasswordlogin.value = "";
}


//Check data in array
var btnSignIn = document.getElementById("btnSignIn");
btnSignIn.addEventListener("click", function () {

    for (var i = 0; i < userList.length; i++) {
        if (userEmailLogin.value.includes(userList[i].email) && userPasswordlogin.value.includes(userList[i].password)) {
            document.getElementById("home").style.display = "block";
            document.getElementById("loginAndSign").style.display = "none";
            document.getElementById("nav").style.display = "block";
            document.getElementById("containerHone").innerHTML = `
            <h1 class="welcome" id="welcome">Welcome ${" "} ${userList[i].name} </h1>
            `
            clearInput();


        }
        else {
            document.getElementById("loginInvalid").style.display = "block";
            document.getElementById("InvalidName").style.display = "none";


        }
    }
});


// Regular expression
function check(word) {
    var regex = /^[A-Z][a-z]{2,}$/
    return regex.test(word)

}
function checkEmail(word) {
    // var regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    var regex = /^[a-zA-Z0-9]{4,}@(gmail|yahoo).com$/
    return regex.test(word)
}
function checkPassword(password) {
    var regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
    return regex.test(password)
}