const dropdownGAction = document.getElementById("action");
const dropdownGRomantic = document.getElementById("filmRomantici");
const dropdownGCommedie = document.getElementById("commedie");
const dropdownGLabel = document.getElementById("dropdownLabel");
const changeLabel = () => {
  dropdownGAction.addEventListener("click", () => {
    dropdownGLabel.innerText = "Azione";
  });
  dropdownGRomantic.addEventListener("click", () => {
    dropdownGLabel.innerText = "Film Romantici";
  });
  dropdownGCommedie.addEventListener("click", () => {
    dropdownGLabel.innerText = "Commedie";
  });
};
changeLabel();
const carouselBtn = document.getElementById("carouselBtn");
const squareBtn = document.getElementById("squareBtn");
const carousel = document.querySelectorAll(".carousel");
const square = document.querySelectorAll(".square");

const changeImput = () => {
  carouselBtn.addEventListener("click", () => {
    for (let i = 0; i < carousel.length; i++) {
      carousel[i].classList.add("d-block");
      carousel[i].classList.remove("d-none");
    }
    for (let i = 0; i < square.length; i++) {
      square[i].classList.add("d-none");
      square[i].classList.remove("d-block");
    }
  });
  squareBtn.addEventListener("click", () => {
    for (let i = 0; i < carousel.length; i++) {
      carousel[i].classList.add("d-none");
      carousel[i].classList.remove("d-block");
    }
    for (let i = 0; i < square.length; i++) {
      square[i].classList.add("d-block");
      square[i].classList.remove("d-none");
    }
  });
};
changeImput();
// const changeImg = document.getElementsByClassName("changeCat");
// const changeImgCarosel = ()=>{

//     dropdownGAction.addEventListener('click', ()=>{
// for(let i=0; i<changeImg.length;i++){
//     changeImg[i].attributes
// }
//     })
// }
//  volevo cambiare le immagini a seconda della categoria, ma non mi riesce. Non so perché non mi esce la proprietà src
