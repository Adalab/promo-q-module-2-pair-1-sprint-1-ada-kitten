'use strict';

const kittenImage = 'https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg';
const kittenName = 'Anastacio';

const kittenDesc =
  'Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!';
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
<p class="card_description">${kittenDesc}
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
${kittenDesc}
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
${kittenDesc}
</p>
</li>`;


const ohYeah = document.querySelector(".js-list");
ohYeah.innerHTML = kittenOne + kittenTwo + kittenThree;


// hello, what's going on