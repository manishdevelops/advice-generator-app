
const Btn=document.querySelector('.main__diceContainer');

fetch('https://api.adviceslip.com')
.then(response => {
  if(! response.ok)
    throw new Error(`advice not found(${response.status})`);
    return response.json();
});