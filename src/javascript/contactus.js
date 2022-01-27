

const submitcontact = () => {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;

  let message = document.getElementById("message").value;

  submitData(name, email, message);
  console.log("post");
};
document.getElementById("contact").addEventListener("submit", submitcontact);
