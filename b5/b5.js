// function calcRectangle(a, b) {
//   let sum = a * b;
//   console.log(sum);
// }
// calcRectangle(5, 10);
// function add(a, b) {
//   return a + b;
// }
// let result = add(3, 6);
// console.log(result);
// function calc(a, operator, b) {
//   if (operator == "-") return a - b;
//   if (operator == "+") return a + b;
//   if (operator == "*") return a * b;
//   if (operator == "/") return a / b;
//   return "Không tồn tại toán tử này";
// }
// console.log(calc(3, "+", 6));
// console.log(calc(3, "-", 6));
// console.log(calc(3, "*", 6));
// console.log(calc(3, "/", 6));
// console.log(calc(3, "12", 6));
const registerForm = document.querySelector("#register-form");
console.log(registerForm);
registerForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let newUser = {
    username: registerForm.username.value,
    email: registerForm.email.value,
    subject: registerForm.subject.value,
    message: registerForm.message.value,
  };
  console.log(newUser);
});
