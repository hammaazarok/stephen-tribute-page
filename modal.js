const modal = document.querySelector('.modal');
const trigger = document.querySelectorAll('.work-btn');
const closeButton = document.querySelector('.close-button');

function Toggle() {
  modal.classList.toggle('show-modal');
}

function winOnClick(event) {
  if (event.target === modal) {
    Toggle();
  }
}

trigger.forEach((element) => {
  elemet.addEventListener('click', Toggle);
});

closeButton.addEventListener('click', Toggle);
window.addEventListener('click', winOnClick);