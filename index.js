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
// const changeImg = document.getElementsByClassName("changeCat");
// const changeImgCarosel = ()=>{

//     dropdownGAction.addEventListener('click', ()=>{
// for(let i=0; i<changeImg.length;i++){
//     changeImg[i].attributes
// }
//     })
// }
//  volevo cambiare le immagini a seconda della categoria, ma non mi riesce. Non so perché non mi esce la proprietà src
