let original = {
  name: "Bobb",
  age: 30,
};
let copy = { ...original };
copy.name = "Charlie";
console.log("original: ", original);
console.log("copy: ", copy);
