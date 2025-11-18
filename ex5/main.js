// Viết một chương trình quản lý danh sách sinh viên với các chức năng cơ bản sau:
// 1. Thêm sinh viên mới
// - Nhập tên, tuổi, mã số sinh viên (ID).
// - Thêm sinh viên vào danh sách.
// 2. Hiển thị danh sách sinh viên
// - Duyệt qua danh sách và in thông tin của từng sinh viên ra màn hình.
// 3. Xóa sinh viên theo ID
// - Nhập ID của sinh viên cần xóa.
// - Nếu ID tồn tại, xóa sinh viên khỏi danh sách.
// - Nếu ID không tồn tại, thông báo lỗi.
// let name, age, id;
const studentList = [
  {
    id: 1,
    name: "Nguyễn Văn A",
    age: 20,
  },
  {
    id: 2,
    name: "Nguyễn Văn B",
    age: 21,
  },
  {
    id: 3,
    name: "Nguyễn Văn C",
    age: 19,
  },
];
while (true) {
  let choose = Number(
    prompt(`Mời nhập lựa chọn
    1. Thêm mới sinh viên
    2. Hiện thị danh sách sinh viên
    3. Xóa sinh viên
    0. Thoát chương trình`)
  );
  if (choose === 1) {
    // Thêm sinh viên vào danh sách
    let name = prompt("Nhập tên");
    let age = prompt("Nhập tuổi");
    let id = prompt("Nhập mã sinh viên");
    let student = {
      id: id,
      name: name,
      age: age,
    };
    studentList.push(student);
    displayStudentList();
  } else if (choose === 2) {
    displayStudentList();
    // HIển thị danh sách sinh viên
  } else if (choose === 3) {
    // Xóa danh sách sinh viên
    let idDelete = Number(prompt("Nhập ID của sinh viên cần xóa"));
    let index = studentList.findIndex(function (el, i) {
      return el.id === idDelete;
    });
    if (index === -1) {
      console.log(`Khoong tìm thấy sinh viên có id là ${id}`);
    } else {
      studentList.splice(index, 1);
      displayStudentList();
    }
  } else if (choose === 0) {
    // Dừng chương trình
    break;
  } else {
    console.log("K có lựa chọn nào");
  }
}

function displayStudentList() {
  console.log("Danh sách sinh viên");
  for (let index in studentList) {
    console.log(`id: ${studentList[index].id}`);
    console.log(`name: ${studentList[index].name}`);
    console.log(`age: ${studentList[index].age}`);
    console.log(`-----------------------`);
  }
  console.log(studentList);
}
