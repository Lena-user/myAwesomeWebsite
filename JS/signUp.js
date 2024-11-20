const signUp = document.getElementById("singUp");

const User = document.getElementById("User");
const Email = document.getElementById("Email");
const Password = document.getElementById("Password");

const userLocal = JSON.parse(localStorage.getItem("Users")) || [];

signUp.addEventListener("submit", function (events) {
    events.preventDefault();
    const Account = 
    {   
        userId: Math.ceil(Math.random() * 100000000000000000),
        userName: User.value,
        email: Email.value,
        pass: Password.value,
    };
    userLocal.push(Account);
    localStorage.setItem("Users", JSON.stringify(userLocal));
    window.location.href = "index.html";
});