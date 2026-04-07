/* =============================================
   PORTFOLIO — Leonardo Silva
   script.js
   ============================================= */

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('on');
      }
    });
  },
  { threshold: 0.12 }
);

const revealEls = document.querySelectorAll('.reveal');

revealEls.forEach((el, index) => {
  // Stagger delay per row of 6 items
  el.style.transitionDelay = (index % 6) * 0.07 + 's';
  revealObserver.observe(el);
});
