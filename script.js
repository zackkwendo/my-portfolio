document.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add("fade-in");
});

console.log("JavaScript is working!");
let text = "Hello, I'm Kwendo Mboya";
let index = 0;

function typeEffect() {
    let typing = document.getElementById("typing");

    if (index < text.length) {
        typing.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 100);
    }
}

typeEffect();
let toTop = document.getElementById("toTop");

window.onscroll = () => {
    if (window.scrollY > 300) {
        toTop.style.display = "block";
    } else {
        toTop.style.display = "none";
    }
};

toTop.onclick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
};
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.classList.add("shrink");
    } else {
        header.classList.remove("shrink");
    }
});
const toggle = document.getElementById("themeToggle");
const body = document.body;

// Load theme from memory
if (localStorage.getItem("theme") === "light") {
    body.classList.add("light-mode");
    toggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
}

// Toggle button
toggle.addEventListener("click", () => {
    body.classList.toggle("light-mode");

    if (body.classList.contains("light-mode")) {
        toggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
        localStorage.setItem("theme", "light");
    } else {
        toggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
        localStorage.setItem("theme", "dark");
    }
});
let slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[index].classList.add("active");
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("loader").style.opacity = "0";
    setTimeout(() => {
        document.getElementById("loader").style.display = "none";
    }, 500);
});

document.querySelector(".prev").addEventListener("click", () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
});
setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}, 4000);
document.querySelectorAll(".page-link").forEach(link => {
    link.addEventListener("click", () => {
        document.body.style.opacity = "0";
    });
});
