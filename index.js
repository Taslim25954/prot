const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".navbar");

hamburger.addEventListener("click", () => {
  navbar.classList.toggle("open");
});

 const texts = [
    " i am' Web Developer 💻",
    " i am' UI/UX Designer 🎨",
    " i am' JavaScript Enthusiast ⚡",
    " i am' Creative Thinker 💡",
    " i am' Freelancer 🌍"
  ];

  let index = 0;
  let charIndex = 0;
  const typingEl = document.getElementById("typing");
  let deleting = false;

  function typeEffect() {
    const current = texts[index];
    
    if (!deleting) {
      typingEl.textContent = current.slice(0, ++charIndex);
      if (charIndex === current.length) {
        deleting = true;
        setTimeout(typeEffect, 1200);
        return;
      }
    } else {
      typingEl.textContent = current.slice(0, --charIndex);
      if (charIndex === 0) {
        deleting = false;
        index = (index + 1) % texts.length;
      }
    }
    setTimeout(typeEffect, deleting ? 60 : 100);
  }

  typeEffect();



  // navbar filter acive

  const filterButtons = document.querySelectorAll(".filter-btn");
const items = document.querySelectorAll(".item");

filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {

    document.querySelector(".active")?.classList.remove("active");
    btn.classList.add("active");

    const filter = btn.getAttribute("data-filter");

    items.forEach(item => {
      if (filter === "all") {
        item.classList.remove("hide");
      } else {
        item.classList.toggle("hide", !item.classList.contains(filter));
      }
    });
  });
});

// custome say whay you say 

const cards = document.querySelectorAll(".testi-card");
const dots = document.querySelectorAll(".dot");

let indexs = 0;

// Slide show function
function show(i) {
    cards.forEach(c => c.classList.remove("active"));
    dots.forEach(d => d.classList.remove("active"));

    cards[i].classList.add("active");
    dots[i].classList.add("active");
}

// Dot click
dots.forEach((dot, i) => {
    dot.addEventListener("click", () => show(i));
});

// Auto slide
setInterval(() => {
    index = (index + 1) % cards.length;
    show(index);
}, 4000);
