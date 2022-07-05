'use strict';

const kittenDesc2 =
  'Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle! y cariñoso';

const kittenDesc3 =
  'Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle! y cariñoso';

const kittenImage = 'https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg';
const kittenName = 'Anastacio';

const kittenDesc1 =
  'Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!y cariñoso';
const kittenRace = 'British Shorthair';

const kittenImage2 =
  'https://images.emedicinehealth.com/images/article/main_image/cat-scratch-disease.jpg';
const kittenName2 = 'Fiona';

const kittenImage3 =
  'https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2019_39/3021711/190923-cat-pet-stock-cs-1052a.jpg';
const kittenName3 = 'Cielo';

const ohNo = document.querySelector('.js-new-form');
ohNo.classList.remove('colapsed');

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

const ohYeah = document.querySelector('.js-list');
// ohYeah.innerHTML = kittenOne + kittenTwo + kittenThree;

const input_search_desc = document.querySelector('.js_in_search_desc');

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

const buttonAdd = document.querySelector('.js-btn-add');
const inputDesc = document.querySelector('.js-input-desc');
const inputPhoto = document.querySelector('.js-input-photo');
const inputName = document.querySelector('.js-input-name');
const labelMesageError = document.querySelector('.js-label-error');

// function renderKitten(url, desc, name, race) {

//  return `<li class="card">
//  <img
//    class="card_img"
//    src=${url}
//    alt="gatito"
//  />
//  <h3 class="card_title">${name.toUpperCase()}</h3>
//  <h4 class="card_race">${race}</h4>
//  <p class="card_description">
//  ${desc}
//  </p>
//  </li>`;
// }
// console.log(renderKitten("f","g","g","g"));

// const kittenData_1 = {
//   image: 'https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg',
//   name: 'Anastacio',
//   desc: 'Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!',
//   race: 'British Shorthair',
// };

// ohYeah.innerHTML = renderKitten(kittenData_1);
// ohYeah.innerHTML += renderKitten(kittenData_2);
// ohYeah.innerHTML += renderKitten(kittenData_3);
// ohYeah.innerHTML += renderKitten(kittenData_4);

buttonAdd.addEventListener('click', addNewKitten);

function addNewKitten(event) {
  event.preventDefault();

  const valueDesc = inputDesc.value;
  const valuePhoto = inputPhoto.value;
  const valueName = inputName.value;

  if (valueDesc === '' || valuePhoto === '' || valueName === '') {
    labelMesageError.innerHTML = 'chica que dise';
  } else {
    labelMesageError.innerHTML = 'ole ole los caracoles';
  }
}

const plus = document.querySelector('.js_plus');
const nav = document.querySelector('.js_nav');
nav.classList.add('colapsed');

function showNewCatForm() {
  nav.classList.remove('colapsed');
}

function hideNewCatForm() {
  nav.classList.add('colapsed');
}

plus.addEventListener('click', (event) => {
  event.preventDefault();
  if (nav.classList.contains('colapsed')) {
    showNewCatForm();
  } else {
    hideNewCatForm();
  }
});

const inputRace = document.querySelector('.js-input-race');

const cancelNewKitten = (event) => {
  event.preventDefault();
  const nav = document.querySelector('.js_nav');
  nav.classList.add('colapsed');

  inputDesc.value = '';
  inputName.value = '';
  inputPhoto.value = '';
  inputRace.value = '';
};

const buttonCancelForm = document.querySelector('.js-btn-cancel');
buttonCancelForm.addEventListener('click', cancelNewKitten);

// Objeto con la información del segundo gatito
/* 
const kittenData_2 = {  image: 'https://images.emedicinehealth.com/images/article/main_image/cat-scratch-disease.jpg',
name: 'Fiona',
desc: 'Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!',
race: 'British Shorthair',
  ... 
};*/

// Objeto con la información del tercer gatito
// const kittenData_3 =  {  image: 'https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2019_39/3021711/190923-cat-pet-stock-cs-1052a.jpg',
// name: 'Cielo',
// desc: 'Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!',
// race: 'British Shorthair',
/* ... */
// };

// const buttonSearch = document.querySelector('.js-button-search');
// buttonSearch.addEventListener('click', filterKitten);

// const filterKitten = (event) => {
//   console.log('Socorro soy un pez');
//   if (kittenDesc1.includes(descrSearchText)) {
//     listElement.innerHTML = renderKitten(kittenData_1);
//   }
//   if (kittenDesc2.includes(descrSearchText)) {
//     listElement.innerHTML = renderKitten(kittenData_2);
//   }
//   if (kittenDesc3.includes(descrSearchText)) {
//     listElement.innerHTML = renderKitten(kittenData_3);
//   }
// };

// Objeto con la información del primer gatito
// const kittenDatas_1 = {
//   image: 'https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg',
//   name: 'Anastacio',
//   desc: 'Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!',
//   race: 'British Shorthair',
// };

// const kittenData_2 = {
//   image:
//     'https://images.emedicinehealth.com/images/article/main_image/cat-scratch-disease.jpg',
//   name: 'Fiona',
//   desc: 'Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!',
//   race: 'British Shorthair',
// };

// const kittenData_3 = {
//   image:
//     'https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2019_39/3021711/190923-cat-pet-stock-cs-1052a.jpg',
//   name: 'Cielo',
//   desc: 'Lalala, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!',
//   race: 'British Shorthair',
// };

// const kittenData_4 = {
//   image:
//     'https://imagenes.elpais.com/resizer/m7Nr2xlpf9b2_RceuCFJwWdF1iQ=/1200x0/arc-anglerfish-eu-central-1-prod-prisa.s3.amazonaws.com/public/UQAPXGM3DF4SUVUFBT5VERJ25A.jpg',
//   name: 'Doraemon',
//   desc: 'Vivan las comillas',
//   race: 'Gato cósmico',
// };

// Lista con la información de todos los gatitos

// const kittenDataList = [kittenDatas_1 = {
//   image:
//     'https://imagenes.elpais.com/resizer/m7Nr2xlpf9b2_RceuCFJwWdF1iQ=/1200x0/arc-anglerfish-eu-central-1-prod-prisa.s3.amazonaws.com/public/UQAPXGM3DF4SUVUFBT5VERJ25A.jpg',
//   name: 'Doraemon',
//   desc: 'Vivan las comillas',
//   race: 'Gato cósmico',
// },
// kittenData_2 = {
//   image:
//     'https://imagenes.elpais.com/resizer/m7Nr2xlpf9b2_RceuCFJwWdF1iQ=/1200x0/arc-anglerfish-eu-central-1-prod-prisa.s3.amazonaws.com/public/UQAPXGM3DF4SUVUFBT5VERJ25A.jpg',
//   name: 'Doraemon',
//   desc: 'Vivan las comillas',
//   race: 'Gato cósmico',
// },
// kittenData_3 = {
//   image:
//     'https://imagenes.elpais.com/resizer/m7Nr2xlpf9b2_RceuCFJwWdF1iQ=/1200x0/arc-anglerfish-eu-central-1-prod-prisa.s3.amazonaws.com/public/UQAPXGM3DF4SUVUFBT5VERJ25A.jpg',
//   name: 'Doraemon',
//   desc: 'Vivan las comillas',
//   race: 'Gato cósmico',
// },
// kittenData_4 = {
//   image:
//     'https://imagenes.elpais.com/resizer/m7Nr2xlpf9b2_RceuCFJwWdF1iQ=/1200x0/arc-anglerfish-eu-central-1-prod-prisa.s3.amazonaws.com/public/UQAPXGM3DF4SUVUFBT5VERJ25A.jpg',
//   name: 'Doraemon',
//   desc: 'Vivan las comillas',
//   race: 'Gato cósmico',
// },
// ];


let kittenData_4 = {
  image:
    'https://imagenes.elpais.com/resizer/m7Nr2xlpf9b2_RceuCFJwWdF1iQ=/1200x0/arc-anglerfish-eu-central-1-prod-prisa.s3.amazonaws.com/public/UQAPXGM3DF4SUVUFBT5VERJ25A.jpg',
  name: 'Doraemon',
  desc: 'Vivan las comillas',
  race: 'Gato cósmico',
}

let kittenData_1 = {
  image:
    'https://imagenes.elpais.com/resizer/m7Nr2xlpf9b2_RceuCFJwWdF1iQ=/1200x0/arc-anglerfish-eu-central-1-prod-prisa.s3.amazonaws.com/public/UQAPXGM3DF4SUVUFBT5VERJ25A.jpg',
  name: 'Doraemon',
  desc: 'Vivan las comillas',
  race: 'Gato cósmico',
}

const kittenDataList = [kittenData_1, kittenData_4
];

function renderKitten(kittenData) {
  return `<li class="card">
      <img
        class="card_img"
        src=${kittenData.image}
        alt="gatito"
      />
      <h3 class="card_title">${kittenData.name}</h3>
      <h4 class="card_race">${kittenData.race}</h4>
      <p class="card_description">
      ${kittenData.desc}
      </p>
      </li>`;
}

function renderKittenList(kittenDataList) {
  //Iteramos sobre el listado de gatitos
  console.log('Juju');

  for (const kitten of kittenDataList) {
    ohYeah.innerHTML += renderKitten(kitten);
  }

  //Y por cada iteración pintamos un gatito.
  //utilizando la función renderKitten(kittenItem)
}

renderKittenList(kittenDataList);


