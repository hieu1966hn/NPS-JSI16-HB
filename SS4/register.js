// Lấy ra thẻ form
const registerForm = document.getElementById("register-form");

/*
Các sự kiện có thể lắng nghe được trong form: click, submit, change, 
*/


// bắt sự kiện submit
registerForm.addEventListener("submit", (event) => {
  // Ngăn sự kiện submit reload lại trang web
  event.preventDefault();

  const data = {
    firstName: registerForm.firstName.value.trim(),
    lastName: registerForm.lastName.value.trim(),
    email: registerForm.email.value.trim(),
    password: registerForm.password.value.trim(),
    confirmPassword: registerForm.confirmPassword.value.trim(),
  }

  console.log(data);
  // Gửi dữ liệu data người dùng nhập tới controller để check lỗi.
  controller.register(data);
});