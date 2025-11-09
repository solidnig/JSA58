var formRegister = document.querySelector("#form-register");

// lắng nghe sự kiện khi người dùng bấm vào nút register có type = submit
// thì sự kiện sẽ đón nhận
formRegister.addEventListener("submit", (e) => {
  e.preventDefault(); // ngăn chặm reload lại trang

  let email = e.target[0].value;
  let password = e.target[1].value;
  let rePassword = e.target[2].value;

  let lowerCaseLetter = /[a-z]/g;
  let upperCaseLetter = /[A-Z]/g;
  let numbers = /[0-9]/g;
  // kiểm tra xem người dùng có bỏ trống ô nào không?
  if (!email) {
    alert("Vui lòng nhập email");
    return;
  }
  if (!password) {
    alert("Vui lòng nhập password");
    return;
  }
  if (!rePassword) {
    alert("Vui lòng nhập rePassword");
    return;
  }
  if (password.length < 8) {
    alert("Mật khẩu phải trên 8 kí tự");
    return;
  }
  if (!password.match(lowerCaseLetter)) {
    alert("Mật khẩu phải có chứa ít nhất 1 chữ cái");
    return;
  }
  if (!password.match(upperCaseLetter)) {
    alert("Mật khẩu phải có ít nhất 1 kí tự ghi hoa");
    return;
  }
  if (!password.match(numbers)) {
    alert("Mật khẩu phải có ít nhất 1 chữ số");
    return;
  }
  // kiểm tra xem mật khẩu mà người dùng nhập có giống mật khẩu nhập lại hkongo???
  if (password !== rePassword) {
    alert("Mật khẩu bạn nhập không trùng với mật khẩu nhập lại");
    return;
  }

  console.log("register thành công", email, password, rePassword);

  // sau đó lưu vào localStorage
  const userData = JSON.parse(localStorage.getItem("userData")) || [];
  const newUser = {
    email,
    password,
    rePassword,
  };
  userData.push(newUser);
  localStorage.setItem("userData", JSON.stringify(userData));
  window.location.href = "login.html"; // tự động di chuyển về trang login
});
