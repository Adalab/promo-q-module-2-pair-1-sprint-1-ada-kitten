'use strict';

const kittenDesc2=  'Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle! y cariñoso';

const kittenDesc3=  'Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle! y cariñoso';

const kittenImage = 'https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg';
const kittenName = 'Anastacio';

const kittenDesc1=
  'Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!y cariñoso';
const kittenRace = 'British Shorthair';

const kittenImage2 = 'https://images.emedicinehealth.com/images/article/main_image/cat-scratch-disease.jpg';
const kittenName2 = 'Fiona';

const kittenImage3 = 'https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2019_39/3021711/190923-cat-pet-stock-cs-1052a.jpg';
const kittenName3 = 'Cielo';

const ohNo = document.querySelector('.js-new-form');
ohNo.classList.remove("colapsed");


// const kittenOne = `<li class="card">
// <article>
//   <img
//     class="card_img"
//     src="https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg"
//     alt="gatito"
//   />
//   <h3 class="card_title">Anastacio</h3>
//   <p class="card_description">
//     Ruiseño, juguetón, le guta estar tranquilo y que nadie le
//     moleste. Es una maravilla acariciarle!
//   </p>
// </article>
// </li>`;

const kittenOne = `<li class="card"> 
<article> 
<img class="card_img" src=${kittenImage} 
alt="gatito"/>
<h3 class="card_title">${kittenName.toUpperCase()}</h3>
<h4 class="card_race">${kittenRace}</h4>
<p class="card_description">${kittenDesc1}
</p>
</article>
</li>`;


// const kittenTwo = `<li class="card">
// <img
//   class="card_img"
//   src="https://images.emedicinehealth.com/images/article/main_image/cat-scratch-disease.jpg"
//   alt="gatito"
// />
// <h3 class="card_title">Fiona</h3>
// <h4 class="card_race">British Shorthair</h4>
// <p class="card_description">
//   Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste.
//   Es una maravilla acariciarle!
// </p>
// </li>`;

const kittenTwo = `<li class="card">
<img
  class="card_img"
  src=${kittenImage2}
  alt="gatito"
/>
<h3 class="card_title">${kittenName2.toUpperCase()}</h3>
<h4 class="card_race">${kittenRace}</h4>
<p class="card_description">
${kittenDesc2}
</p>
</li>`;


// const kittenThree = `<li class="card">
// <img
//   class="card_img"
//   src="https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2019_39/3021711/190923-cat-pet-stock-cs-1052a.jpg"
//   alt="gatito"
// />
// <h3 class="card_title">Cielo</h3>
// <h4 class="card_race">British Shorthair</h4>
// <p class="card_description">
//   Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste.
//   ¡Es una maravilla acariciarle!
// </p>
// </li>`;

const kittenThree = `<li class="card">
<img
  class="card_img"
  src=${kittenImage3}
  alt="gatito"
/>
<h3 class="card_title">${kittenName3.toUpperCase()}</h3>
<h4 class="card_race">${kittenRace}</h4>
<p class="card_description">
${kittenDesc3}
</p>
</li>`;


const ohYeah = document.querySelector(".js-list");
ohYeah.innerHTML = kittenOne + kittenTwo + kittenThree;


const input_search_desc = document.querySelector('.js_in_search_desc');

input_search_desc.value = 'cariñoso';

const descrSearchText = input_search_desc.value;



//if( kittenDesc1.includes(descrSearchText) ) {
 // kittenOne.classList.add("hidden");
 // }
  
//  if( kittenDesc2.includes(descrSearchText) ) {
  //Completa el código
//  }
  
 // if( kittenDesc3.includes(descrSearchText) ) {
  //Completa el código
 // }

 const buttonAdd =document.querySelector(".js-btn-add");
 const inputDesc = document.querySelector('.js-input-desc');
 const inputPhoto = document.querySelector('.js-input-photo');
 const inputName = document.querySelector('.js-input-name');
 const labelMesageError = document.querySelector('.js-label-error');

 buttonAdd.addEventListener("click", (event) => {
  event.preventDefault();
  const valueDesc = inputDesc.value;
const valuePhoto = inputPhoto.value;
const valueName = inputName.value;

if (valueDesc === '' || valuePhoto === '' || valueName === '') {
 labelMesageError.innerHTML="chica que dise";

} else {
  labelMesageError.innerHTML="ole ole los caracoles";
} })

const plus = document.querySelector(".js_plus");
const nav = document.querySelector(".js_nav");
nav.classList.add("colapsed");

function showNewCatForm() {
  nav.classList.remove('colapsed');
}

function hideNewCatForm() {
  nav.classList.add('colapsed');
}

plus.addEventListener("click", (event) => {
event.preventDefault();
if (nav.classList.contains('colapsed')) {
  showNewCatForm();
}
else {
  hideNewCatForm();
}
});


