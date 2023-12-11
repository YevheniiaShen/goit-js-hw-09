function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

const startBtn = document.querySelector('#start-btn');
const stopBtn = document.querySelector('#stop-btn');
let interval;

startBtn.addEventListener('click', () => {

  startBtn.disabled = true;
  stopBtn.disabled = false;


  interval = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
});

stopBtn.addEventListener('click', () => {

  startBtn.disabled = false;
  stopBtn.disabled = true; 


  clearInterval(interval);
});