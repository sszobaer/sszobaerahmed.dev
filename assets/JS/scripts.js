// Preloader
window.addEventListener("load", function () {
    const preloader = document.getElementById("preloader");
    preloader.style.display = "none";
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Sticky Navigation Bar
window.onscroll = function() {stickyNav()};

const navbar = document.querySelector(".menuArea");
const sticky = navbar.offsetTop;

function stickyNav() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
}

// Form Validation
document.querySelector("form").addEventListener("submit", function(event) {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (name === "" || email === "" || message === "") {
        alert("All fields are required.");
        event.preventDefault();
    } else if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        event.preventDefault();
    }
});

// Image Carousel
let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.querySelectorAll(".mySlides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}

// Mobile Navigation Toggle
document.querySelector(".menuBtn").addEventListener("click", function() {
    const menu = document.querySelector(".menu");
    menu.classList.toggle("active");
});

// Scroll to Top Button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    const scrollToTopButton = document.getElementById("scrollToTopButton");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopButton.style.display = "block";
    } else {
        scrollToTopButton.style.display = "none";
    }
}

document.getElementById("scrollToTopButton").addEventListener("click", function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

// Show and hide menu links based on window size
document.querySelector('.menuBtn').addEventListener('click', function () {
    const menuLinks = document.querySelector('.menuLinks');
    const hamburgerBars = document.querySelector('.hamburgerBars');
    menuLinks.classList.toggle('showMenu');
    hamburgerBars.classList.toggle('showMenu');
});

document.querySelectorAll('.menuLinks a').forEach(function (link) {
    link.addEventListener('click', function () {
        if (window.innerWidth < 992) {
            const menuLinks = document.querySelector('.menuLinks');
            const hamburgerBars = document.querySelector('.hamburgerBars');
            menuLinks.classList.remove('showMenu');
            hamburgerBars.classList.remove('showMenu');
        }
    });
});

window.addEventListener('resize', function () {
    const menuLinks = document.querySelector('.menuLinks');
    const hamburgerBars = document.querySelector('.hamburgerBars');
    if (window.innerWidth >= 992) {
        menuLinks.classList.remove('showMenu');
        hamburgerBars.classList.remove('showMenu');
    }
});

//Menu Btn
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const menuItems = document.querySelectorAll('.menu li a');

    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            menuToggle.checked = false;
        });
    });
});

//FAQ sec
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('faqToggle');
    const menuItems = document.querySelectorAll('.faq_question input');

    menuItems.forEach(item => {
        if(menuToggle.checked == 1){
                item.addEventListener('click', function() {
                    menuToggle.checked = true;
                });
            }
            else if(menuToggle.checked == 0){
                item.addEventListener('click', function() {
                    menuToggle.checked = true;
                });
            }
        
        
    });
});
