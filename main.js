document.addEventListener("DOMContentLoaded", function () {
  
  // Initialize Swiper for Project Cards with smoother loop
  var swiper = new Swiper(".myProjectSwiper", {
    effect: "cards",
    grabCursor: true,
    loop: true,
    loopAdditionalSlides: 2,
    speed: 600,
    cardsEffect: {
      perSlideOffset: 8,
      perSlideRotate: 2,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
  });

  // Hamburger Menu Toggle
  const menuIcon = document.querySelector("#menu-icon");
  const navbar = document.querySelector(".navbar");

  menuIcon.addEventListener("click", () => {
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("active");
  });

  // Close mobile menu when clicking on a nav link
  const navLinks = document.querySelectorAll(".navbar a");
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      menuIcon.classList.remove("bx-x");
      navbar.classList.remove("active");
    });
  });

  // Typed.js - Typing Effect
  const typed = new Typed(".text", {
    strings: [
      "Data Scientist",
      "Backend Developer",
      "Python Programmer",
      "Problem Solver",
      "Java Enthusiast",
      "MERN Developer",
    ],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
  });

  // Active Nav Link on Scroll
  const sections = document.querySelectorAll("section");
  const header = document.querySelector(".header");

  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;

    sections.forEach((sec) => {
      const offset = sec.offsetTop - 150;
      const height = sec.offsetHeight;
      const id = sec.getAttribute("id");

      if (scrollY >= offset && scrollY < offset + height) {
        navLinks.forEach((link) => {
          link.classList.remove("active");
        });

        const matchingLink = document.querySelector(
          `header nav a[href*="${id}"]`
        );
        if (matchingLink) {
          matchingLink.classList.add("active");
        }

        // Trigger skill bar animations when proficiencies section is visible
        if (id === "proficiencies") {
          const progressBars = document.querySelectorAll(".progress-line");
          progressBars.forEach((bar) => {
            bar.classList.add("animate-bar");
          });

          const radialPaths = document.querySelectorAll(".path");
          radialPaths.forEach((path) => {
            path.classList.add("animate-path");
          });
        }
      }
    });

    // Sticky header
    header.classList.toggle("sticky", scrollY > 100);

    // Close mobile menu on scroll
    menuIcon.classList.remove("bx-x");
    navbar.classList.remove("active");
  });

  // ScrollReveal Animations
  ScrollReveal({
    distance: "80px",
    duration: 2000,
    delay: 200,
  });

  ScrollReveal().reveal(".home-content, .sub-title, .heading1", {
    origin: "top",
  });

  ScrollReveal().reveal(
    ".home-img, .services-list, .contact-form, .journey-column:nth-child(2)",
    {
      origin: "bottom",
    }
  );

  ScrollReveal().reveal(
    ".home-content h1, .about-text, .journey-column:nth-child(1), .technical-container",
    {
      origin: "left",
    }
  );

  ScrollReveal().reveal(
    ".home-scl, .btn-group, .contact-text, .professional-container",
    {
      origin: "right",
    }
  );

  // Add hover effect to skill cards
  const skillCards = document.querySelectorAll('.services-list div');
  
  skillCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-15px) rotate(2deg)';
      this.style.transition = 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0) rotate(0deg)';
    });
  });

  // Smooth scroll for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Add floating animation to social icons
  const socialIcons = document.querySelectorAll('.home-scl a, .contact-icons a');
  
  socialIcons.forEach((icon, index) => {
    icon.style.animation = `float 3s ease-in-out ${index * 0.2}s infinite`;
  });

  // Progress bar animation on scroll
  const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px'
  };

  const progressObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-bar');
      }
    });
  }, observerOptions);

  document.querySelectorAll('.progress-line').forEach(bar => {
    progressObserver.observe(bar);
  });
});

// Add floating animation keyframes dynamically
const style = document.createElement('style');
style.textContent = `
  @keyframes float {
    0%, 100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-10px);
    }
  }
`;
document.head.appendChild(style);