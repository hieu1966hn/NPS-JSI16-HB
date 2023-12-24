///// Tìm hiểu về lập trình hướng đối tượng OOP (Object Oriented Programming): 

/*
Khái niệm: là 1 phong cách lập trình cho phép tổ chức mã nguồn theo cách giúp tăng
+ Tái sử dụng
+ Bảo trì
+ Cấu trúc hệ thống ở mức độ cao

*/


////// 1. Đối tượng (Object); let obj ={}
/// Trong OOP, mọi thứ đều được coi là một đối tượng, gồm thuộc tính và phương thức.
let student = {
  name: "John",
  age: 20,
  study: function () {
    console.log("Soạn văn");
  }
};


///// 2. Lớp (Class)
/*
Là một bản thiết kế cho việc tạo đối tượng. Lớp định nghĩa thuộc tính và phương thức.
*/

//// Cú pháp tạo kiểu dữ liệu với class
// class Student {
//   // Hàm khởi tạo thuộc tính
//   constructor(_name, _age, _hobbies) {
//     this.name = _name;
//     this.age = _age;
//     this.hobbies = _hobbies
//   }
// }

// let John = new Student("John", 12, ["Cầu lông"]);
// //// In ra tên của John.
// console.log(John.name);
// console.log(John.hobbies);

// let Hung = new Student("Hùng", 16, "Ngủ");
// console.log(Hung.hobbies);



/// Áp dụng với KDL Phân số 
class PhanSo {
  // Hàm khởi tạo
  constructor(_tu, _mau) {
    this.tu = _tu;
    this.mau = _mau;
  }

  // Viết phương thưc
  /// Phương thức cộng hai phân số
  /*
  1  2   3+4  7
  2  3    6   6
  */
  cong(phanSoKhac) {
    const tuMoi = this.tu * phanSoKhac.mau + this.mau * phanSoKhac.tu;
    const mauMoi = this.mau * phanSoKhac.mau

    return new PhanSo(tuMoi, mauMoi)
  }


  //// Phương thức rút gọn phân số
  rutgon() {
    const ucln = this.timUCLN(this.tu, this.mau);
    return new PhanSo(this.tu / ucln, this.mau / ucln)
  }

  /// Phương thức tìm ước chung lớn nhất (UCLN)
  timUCLN(a, b) {
    if (b === 0) return a;
    return this.timUCLN(b, a % b)
  }


  // Viết nốt hàm: tru, nhân, chia 2 phân số
  hienthi() {
    console.log(`${this.tu}/${this.mau}`);
  }

}

let PhanSo1 = new PhanSo(1, 2);
let PhanSo2 = new PhanSo(2, 3)

let tong = PhanSo1.cong(PhanSo2)
tong.rutgon().hienthi();

///// Chạy thử phương thức cộng 2 phân số