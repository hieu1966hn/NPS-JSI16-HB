const controller = {}

controller.register = (data) => {
  if (data.firstName === "") {
    // alert("*Please input your first name");
    document.getElementById("first-name-error").innerText = "*Please input your first name";
  }
  else {
    document.getElementById("first-name-error").innerText = "";
  }

  if (data.lastName === "") {
    // alert("*Please input your first name");
    document.getElementById("last-name-error").innerText = "*Please input your last name";
  }
  else {
    document.getElementById("last-name-error").innerText = "";
  }

  if (data.email === "") {
    // alert("*Please input your first name");
    document.getElementById("email-error").innerText = "*Please input your email";
  }
  else {
    document.getElementById("email-error").innerText = "";
  }

  if (data.password === "") {
    // alert("*Please input your first name");
    document.getElementById("password-error").innerText = "*Please input your password";
  }
  else {
    document.getElementById("password-error").innerText = "";
  }

  if (data.confirmPassword === "") {
    // alert("*Please input your first name");
    document.getElementById("confirm-password-error").innerText = "*Please input your confirm password";
  }
  else {
    document.getElementById("confirm-password-error").innerText = "";
  }



  ///// Xử lý confirmPassword
  data.password != data.confirmPassword ?
    document.getElementById("confirm-password-error").innerText = "Confirm Password is erorr" :
    document.getElementById("confirm-password-error").innerText = "";


  // Tạo user
  if (data.firstName !== "" && data.lastName !== "" &&
    data.email !== "" &&
    data.password !== "" &&
    data.confirmPassword !== "" &&
    data.password === data.confirmPassword) {
    model.register(data); /// xử lý tạo tài khoản trên server với hàm này.
  }

}