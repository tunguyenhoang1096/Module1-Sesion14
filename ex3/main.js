let book = {
  title: "JavaScript Basics",
  author: "John Smith",
  page: 200,
};
console.log("Book before delete");
displayBook();
delete book.page;
console.log("Book after delete");
displayBook();
function displayBook() {
  for (let key in book) {
    console.log(`${key}: ${book[key]}`);
  }
}
