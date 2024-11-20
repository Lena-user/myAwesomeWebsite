const signIN = document.getElementById("signIn");
const User = document.getElementById("User");
const Password = document.getElementById("Password");

signIN.addEventListener("submit", function (e) {
    e.preventDefault();
    const userLocal = JSON.parse(localStorage.getItem("Users")) || [];
    const findUser = userLocal.find(
        (Account) => Account.userName === User.value
            && Account.pass === Password.value);
    if (!findUser)
    {
        alert("User or Password is incorrect.")
    }
    else
    {
        window.location.href = "home.html";
    }
});