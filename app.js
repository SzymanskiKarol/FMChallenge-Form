function validateName() {
  var fname = document.forms["myForm"]["fname"].value;
  if (fname == "") {
    document.querySelectorAll(".wrong")[0].classList.add("error");
    document.querySelectorAll(".info-container")[0].classList.add("error")
    return false;
  } else {
    document.querySelectorAll(".wrong")[0].classList.remove("error")
    document.querySelectorAll(".info-container")[0].classList.remove("error")
    return true;
  }
}

function validateLName() {
  var lname = document.forms["myForm"]["lname"].value;
  if (lname == "") {
    document.querySelectorAll(".wrong")[1].classList.add("error");
    document.querySelectorAll(".info-container")[1].classList.add("error")
    return false;
  } else {
    document.querySelectorAll(".wrong")[1].classList.remove("error")
    document.querySelectorAll(".info-container")[1].classList.remove("error")
    return true;
  }
}

function validateEmail() {
  var email = document.forms["myForm"]["email"].value;
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!email == "" && !email.match(mailformat)) {
    document.querySelectorAll(".info")[2].innerHTML = "Please provide correct email: example@email.com";
    document.querySelectorAll(".wrong")[2].classList.add("error");
    document.querySelectorAll(".info-container")[2].classList.add("error");
    return false;
  } else if (email == '') {
    document.querySelectorAll(".info")[2].innerHTML = "Email Address cannot be empty";
    document.querySelectorAll(".wrong")[2].classList.add("error");
    document.querySelectorAll(".info-container")[2].classList.add("error");
    return false;
  } else {
    document.querySelectorAll(".wrong")[2].classList.remove("error");
    document.querySelectorAll(".info-container")[2].classList.remove("error");
    document.querySelectorAll(".info")[2].innerHTML = "Email Address cannot be empty";
    return true;
  }
}

function validatePassword() {
  var password = document.forms["myForm"]["password"].value;
  if (password == "") {
    document.querySelectorAll(".wrong")[3].classList.add("error");
    document.querySelectorAll(".info-container")[3].classList.add("error")
    return false;
  } else {
    document.querySelectorAll(".wrong")[3].classList.remove("error")
    document.querySelectorAll(".info-container")[3].classList.remove("error")
    return true;
  }
}