function validateForm() {
  var fname = document.forms["myForm"]["fname"].value;
  if (fname == "") {
    document.querySelectorAll(".wrong")[0].classList.add("error");
    document.querySelectorAll(".info-container")[0].classList.add("error")
    // alert("Field must be filled out");
    // return false;
  } else {
    document.querySelectorAll(".wrong")[0].classList.remove("error")
    document.querySelectorAll(".info-container")[0].classList.remove("error")
  }
  var lname = document.forms["myForm"]["lname"].value;
  if (lname == "") {
    document.querySelectorAll(".wrong")[1].classList.add("error");
    document.querySelectorAll(".info-container")[1].classList.add("error")
    // alert("Field must be filled out");
    // return false;
  } else {
    document.querySelectorAll(".wrong")[1].classList.remove("error")
    document.querySelectorAll(".info-container")[1].classList.remove("error")
  }
  var email = document.forms["myForm"]["email"].value;
  if (email == "") {
    document.querySelectorAll(".wrong")[2].classList.add("error");
    document.querySelectorAll(".info-container")[2].classList.add("error")
    // alert("Field must be filled out");
    // return false;
  } else {
    document.querySelectorAll(".wrong")[2].classList.remove("error")
    document.querySelectorAll(".info-container")[2].classList.remove("error")
  }

  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (email.match(mailformat)) {
    document.querySelectorAll(".info")[2].innerHTML = "Email Address cannot be empty"
    document.querySelectorAll(".info-container")[2].classList.remove("error")
    document.querySelectorAll(".wrong")[2].classList.remove("error");
  } else {
    document.querySelectorAll(".wrong")[2].classList.add("error");
    document.querySelectorAll(".info-container")[2].classList.add("error")
    document.querySelectorAll(".info")[2].innerHTML = "Please provide correct email"
  }
  var password = document.forms["myForm"]["password"].value;
  if (password == "") {
    document.querySelectorAll(".wrong")[3].classList.add("error");
    document.querySelectorAll(".info-container")[3].classList.add("error")
    // alert("Field must be filled out");
    // return false;
  } else {
    document.querySelectorAll(".wrong")[3].classList.remove("error")
    document.querySelectorAll(".info-container")[3].classList.remove("error")
  }
}




//   // const email = document.getElementById("email");
// const form = document.getElementById("form");
// const message = document.querySelector(".message");
// const errorIcon = document.querySelector(".error");

// // form.addEventListener('submit', e => {
// //     e.preventDefault();

// //     if (ValidateEmail(document.form.text)) {
// //         form.style.borderColor = "green";
// //     } else {
// //         form.style.borderColor = "red";
// //     };
// // })



// // function ValidateEmail(x) {
// //     var mailformat = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
// //     if (x.value.match(mailformat)) {
// //         alert("You have entered a valid email address!");    //The pop up alert for a valid email address
// //         document.form.text.focus();
// //         return true;
// //     }
// //     else {
// //         alert("You have entered an invalid email address!");    //The pop up alert for an invalid email address
// //         document.form.text.focus();
// //         return false;
// //     }
// // }


// function ValidateEmail(inputText) {
//     var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//     if (inputText.value.match(mailformat)) {
//         // alert("Valid email address!");
//         // document.form.text.focus();
//         form.classList.add("success")
//         form.classList.remove("error")
//         return true;
//     }
//     else {
//         // alert("You have entered an invalid email address!");
//         // document.form.text.focus();
//         form.classList.add("error")
//         form.classList.remove("success")
//         return false;
//     }
// }
