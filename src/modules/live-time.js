const hours = document.querySelector('.hours');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');

const updateTime = () => {
  const now = new Date();
  hours.textContent = now.getHours().toString().padStart(2, '0');
  minutes.textContent = now.getMinutes().toString().padStart(2, '0');
  seconds.textContent = now.getSeconds().toString().padStart(2, '0');
}

updateTime();
setInterval(updateTime, 1000);

export { updateTime };