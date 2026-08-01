

function signUp(event) {
  // console.log("Script loaded");
  event.preventDefault();

  if (document.forms["signUp"]["fullname"].value.trim().length < 3) {
    alert("Full name must be at least 3 characters");
    document.forms["signUp"]["fullname"].focus();
    return false;
  }

  const email = document.forms["signUp"]["email"].value.toLowerCase().trim();

  if (email.includes("@") == false || email.indexOf(".") <= email.indexOf("@")) {
    alert("Please enter a valid email address");
    document.forms["signUp"]["email"].focus();
    return false;
  }

  try {if (crm_users.some(user => user.email === email)) {
    alert("An account with this email already exists");
    document.forms["signUp"]["email"].focus();
    return false;
  }} catch (error) {

  }

  const password = document.getElementById("password").value.trim();
  // var letter = document.getElementById("letter");
  // var number = document.getElementById("number");
  // var length = document.getElementById("length");

  if (password.length < 8 || !/[A-Z]/i.test(password) || !/[0-9]/.test(password)) {
    alert("Password must be at least 8 characters and contain a letter and a number");
    document.forms["signUp"]["password"].focus();
    return false;
  }

  if (password != document.forms["signUp"]["confirmPassword"].value.trim()) {
    alert("Passwords do not match");
    document.forms["signUp"]["confirmPassword"].focus();
    return false;
  }

  // crm_users.push({
  //   id: Date.now(),
  //   fullname: document.forms["signUp"]["fullname"].value,
  //   email: document.forms["signUp"]["email"].value.toLowerCase(),
  //   password: document.forms["signUp"]["password"].value,
  //   company: document.forms["signUp"]["company"].value,
  //   createdAt: new Date().toISOString(),
  // });

  return true;

}

function logIn(event) {

  event.preventDefault();
  const email = document.forms["login"]["email"].value.toLowerCase().trim();
  const password = document.forms["login"]["password"].value.trim();
  const crm_users = JSON.parse(localStorage.getItem("crm_users")) || [];
  const email_alert = document.getElementById("email-alert");

  if (email == "") {
    document.forms["login"]["email"].style.borderColor = "red";
    email_alert.classList.remove("valid");
    email_alert.classList.add("input-error");
    email_alert.innerHTML = "Email is required";
    document.forms["login"]["email"].focus();
    return false;
  } else if (!crm_users.includes(email)) {
    alert("Invalid email or password");
    document.forms["login"]["email"].focus();
    return false;
  } else {
    document.forms["login"]["email"].style.borderColor = "";
    email_alert.classList.remove("input-error");
    email_alert.classList.add("valid");
    email_alert.innerHTML = "";}

  if (password == "") {
    alert("Password is required");
    document.forms["login"]["password"].focus();
    return false;
  } else if (crm_users[email].password !== password) {
    alert("Invalid email or password");
    document.forms["login"]["password"].focus();
    return false;
  }

  return true;

}
