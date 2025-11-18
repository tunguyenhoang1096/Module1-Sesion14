// Luyện tập thao tác với mảng đối tượng trong JavaScript, bao gồm:
// Thêm mới sách vào danh sách.
// Hiển thị danh sách sách.
// Tìm kiếm sách theo tên.
// Xóa sách theo ID.
// Thoát chương trình.
// 2. Mô tả bài toán
// Viết một chương trình quản lý danh sách sách với các chức năng sau:
// Thêm sách mới
// Nhập ID, Tên sách, Tác giả, Năm xuất bản.
// Thêm sách vào danh sách.
// Hiển thị danh sách sách
// Duyệt qua danh sách và in thông tin của từng sách ra màn hình.
// Tìm kiếm sách theo tên
// Nhập từ khóa tìm kiếm.
// Tìm và hiển thị sách có tên chứa từ khóa đó (không phân biệt hoa thường).
// Nếu không tìm thấy, thông báo cho người dùng.
// Xóa sách theo ID
// Nhập ID của sách cần xóa.
// Nếu sách tồn tại, xóa khỏi danh sách.
// Nếu sách không tồn tại, thông báo lỗi.
// Thoát chương trình
// Dừng chương trình khi người dùng chọn thoát.
const bookList = [
  {
    id: "B01",
    name: "Lạc đường",
    author: "Phan Văn Vỹ",
    year: 2020,
  },
  {
    id: "B02",
    name: "Nấc thang lên thiên đường ",
    author: "Tú Linh",
    year: 2022,
  },
];
while (true) {
  let userInput = prompt(`Mời lựa chọn chức năng
    - Thêm sách mới (C)
    - Hiển thị danh sách sách (R)
    - Tìm kiếm sách theo tên (S)
    - Xóa sách (D)
    - Thoát chương trình (E)`);
  if (userInput === "C") {
    // Thêm mới sách vào danh sách sách
    let id = prompt("Nhập id sách");
    let name = prompt("Nhập tên sách");
    let author = prompt("Nhập tên tác giả");
    let year = prompt("Nhập năm xuất bản");
    let newBook = {
      id,
      name,
      author,
      year,
    };
    bookList.push(newBook);
    displayBookList();
  } else if (userInput === "R") {
    // Hiển thị danh sách sách
    displayBookList();
  } else if (userInput === "S") {
    // Tìm kiếm sách theo tên sách
    let searchName = prompt("Mời nhập tên sách cần tìm kiếm");
    let index = bookList.findIndex(function (el, i) {
      return el.name === searchName;
    });
    if (index === -1) {
      console.log(`Không tìm thấy sách ${searchName}`);
    } else {
      console.log(`Thông tin về sách ${searchName}
                    ID sách: ${bookList[index].id}
                    Tên tác giả: ${bookList[index].author}
                    Năm xuất bản: ${bookList[index].year}`);
    }
  } else if (userInput === "D") {
    // Xóa sách theo ID sách
    let deleteId = prompt("Mời nhập id sách cần xóa");
    let index = bookList.findIndex(function (el, i) {
      return el.id === deleteId;
    });
    if (index === -1) {
      console.log(`Không tìm thấy sách có id là ${deleteId}`);
    } else {
      bookList.splice(index, 1);
      displayBookList();
    }
  } else if (userInput === "E") {
    // Thoát chương trình
    break;
  } else {
    console.log("Không có chức năng vừa chọn");
  }
}
// Hàm hiển thị danh sách sách
function displayBookList() {
  console.log("Danh sách sách trong thư viện");
  for (let index in bookList) {
    console.log("ID sách: ", bookList[index].id);
    console.log("Tên sách: ", bookList[index].name);
    console.log("Tên tác giả: ", bookList[index].author);
    console.log("Năm xuất bản: ", bookList[index].year);
    console.log("-----------------------------");
  }
  console.log(bookList);
}
