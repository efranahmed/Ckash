const myEmail = "efranlinkon712@gmail.com";
const myPassword = "712860";

const loginButton = document.getElementById("login_button");

loginButton.addEventListener("click", function () {
  const inputEmail = document.getElementById("exampleInputEmail1").value;
  const inputPassword = document.getElementById("exampleInputPassword1").value;
  if (inputEmail == myEmail && inputPassword == myPassword) {
    window.location.href = "ckash.html";
  } else {
    console.log("wrong");
  }
});
