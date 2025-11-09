// let array_nums = [];
// let nums = [1, 4, 5, 6, 6, 7, 1, 3, 4];
// console.log(nums);
// let names = ["Banana", "apple", "orange", "cherry", "egg"];
// console.log(names[1]);
// console.log(names[3]);
// console.log("Độ dài danh sách", names.length);
// for (let i = 0; i < names.length; i++) {
//   console.log("index:", i, "value:", names[i]);
// }
// names.push("guava");
// names.push("starfruit");
// names.push("durian", "pineapple");
// console.log(names);
// let findName = names.indexOf("cherry");
// console.log("index:", findName, "\nValue:", names[findName]);
// names.splice(3, 2);
// console.log(names);
// let fruit = {
//   name: "Watermelon",
//   age: "6 month",
//   can_eat: true,
//   type_eat: ["Dùng muỗng", "Dùng dao bổ ra"],
// };
// console.log(fruit);
// console.log(fruit.type_eat);
// console.log(fruit.name);
// let data = [
//   {
//     name: "Watermelon",
//     age: "6 month",
//     can_eat: true,
//     type_eat: ["Dùng muỗng", "Dùng dao bổ ra"],
//   },
//   {
//     name: "Pineapple",
//     age: "6 month",
//     can_eat: true,
//     type_eat: ["Dùng muỗng", "Dùng dao bổ ra"],
//   },
//   {
//     name: "Orange",
//     age: "6 month",
//     can_eat: true,
//     type_eat: ["Dùng muỗng", "Dùng dao bổ ra"],
//   },
// ];
// for (let key in fruit) {
//   console.log(key, "value:", fruit[key]);
// }
// fruit.flavour = "sweet";
// console.log(fruit);
// delete fruit.age;
// let hocSinh = [
//   {
//     ten: "An",
//     tuoi: 15,
//     lop: "10A1",
//   },
//   {
//     ten: "Bình",
//     tuoi: 16,
//     lop: "11A2",
//   },
//   {
//     ten: "Châu",
//     tuoi: 15,
//     lop: "10A1",
//   },
// ];
// let new_hocSinh = {
//   ten: "Dũng",
//   tuoi: 17,
//   lop: "12A3",
// };
// hocSinh.push(new_hocSinh);
// console.log(hocSinh);
// for (let index in hocSinh) {
//   let name = hocSinh[index].ten;
//   if (name == "Bình") {
//     hocSinh[index].tuoi = 17;
//   }
// }
// console.log(hocSinh);
// for (let index in hocSinh) {
//   if (hocSinh[index].ten == "Châu") delete hocSinh[index];
// }
// console.log(hocSinh);
let name = document.getElementById("name");
console.log(name);
// name.textContent = "douqerphiqefoh";
name.innerText = "123123";
name.innerText += "skibidi";
let level = document.querySelector(".level");
level.textContent = "999";
level.style.backgroundColor = "red";
for (let i = 1; i < 10; i++) {
  let newElement = document.createElement("div");
  newElement.style.backgroundColor = "blue";
  newElement.style.width = "100px";
  newElement.style.height = "100px";
  newElement.style.backgroundColor = "blue";
  newElement.style.width = "100px";
  newElement.style.borderRadius = "25%";
  newElement.style.display = "flex";
  newElement.style.alignItems = "center";
  newElement.style.justifyContent = "center";
  newElement.innerHTML = `<p>${i}</p>`;
  document.body.appendChild(newElement);
}
