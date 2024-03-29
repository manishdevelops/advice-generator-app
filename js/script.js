
const Btn=document.querySelector('.main__diceContainer');
const adviceId=document.querySelector('.main__advice-no');
const advicePara=document.querySelector('.main__adviceText');
const bodyy=document.getElementsByTagName("BODY")[0];
const main=document.querySelector('.main');
const footer=document.querySelector('.footer');
const errorContainer=document.querySelector('.renderError');

const ErrorFunc=function (msg){
  errorContainer.insertAdjacentText('beforeend',msg);
};


//promise

// const adviceFunc=function(){
//   fetch('https://api.adviceslip.com/advice')
//   .then(response => {
//     if(!response.ok)
//       throw new Error(`advice not found(${response.status})`);
//     return response.json();
//   })
//   .then(data =>{
//     // console.log(data);
//     const id=data.slip.id;
//     let adviceText=data.slip.advice;
//     advicePara.textContent=adviceText;
//     adviceId.textContent=id;
//   })
//   .catch(err =>{
//     bodyy.style.backgroundColor="white";
//     main.classList.toggle('hidden');
//     footer.classList.toggle('hidden');
//     ErrorFunc(`Something went wrong 🥲🥲🥲 (${err.message}).Try Again!`);
//   });
// }


//async/await
const adviceFunc = async function(){
  try{
    const adv = await fetch('https://api.adviceslip.com/advice');
    
    if(!adv.ok) 
      throw new error(`advice not found(${response.status})`)
  
    const advData = await adv.json();
    const id = advData.slip.id;
    const adviceText = advData.slip.advice;
    advicePara.textContent = adviceText;
    adviceId.textContent = id;
  }catch(error){
    bodyy.style.backgroundColor = "white";
    main.classList.toggle('hidden');
    footer.classList.toggle('hidden');
    ErrorFunc(`Something went wrong 🥲🥲🥲 (${error.message}).Try Again!`);
  }
 
}

Btn.addEventListener('click', adviceFunc);
window.addEventListener('load', adviceFunc);