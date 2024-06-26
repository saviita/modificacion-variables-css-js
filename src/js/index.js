// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';

//rootStyles.setProperty('--primary-color', 'green');

/* const inputColorElement = document.getElementById('input-color')
inputColorElement.addEventListener('input', event => {
    rootStyles.setProperty('--primary-color', event.target.value)
}) */

const rootStyles = document.documentElement.style;
const sizeElement = document.getElementById('size');
const rgbElement = document.getElementById('rgb');
const hexElement = document.getElementById('hex');

const getScroll = event => {
  //innerHeight es el alto del viewport que se ve
  //hay que quitarle a todo el scroll la parte que ya se ve para que pueda llegar al 100%
  const size = (window.scrollY * 100) / (document.body.scrollHeight - window.innerHeight);
  rootStyles.setProperty('--box-size', size + '%');
  sizeElement.textContent = window.scrollY;
};
window.addEventListener('scroll', getScroll);

const getRgb = event => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  const color = `rgb(${red}, ${green}, ${blue})`;
  rootStyles.setProperty('--random-color', color);
};
rgbElement.addEventListener('click', getRgb);

const getHex = event => {
  const hexaColor = '0123456789abcdef';
  let color = '#';
  for (let index = 0; index < 6; index++) {
    const randomNumber = Math.floor(Math.random() * hexaColor.length);
    color += hexaColor.charAt(randomNumber);
  }
  rootStyles.setProperty('--random-color', color);
  console.log(color);
};
hexElement.addEventListener('click', getHex);

const mouse = event => {
  const top = event.y;
  const left = event.x;
  rootStyles.setProperty('--top', top + 'px');
  rootStyles.setProperty('--left', left + 'px');
  console.log(event);
};
window.addEventListener('mousemove', mouse);
