// Countdown
function updateCountdown() {
  const weddingDate = new Date("2025-12-25T11:00:00").getTime();
  const now = new Date().getTime();
  const distance = weddingDate - now;

  if (distance < 0) {
    document.getElementById("timer").innerHTML = "We are married!";
    return;
  }

  const days = Math.floor(distance / (1000*60*60*24));
  const hours = Math.floor((distance % (1000*60*60*24))/(1000*60*60));
  const minutes = Math.floor((distance % (1000*60*60))/(1000*60));
  const seconds = Math.floor((distance % (1000*60))/1000);

  document.getElementById("timer").innerHTML =
    `${days}d ${hours}h ${minutes}m ${seconds}s`;
}
setInterval(updateCountdown, 1000);
updateCountdown();

// Fade-in on scroll
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
  threshold: 0.2
};

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('show');
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});
