const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-links li a');

// Toggle mobile menu and update aria state
if (menuBtn && navLinks) {
  menuBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    navLinks.classList.toggle('active');
    const expanded = navLinks.classList.contains('active');
    menuBtn.setAttribute('aria-expanded', String(expanded));
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!navLinks.classList.contains('active')) return;
    const clickInsideNav = e.target.closest('.nav-links') || e.target.closest('.menu-btn');
    if (!clickInsideNav) {
      navLinks.classList.remove('active');
      menuBtn.setAttribute('aria-expanded', 'false');
    }
  });
}

navItems.forEach(link => {
  link.addEventListener('click', () => {
    navLinks?.classList.remove('active');
    menuBtn?.setAttribute('aria-expanded', 'false');
  });
});

const sections = document.querySelectorAll('section');
const options = { threshold: 0.3 };

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    const id = entry.target.id;
    const menuLink = document.querySelector(`.nav-links a[href=\"#${id}\"]`);
    if (entry.isIntersecting) {
      navItems.forEach(item => item.classList.remove('active'));
      menuLink?.classList.add('active');
    }
  });
}, options);

sections.forEach(section => observer.observe(section));


// Education Hover Animation

const educationBoxes = document.querySelectorAll(".education-box");

educationBoxes.forEach((box)=>{

    box.addEventListener("mouseenter",()=>{

        box.style.transform="translateY(-10px)";

    });

    box.addEventListener("mouseleave",()=>{

        box.style.transform="translateY(0)";

    });

});

// ================= CONTACT FORM =================

const form = document.getElementById("contact-form");

form.addEventListener("submit", function(e){

    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if(name === "" || email === "" || message === ""){

        alert("Please fill all fields.");

    }else{

        alert("Message Sent Successfully!");

        form.reset();

    }

});
