

const submitForm = (e) => {
  e.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let pass = document.getElementById("pass").value;
  let cpass = document.getElementById("cpass").value;
  let error = document.getElementById("error_message");
  let text;
  error.style.padding = "10px";

  if (name.length < 6) {
    text = "Name Should be more than 6 characters";
    error.innerHTML = text;
    return false;
  }
  if (email.indexOf("@") == -1 || email.length < 6) {
    text = "Your email is invalid.";
    error_message.innerHTML = text;
    return false;
  }
  if (pass.length < 6) {
    text = "Password Should be more than 8 characters";
    error.innerHTML = text;
    return false;
  }
  if (pass != cpass) {
    text = "Password does not match";
    error.innerHTML = text;
    return false;
  }
  let frm = document.getElementById("myform");
  frm.style.display = "none";

  let disp = document.getElementById("success");
  disp.style.display = "block";
  error.style.padding = "0px";

  submitData(name, email, pass, cpass);
  return false;
};

document.getElementById("myform").addEventListener("submit", submitForm);
