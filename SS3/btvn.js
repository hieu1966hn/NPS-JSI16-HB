/// Bài 1
// let arr1 = [1, 2, 3, 5];
// /// C1
// // let arr2 = [...arr1]; // 1,2,3,5

// // arr1[0] = 0;

// // console.log(arr2); ////


// //C2: 
// let arr2 = arr1; ///// Không sử dụng
// console.log(arr2); 


//// Bài 2: 
// let arrA = ["Hello", " Xin chào"];
// let arrB = ["Bonjour", "Olá"];

// // C1
// let waysToSayHello = [...arrA, ...arrB]; ////// Nên dùng
// console.log("waysToSayHello: ", waysToSayHello);

// // C2
// let waysToSayHello1 = [arrA, arrB] ///// Ko sử dụng
// console.log("waysToSayHello1: ", waysToSayHello1);



///// Bài 3: 
// let arrX = [0, 1, 2, 3, 4, 5, 6, 7, 8];

// let arrSquare = arrX.map(item => item * item); /// 0, 1, 4,9, ..
// console.log("arrSquare: ", arrSquare);

// let arrOdds = arrX.filter(item => item % 2 !== 0);
// console.log("arrOdds: ", arrOdds);


//// Bài 6: 
//composer: Teacher Nguyễn Trung Hiếu - mindX School


let student = [
  {
    name: "Duong",
    age: 11,
    hobbies: ["video game", "sleep", "learn"]
  },
  {
    name: "Dong",
    age: 12,
    hobbies: ["video game", "sick", "study"]
  },
  {
    name: "Minh",
    age: 13,
    hobbies: ["video game", "sick", "learn"]
  },
  {
    name: "Thanh",
    age: 9,
    hobbies: ["play game", "sleep", "learn"]
  },
  {
    name: "Hung",
    age: 11,
    hobbies: ["play game", "sick", "study"]
  }
]


// Cau 1: nhap tuoi va in ra name cua nhung ai co so tuoi da nhap
// cau 2: Nhap so thich, và in ra toàn bộ sở thích và name của những ai có chứa sở thích đó.
// Câu 3: Lọc ra những ai có sở thich là study và in ra nó.
// Cau 4: thay doi toan bo nhung ai co tuoi == 11 thành 15. (sử dụng map.

////// Ý 1:
// let ageInput = Number(prompt("Mời người dùng nhập tuổi"));
// console.log("ageInput: ", ageInput); /// 11

// //// Sử dụng filter để giải quyết câu 1:
// let nameOfAgeInput = student.filter(item => ageInput === item.age)
// console.log("nameOfAgeInput: ", nameOfAgeInput);

// //// in ra tên từng bạn: 
// for (let key of nameOfAgeInput) {
//   console.log(key.name);
// }

//// ý 2;
// let hobbiesInput = prompt("Mời người dùng nhập sở thích");

// let nameOfHobbies = student.filter(item =>
//   hobbiesInput === item.hobbies.find(i => i === hobbiesInput))

// console.log("nameOfHobbies: ", nameOfHobbies);

///Ý 3: Tận dụng ý 2 nhưng nhập vào là: "study"


/// Ý 4: Đổi tuổi từ 11 -> 15
let studentFilterAge = student.filter(item => item.age === 11)
console.log("studentFilterAge: ", studentFilterAge);
let studentChangeAge = studentFilterAge.map(item => item.age = 15);
console.log("studentChangeAge: ", studentChangeAge);

