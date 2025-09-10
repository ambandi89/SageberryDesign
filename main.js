const hamMenu = document.querySelector(".ham-menu");

const offScreenMenu = document.querySelector(".off-screen-menu");

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
});

//gsap
let tl = gsap.timeline ({
  scrollTrigger: {
    trigger: '.animated-element-left',
    start: '35% 80%',
    end: 'bottom 20%',
    scrub: false,
    markers: false,
  },

   scrollTrigger: {
    trigger: '.animated-element-right',
    start: '35% 80%',
    end: 'bottom 20%',
    scrub: false,
    markers: false,
  }
})

tl.to('.animated-element-left', {
  x: 500,
  duration: 0.5,
})


tl.from('.animated-element-right', {
  x: 1500,
  duration: 0.5,
})


//smooth scroll
// Initialize Lenis
const lenis = new Lenis();

// Use requestAnimationFrame to continuously update the scroll
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);