const menuToggle = document.querySelector('#menuToggle input');
const overlay = document.querySelector('.overlay');

menuToggle.addEventListener('change', () => {
  if (menuToggle.checked) {
    overlay.style.display = 'block';
  } else {
    overlay.style.display = 'none';
  }
});
