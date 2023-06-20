const tours = [
  {
    name: "Mystical Bali Adventure",
    description: "Explore the enchanting island of Bali, with its lush jungles, vibrant culture, and ancient temples. Visit the iconic Tanah Lot temple, hike to the summit of Mount Batur, and unwind on the pristine beaches of Nusa Dua.",
    price: 2000,
    duration: 7,
  },
  {
    name: "Romantic Paris Escape",
    description: "Immerse yourself in the beauty and charm of the City of Love. Stroll along the Seine, marvel at the architectural masterpiece of the Eiffel Tower, and indulge in the world-famous French cuisine at charming cafes and bistros.",
    price: 2500,
    duration: 3,
  },
  {
    name: "Futuristic Tokyo Odyssey",
    description: "Discover the captivating blend of tradition and innovation in Tokyo. Experience the city's bustling streets and neon-lit nights, visit ancient temples and shrines, and savor the exquisite flavors of Japanese cuisine.",
    price: 2000,
    duration: 5,
  },
  {
    name: "Kharkiv is the city of students",
    description: "The most popular city of Ukraine among students. A lot of foreigners visit Kharkiv to get higher education",
    price: 3000,
    duration: 10,
  },
]

function getCartFromLocalStorage() {
  const cart = localStorage.getItem('cart');
  return cart ? JSON.parse(cart) : [];
}

function saveCartToLocalStorage(cart) {
  localStorage.setItem('cart', JSON.stringify(cart));
}

function updateCartButton() {
  const cartButton = document.querySelector('.cart-button');
  const cart = getCartFromLocalStorage();
  cartButton.textContent = `Cart (${cart.length})`;
}

function updateCartModal() {
  const cart = getCartFromLocalStorage()
  const cartItemsContainer = document.querySelector('.cart-items');
  cartItemsContainer.innerHTML = '';

  cart.forEach((tour, index) => {
    const cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');
    const title = document.createElement('span');
    title.classList.add('cart-item__title');
    title.textContent = tour.name;

    const price = document.createElement('span');
    price.classList.add('cart-item__price');
    price.textContent = `$${tour.price}`;

    const removeButton = document.createElement('button');
    removeButton.classList.add('cart-item__remove');
    removeButton.textContent = 'Remove';
    removeButton.addEventListener('click', () => {
      cart.splice(index, 1);
      saveCartToLocalStorage(cart);
      updateCartButton();
      updateCartModal();
    });
    cartItem.appendChild(title);
    cartItem.appendChild(price);
    cartItem.appendChild(removeButton);

    cartItemsContainer.appendChild(cartItem);
  });
  const total = cart.reduce((sum, tour) => sum + tour.price, 0);
  const totalElement = document.querySelector('.cart-total__value');
  totalElement.textContent = `$${total}`;
}

function showCartModal() {
  const cartModal = document.querySelector('.cart-modal');
  cartModal.style.display = 'flex';
  updateCartModal();
}

function hideCartModal() {
  const cartModal = document.querySelector('.cart-modal');
  cartModal.style.display = 'none';
}

function addEventListeners() {
  const buyButtons = document.querySelectorAll('.tour-card__button_buy');
  buyButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      const cart = getCartFromLocalStorage();
      cart.push(tours[index]);
      saveCartToLocalStorage(cart);
      updateCartButton();
    });
  });
  const cartButton = document.querySelector('.cart-button');
  cartButton.addEventListener('click', showCartModal);

  const closeModalButton = document.querySelector('.cart-modal__close');
  closeModalButton.addEventListener('click', hideCartModal);
}

updateCartButton();
addEventListeners();
