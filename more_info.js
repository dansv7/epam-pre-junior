const moreInfoTours = [
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
    // {
    //     name: "Vibrant Rio de Janeiro Carnival",
    //     description: "Experience the energy and excitement of Rio de Janeiro's world-famous Carnival, where colorful parades, pulsating samba rhythms, and lively street parties come together in a dazzling celebration of life.",
    //     price: 2500,
    //     duration: 5,
    // },
    // {
    //     name: "Alaskan Wilderness Expedition",
    //     description: "Immerse yourself in the rugged beauty of Alaska, a land of towering mountains, pristine glaciers, and lush forests. Explore untouched wilderness, witness awe-inspiring wildlife, and experience unforgettable adventures.",
    //     price: 3500,
    //     duration: 10,
    // },
    // {
    //     name: "Enigmatic Egyptian Odyssey",
    //     description: "Uncover the mysteries of ancient Egypt, from the iconic pyramids and Sphinx to the bustling markets and vibrant cities along the Nile River. Delve into the history, art, and culture that have captivated the world for millennia.",
    //     price: 1800,
    //     duration: 8,
    // },
    // {
    //     name: "Mystical Machu Picchu Trek",
    //     description: "Venture deep into the heart of the Andes, where you'll uncover the ancient secrets of Machu Picchu, the lost city of the Incas. Hike through breathtaking landscapes and immerse yourself in the rich history and culture of Peru.",
    //     price: 2200,
    //     duration: 9,
    // },
    // {
    //     name: "Scenic New Zealand Adventure",
    //     description: "Traverse the stunning landscapes of New Zealand, from the lush rainforests and pristine beaches to the dramatic mountains and glaciers. Experience the adventure and natural beauty that make this destination truly unique.",
    //     price: 2800,
    //     duration: 12,
    // },
];

document.addEventListener("DOMContentLoaded", function () {
    const infoButtons = document.querySelectorAll(".tour-card__button_info");
    const modal = document.getElementById("tourModal");
    const closeModal = document.querySelector(".close");
    const modalTitle = document.getElementById("modalTitle");
    const modalDescription = document.getElementById("modalDescription");
    const modalPrice = document.getElementById("modalPrice");
    const modalDuration = document.getElementById("modalDuration");

    infoButtons.forEach((button, index) => {
        button.addEventListener("click", () => {
            const tour = moreInfoTours[index];
            modalTitle.textContent = tour.name;
            modalDescription.textContent = tour.description;
            modalPrice.textContent = "$" + tour.price.toLocaleString();
            modalDuration.textContent = tour.duration;
            modal.style.display = "block";
        });
    });

    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
    });

    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});