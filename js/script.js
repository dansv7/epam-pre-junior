let login = prompt("Введіть логін")

if (login === "Admin") {
  const password = prompt("Введіть пароль")
  if (password === "12345") {
    alert("Ласкаво просимо")
  } else {
    alert("Невірний пароль")
  }
} else {
  alert("Доступ заборонено")
}