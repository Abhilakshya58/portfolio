// Functionality for "Let's Talk" button
let letsTalk = document.querySelector(".btn2");
let home = document.querySelector(".home");
let homeContent = document.querySelector(".home-content");

letsTalk.onclick = () => {
  homeContent.style.opacity = "0.1";
  
  // Remove existing pop-up if any
  let existingPopup = document.querySelector(".new-div");
  if (existingPopup) {
    home.removeChild(existingPopup);
  }

  // Create the pop-up container
  const newDiv = document.createElement("div");
  newDiv.classList.add("new-div");
  
  // Pop-up content with close button and social links
  const newContent = `
    <div class="contain">
      <a href='https://www.instagram.com/abhilakshya_rajrah/'><i class='bx bxl-instagram'></i></a>
      <a href="https://www.linkedin.com/in/abhilakshya-rajrah-137882267/"><i class='bx bxl-linkedin'></i></a>
      <i class='bx bx-x'></i>
    </div>`;
  newDiv.innerHTML = newContent;
  
  // Append the new pop-up to the home section
  home.appendChild(newDiv);

  // Close the pop-up on clicking the close icon
  let cross = document.querySelector(".bx-x");
  cross.onclick = () => {
    homeContent.style.opacity = "1";
    home.removeChild(newDiv);
  };
};

// Navigation and Section Scrolling
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);

  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
        document.querySelector(`header nav a[href*=${id}]`).classList.add("active");
      });
      sec.classList.add("show-animate");
    }
  });

  // Remove active class from menu icon and navbar on scroll
  menuIcon.classList.remove("bx-x");
  navBar.classList.remove("active");
};

// Menu toggle functionality
let menuIcon = document.querySelector("#menu-icon");
let navBar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navBar.classList.toggle("active");
};
