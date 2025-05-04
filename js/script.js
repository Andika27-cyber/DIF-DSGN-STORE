function initCarousel() {
  const mainCourse = document.querySelector(".main-course-carousel");

  for (let i = 0; i < 5; i++) {
    const mainCourseCarousel = document
      .querySelector(".main-course-carousel-slide")
      .cloneNode(true);

    mainCourse.appendChild(mainCourseCarousel);
  }
}

initCarousel();

// Form Reservation
const form = document.querySelector("#reservation-item-form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const tableName = document.querySelector("#table_name").value;
  const tableSize = document.querySelector("#table_capacity").value;
  const date = document.querySelector("#order_date").value;
  const order = document.querySelector("#order").value;

  const orderText = `Halo, saya ingin order ${tableSize} design, atas nama ${tableName} pada tanggal/waktu ${date}
    
    Order:
    ${order || "*Pesan ditempat"}/n`;

  window.location.replace(`https://wa.me/+6285730054757?text=${orderText}`);
});

const hamburger = document.querySelector("#burger-navigation");
const mobileNavigation = document.querySelector(".nav-mobile-main");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("open");
  mobileNavigation.classList.toggle("menu-active");
});
