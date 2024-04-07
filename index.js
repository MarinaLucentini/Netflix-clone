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
const changeImg = document.getElementsByClassName("changeCat");
console.log(changeImg);
const changeImgCarosel = () => {
  dropdownGAction.addEventListener("click", () => {
    for (let i = 0; i < changeImg.length; i++) {
      changeImg[0].src = "Netflix-assets/assets/media/media4.jpg";
      changeImg[1].src = "Netflix-assets/assets/media/media32.jpg";
      changeImg[2].src = "Netflix-assets/assets/media/media31.webp";
      changeImg[3].src = "Netflix-assets/assets/media/media30.jpg";
      changeImg[4].src = "Netflix-assets/assets/media/media3.webp";
      changeImg[5].src = "Netflix-assets/assets/media/media29.jpg";
      changeImg[6].src = "Netflix-assets/assets/media/media4.jpg";
      changeImg[7].src = "Netflix-assets/assets/media/media32.jpg";
      changeImg[8].src = "Netflix-assets/assets/media/media31.webp";
      changeImg[9].src = "Netflix-assets/assets/media/media30.jpg";
      changeImg[10].src = "Netflix-assets/assets/media/media3.webp";
      changeImg[11].src = "Netflix-assets/assets/media/media29.jpg";
      changeImg[12].src = "Netflix-assets/assets/media/media4.jpg";
      changeImg[13].src = "Netflix-assets/assets/media/media32.jpg";
      changeImg[14].src = "Netflix-assets/assets/media/media31.webp";
      changeImg[15].src = "Netflix-assets/assets/media/media30.jpg";
      changeImg[16].src = "Netflix-assets/assets/media/media3.webp";
      changeImg[17].src = "Netflix-assets/assets/media/media29.jpg";
      changeImg[18].src = "Netflix-assets/assets/media/media4.jpg";
      changeImg[19].src = "Netflix-assets/assets/media/media32.jpg";
      changeImg[20].src = "Netflix-assets/assets/media/media31.webp";
      changeImg[21].src = "Netflix-assets/assets/media/media30.jpg";
      changeImg[22].src = "Netflix-assets/assets/media/media3.webp";
      changeImg[23].src = "Netflix-assets/assets/media/media29.jpg";
      changeImg[24].src = "Netflix-assets/assets/media/media4.jpg";
      changeImg[25].src = "Netflix-assets/assets/media/media32.jpg";
      changeImg[26].src = "Netflix-assets/assets/media/media31.webp";
      changeImg[27].src = "Netflix-assets/assets/media/media30.jpg";
      changeImg[28].src = "Netflix-assets/assets/media/media3.webp";
      changeImg[29].src = "Netflix-assets/assets/media/media29.jpg";
      changeImg[30].src = "Netflix-assets/assets/media/media4.jpg";
      changeImg[31].src = "Netflix-assets/assets/media/media32.jpg";
      changeImg[32].src = "Netflix-assets/assets/media/media31.webp";
      changeImg[33].src = "Netflix-assets/assets/media/media30.jpg";
      changeImg[34].src = "Netflix-assets/assets/media/media3.webp";
      changeImg[35].src = "Netflix-assets/assets/media/media29.jpg";
    }
  });
  dropdownGCommedie.addEventListener("click", () => {
    for (let i = 0; i < changeImg.length; i++) {
      changeImg[0].src = "Netflix-assets/assets/media/media28.jpg";
      changeImg[1].src = "Netflix-assets/assets/media/media27.jpg";
      changeImg[2].src = "Netflix-assets/assets/media/media26.webp";
      changeImg[3].src = "Netflix-assets/assets/media/media25.webp";
      changeImg[4].src = "Netflix-assets/assets/media/media24.jpg";
      changeImg[5].src = "Netflix-assets/assets/media/media23.webp";
      changeImg[6].src = "Netflix-assets/assets/media/media28.jpg";
      changeImg[7].src = "Netflix-assets/assets/media/media27.jpg";
      changeImg[8].src = "Netflix-assets/assets/media/media26.webp";
      changeImg[9].src = "Netflix-assets/assets/media/media25.webp";
      changeImg[10].src = "Netflix-assets/assets/media/media24.jpg";
      changeImg[11].src = "Netflix-assets/assets/media/media23.webp";
      changeImg[12].src = "Netflix-assets/assets/media/media28.jpg";
      changeImg[13].src = "Netflix-assets/assets/media/media27.jpg";
      changeImg[14].src = "Netflix-assets/assets/media/media26.webp";
      changeImg[15].src = "Netflix-assets/assets/media/media25.webp";
      changeImg[16].src = "Netflix-assets/assets/media/media24.jpg";
      changeImg[17].src = "Netflix-assets/assets/media/media23.webp";
      changeImg[18].src = "Netflix-assets/assets/media/media28.jpg";
      changeImg[19].src = "Netflix-assets/assets/media/media27.jpg";
      changeImg[20].src = "Netflix-assets/assets/media/media26.webp";
      changeImg[21].src = "Netflix-assets/assets/media/media25.webp";
      changeImg[22].src = "Netflix-assets/assets/media/media24.jpg";
      changeImg[23].src = "Netflix-assets/assets/media/media23.webp";
      changeImg[24].src = "Netflix-assets/assets/media/media28.jpg";
      changeImg[25].src = "Netflix-assets/assets/media/media27.jpg";
      changeImg[26].src = "Netflix-assets/assets/media/media26.webp";
      changeImg[27].src = "Netflix-assets/assets/media/media25.webp";
      changeImg[28].src = "Netflix-assets/assets/media/media24.jpg";
      changeImg[29].src = "Netflix-assets/assets/media/media23.webp";
      changeImg[30].src = "Netflix-assets/assets/media/media28.jpg";
      changeImg[31].src = "Netflix-assets/assets/media/media27.jpg";
      changeImg[32].src = "Netflix-assets/assets/media/media26.webp";
      changeImg[33].src = "Netflix-assets/assets/media/media25.webp";
      changeImg[34].src = "Netflix-assets/assets/media/media24.jpg";
      changeImg[35].src = "Netflix-assets/assets/media/media23.webp";
      changeImg[36].src = "Netflix-assets/assets/media/media28.jpg";
    }
  });
  dropdownGRomantic.addEventListener("click", () => {
    for (let i = 0; i < changeImg.length; i++) {
      changeImg[0].src = "Netflix-assets/assets/media/media20.jpg";
      changeImg[1].src = "Netflix-assets/assets/media/media21.webp";
      changeImg[2].src = "Netflix-assets/assets/media/media22.webp";
      changeImg[3].src = "Netflix-assets/assets/media/media2.webp";
      changeImg[4].src = "Netflix-assets/assets/media/media15.jpg";
      changeImg[5].src = "Netflix-assets/assets/media/media16.webp";
      changeImg[6].src = "Netflix-assets/assets/media/media20.jpg";
      changeImg[7].src = "Netflix-assets/assets/media/media21.webp";
      changeImg[8].src = "Netflix-assets/assets/media/media22.webp";
      changeImg[9].src = "Netflix-assets/assets/media/media2.webp";
      changeImg[10].src = "Netflix-assets/assets/media/media15.jpg";
      changeImg[11].src = "Netflix-assets/assets/media/media16.webp";
      changeImg[12].src = "Netflix-assets/assets/media/media20.jpg";
      changeImg[13].src = "Netflix-assets/assets/media/media21.webp";
      changeImg[14].src = "Netflix-assets/assets/media/media22.webp";
      changeImg[15].src = "Netflix-assets/assets/media/media2.webp";
      changeImg[16].src = "Netflix-assets/assets/media/media15.jpg";
      changeImg[17].src = "Netflix-assets/assets/media/media16.webp";
      changeImg[18].src = "Netflix-assets/assets/media/media20.jpg";
      changeImg[19].src = "Netflix-assets/assets/media/media21.webp";
      changeImg[20].src = "Netflix-assets/assets/media/media22.webp";
      changeImg[21].src = "Netflix-assets/assets/media/media2.webp";
      changeImg[22].src = "Netflix-assets/assets/media/media15.jpg";
      changeImg[23].src = "Netflix-assets/assets/media/media16.webp";
      changeImg[24].src = "Netflix-assets/assets/media/media20.jpg";
      changeImg[25].src = "Netflix-assets/assets/media/media21.webp";
      changeImg[26].src = "Netflix-assets/assets/media/media22.webp";
      changeImg[27].src = "Netflix-assets/assets/media/media2.webp";
      changeImg[28].src = "Netflix-assets/assets/media/media15.jpg";
      changeImg[29].src = "Netflix-assets/assets/media/media16.webp";
      changeImg[30].src = "Netflix-assets/assets/media/media20.jpg";
      changeImg[31].src = "Netflix-assets/assets/media/media21.webp";
      changeImg[32].src = "Netflix-assets/assets/media/media22.webp";
      changeImg[33].src = "Netflix-assets/assets/media/media2.webp";
      changeImg[34].src = "Netflix-assets/assets/media/media15.jpg";
      changeImg[35].src = "Netflix-assets/assets/media/media16.webp";
      changeImg[36].src = "Netflix-assets/assets/media/media16.webp";
    }
  });
};
changeImgCarosel();
//  volevo cambiare le immagini a seconda della categoria, ma non mi riesce. Le cambia, ma mi si rompe il carosello
