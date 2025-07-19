document.addEventListener("DOMContentLoaded", () => {
  // Mobile Menu Toggle
  const menuBtn = document.getElementById("menu-btn");
  const navLinks = document.getElementById("nav-links");
  const menuBtnIcon = menuBtn.querySelector("i");

  menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open");
    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
  });

  navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("open"); // Fixed typo: 'remaove' to 'remove'
    menuBtnIcon.setAttribute("class", "ri-menu-line");
  });

  // ScrollReveal Animations
  const scrollRevealOption = {
    origin: "bottom",
    distance: "50px",
    duration: 1000,
  };

  ScrollReveal().reveal(".header__image img", {
    ...scrollRevealOption,
    origin: "right",
  });
  ScrollReveal().reveal(".header__content h1", {
    ...scrollRevealOption,
    delay: 500,
  });
  ScrollReveal().reveal(".header__content p", {
    ...scrollRevealOption,
    delay: 1000,
  });
  ScrollReveal().reveal(".header__btns", {
    ...scrollRevealOption,
    delay: 1500,
  });

  // Banner Duplication for Infinite Scroll
  const banner = document.querySelector(".banner__container");
  const bannerContent = Array.from(banner.children);
  bannerContent.forEach((item) => {
    const duplicateNode = item.cloneNode(true);
    duplicateNode.setAttribute("aria-hidden", true);
    banner.appendChild(duplicateNode);
  });

  ScrollReveal().reveal(".arrival__card", {
    ...scrollRevealOption,
    interval: 500,
  });

  ScrollReveal().reveal(".sale__image img", {
    ...scrollRevealOption,
    origin: "left",
  });
  ScrollReveal().reveal(".sale__content h2", {
    ...scrollRevealOption,
    delay: 500,
  });
  ScrollReveal().reveal(".sale__content p", {
    ...scrollRevealOption,
    delay: 1000,
  });
  ScrollReveal().reveal(".sale__content h4", {
    ...scrollRevealOption,
    delay: 1000,
  });
  ScrollReveal().reveal(".sale__btn", {
    ...scrollRevealOption,
    delay: 1500,
  });

  ScrollReveal().reveal(".favourite__card", {
    ...scrollRevealOption,
    interval: 500,
  });

  // Animations for New Sections
  ScrollReveal().reveal(".featured__card", {
    ...scrollRevealOption,
    interval: 500,
  });

  ScrollReveal().reveal(".testimonial__card", {
    ...scrollRevealOption,
    interval: 500,
  });

  ScrollReveal().reveal(".story__image img", {
    ...scrollRevealOption,
    origin: "left",
  });
  ScrollReveal().reveal(".story__content h2", {
    ...scrollRevealOption,
    delay: 500,
  });
  ScrollReveal().reveal(".story__content p", {
    ...scrollRevealOption,
    delay: 1000,
  });
  ScrollReveal().reveal(".story__content .btn", {
    ...scrollRevealOption,
    delay: 1500,
  });

  ScrollReveal().reveal(".download__image img", {
    ...scrollRevealOption,
    origin: "right",
  });
  ScrollReveal().reveal(".download__content .section__header", {
    ...scrollRevealOption,
    delay: 500,
  });
  ScrollReveal().reveal(".download__content p", {
    ...scrollRevealOption,
    delay: 1000,
  });
  ScrollReveal().reveal(".download__links", {
    ...scrollRevealOption,
    delay: 1500,
  });

  ScrollReveal().reveal(".promo__container .section__header", {
    ...scrollRevealOption,
    delay: 500,
  });
  ScrollReveal().reveal(".promo__container p", {
    ...scrollRevealOption,
    delay: 1000,
  });
  ScrollReveal().reveal(".promo__container form", {
    ...scrollRevealOption,
    delay: 1500,
  });

  const track = document.querySelector(".carousel__track");
  const cards = document.querySelectorAll(".featured__card");
  const prevBtn = document.querySelector(".carousel__btn--prev");
  const nextBtn = document.querySelector(".carousel__btn--next");
  let currentIndex = 0;

  function updateCarousel() {
    const cardWidth = cards[0].getBoundingClientRect().width;
    track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
  }

  nextBtn.addEventListener("click", () => {
    if (currentIndex < cards.length - 1) {
      currentIndex++;
      updateCarousel();
    }
  });

  prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateCarousel();
    }
  });

  window.addEventListener("resize", updateCarousel);

  // Newsletter Subscription Confirmation
  function showConfirmation(event) {
    event.preventDefault();
    const confirmation = document.getElementById("promo-confirmation");
    confirmation.style.display = "block";
    setTimeout(() => {
      confirmation.style.display = "none";
    }, 3000);
  }

  const promoForm = document.querySelector(".promo__container form");
  promoForm.addEventListener("submit", showConfirmation);
});