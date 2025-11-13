let car = {
  brand: "Toyota",
  model: "Corolla",
  year: "2020",
};
displayCar();
car.color = "red";
car["year"] = "2022";
console.log("Your car after update");
displayCar();
function displayCar() {
  console.log("Your Car:");
  for (let key in car) {
    console.log(`${key}: ${car[key]}`);
  }
}
