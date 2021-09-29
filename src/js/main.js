/* Your JS here. */

// Carousel
let slideNum = 1;
showSlides(slideNum);

function forwardSlides(n) {
    showSlides(slideNum += n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    if (n > slides.length) {
        slideNum = 1
    }
    if (n < 1) {
        slideNum = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideNum - 1].style.display = "block";
}

// Sticky Navbar & Navbar Resizing
window.onscroll = function () {
    myFunction()
};

let navbar = document.getElementById("navbar");

let navbarPos = navbar.offsetTop;

function myFunction() {
    if (window.pageYOffset > navbarPos) {
        navbar.classList.add("sticky");
        navbar.style.padding = "10px 5%";
        navbar.style.fontSize = "16px";
    } else {
        navbar.classList.remove("sticky");
        navbar.style.padding = "35px 10%";
        navbar.style.fontSize = "20px";
    }
}


// Modal window
let modalBtns = document.querySelectorAll(".portfolio-item");
let closeBtn = document.querySelectorAll(".close-btn");

modalBtns.forEach(function (btn) {
        btn.onclick = function () {
            let modal = btn.getAttribute("aria-controls");
            document.getElementById(modal).style.display = "block";
        }
    }
)

// Close the modal window by clicking close button
closeBtn.forEach(function (btn) {
        btn.onclick = function () {
            let modal = btn.closest(".modal");
            modal.style.display = "none";
        }
    }
)

// Close the modal window by clicking outside
window.onclick = function (e) {
    if (e.target.classList.contains("modal")) {
        e.target.style.display = "none";
    }
}


// Position indicator
const sections = document.querySelectorAll('section');
const menus = document.querySelectorAll('#navbar ul li');

window.addEventListener('scroll', () => {
    let curr = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - sectionHeight / 3)
            || pageYOffset === document.body.clientHeight - window.innerHeight) {
            curr = section.getAttribute('id');
        }
    });

    menus.forEach(li => {
        li.classList.remove('active');
        if (li.classList.contains(curr)) {
            li.classList.add('active');
        }
    });
});





