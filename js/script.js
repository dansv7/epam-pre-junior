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

// const tour = {
//   name: "Trip to Kharkiv",
//   description: "description",
//   price: 300,
//   duration: "24 hours",
//   displayInfo: function () {
//     console.log(this.name, this.description, this.price, this.duration)
//   }
// }

// tour.displayInfo()

// 2.2

// function calculateTotalCost(obj, number) {
//   console.log(obj.price * number);
// }

// calculateTotalCost(tour, 100)

// 3.1

let tours = [
  {
    name: "Mystical Bali Adventure",
    description: "Explore the enchanting island of Bali, with its lush jungles, vibrant culture, and ancient temples. Visit the iconic Tanah Lot temple, hike to the summit of Mount Batur, and unwind on the pristine beaches of Nusa Dua.",
    price: 2000,
    duration: 7
  },
  {
    name: "Futuristic Tokyo Odyssey",
    description: "Discover the captivating blend of tradition and innovation in Tokyo. Experience the city's bustling streets and neon-lit nights, visit ancient temples and shrines, and savor the exquisite flavors of Japanese cuisine.",
    price: 2000,
    duration: 7
  },
  {
    name: "Alaskan Wilderness Expedition",
    description: "Immerse yourself in the rugged beauty of Alaska, a land of towering mountains, pristine glaciers, and lush forests. Explore untouched wilderness, witness awe-inspiring wildlife, and experience unforgettable adventures.",
    price: 3500,
    duration: 10
  },
  {
    name: "Egyptian Odyssey",
    description: "Uncover the mysteries of ancient Egypt, from the iconic pyramids and Sphinx to the bustling markets and vibrant cities along the Nile River. Delve into the history, art, and culture that have captivated the world for millennia.",
    price: 1800,
    duration: 8
  },
  {
    name: "Scenic New Zealand Adventure",
    description: "Traverse the stunning landscapes of New Zealand, from the lush rainforests and pristine beaches to the dramatic mountains and glaciers.Experience the adventure and natural beauty that make this destination truly unique.",
    price: 2800,
    duration: 12
  },
  {
    name: "Mystical Machu Picchu Trek",
    description: "Venture deep into the heart of the Andes, where you'll uncover the ancient secrets of Machu Picchu, the lost city of the Incas. Hike through breathtaking landscapes and immerse yourself in the rich history and culture of Peru.",
    price: 2200,
    duration: 9
  },
  {
    name: "Vibrant Rio de Janeiro Carnival",
    description: "Experience the energy and excitement of Rio de Janeiro's world-famous Carnival, where colorful parades, pulsating samba rhythms, and lively street parties come together in a dazzling celebration of life.",
    price: 2500,
    duration: 5
  },
  {
    name: "Majestic African Safari",
    description: "Embark on a thrilling journey through the African wilderness, where you'll encounter diverse wildlife, breathtaking landscapes, and vibrant cultures. Discover the untamed beauty of the African savanna.",
    price: 3000,
    duration: 10
  }
]

// 3.2

function maxPrice(price) {
  const tour = tours.filter((tour) => {
    return tour.price <= price
  })
  console.log(tour)
}

maxPrice(2500)

// 3.3

const sortedTours = tours.sort((a, b) => {
  return a.name.localeCompare(b.name)
})

console.log(sortedTours)

// localStorage

const login = prompt("Введіть логін")

if (login === "Admin") {
  const password = prompt("Введіть пароль")

  const inputData = {
    login: login,
    password: password
  }

  const storedData = JSON.parse(localStorage.getItem("userData")) || []
  storedData.push(inputData)

  localStorage.setItem("userData", JSON.stringify(storedData))

  if (password === "12345") {
    alert("Ласкава просимо")
  } else {
    alert("Невірний пароль")
  }
} else {
  const incorrectInputData = {
    login: login,
    password: ""
  }

  const storedDataFail = JSON.parse(localStorage.getItem("incorrectInputData")) || []
  storedDataFail.push(incorrectInputData)

  localStorage.setItem("incorrectInputData", JSON.stringify(storedDataFail))

  alert("Доступ заборонено")
}
