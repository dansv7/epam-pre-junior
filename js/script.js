// 1

// let login = prompt("Введіть логін")

// if (login === "Admin") {
//   const password = prompt("Введіть пароль")
//   if (password === "12345") {
//     alert("Ласкаво просимо")
//   } else {
//     alert("Невірний пароль")
//   }
// } else {
//   alert("Доступ заборонено")
// }

// 2

// 2.1

const tour = {
  name: "Trip to Kharkiv",
  description: "description",
  price: 300,
  duration: "24 hours",
  displayInfo: function () {
    console.log(this.name, this.description, this.price, this.duration)
  }
}

tour.displayInfo()

// 2.2

function calculateTotalCost(obj, number) {
  console.log(obj.price * number);
}

calculateTotalCost(tour, 100)