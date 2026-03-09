

document.getElementById("loginbtn").addEventListener("click", function () {
    // console.log("Login Button has been clicked")
    const userNameInput = document.getElementById("username");
    const userName = userNameInput.value;
    // console.log(userName);

    const passwordInput = document.getElementById("password");
    const userPassword = passwordInput.value;
    // console.log(userPassword)

    if(userName === "admin" && userPassword === "admin123"){
        window.location.href = "home.html";
    } else {
        alert('Login Failed! Type the Correct Username & Password')
        return;
    }
});




