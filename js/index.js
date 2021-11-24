import { getPhotograph } from './dataProvider';
import filterByTag from './filter';

const tags = document.querySelectorAll('.tag');
let photographs = [];
const conteneur1 = document.querySelector('.conteneur1');
let selectedTag = '';

const portrait = (data) => {
  const divPortrait = document.createElement('div');
  divPortrait.className = 'div__portrait';

  const divImage = document.createElement('div');

  const linkPhotograph = document.createElement('a');
  linkPhotograph.href = `page_photographe.html?id=${data.id}`;

  const image = document.createElement('img');
  image.src = `images/Photographers/${data.portrait}`;
  image.alt = 'Photo de profil du photographe';

  linkPhotograph.appendChild(image);
  divImage.appendChild(linkPhotograph);
  divPortrait.appendChild(divImage);

  const nom = document.createElement('div');
  nom.className = 'nom';

  const linkPhotograph2 = document.createElement('a');
  linkPhotograph2.href = `page_photographe.html?id=${data.id}`;

  const namePhotograph = document.createElement('h1');
  namePhotograph.innerText = data.name;

  linkPhotograph2.appendChild(namePhotograph);
  nom.appendChild(linkPhotograph2);
  divPortrait.appendChild(nom);

  return divPortrait;
};

const info = (data) => {
  const divInfo = document.createElement('div');
  divInfo.className = 'div__info';

  const city = document.createElement('h3');
  city.className = 'ville';
  city.innerText = `${data.city}, ${data.country}`;

  const intro = document.createElement('h3');
  intro.className = 'phrase-intro';
  intro.innerText = data.tagline;

  const price = document.createElement('h3');
  price.className = 'tarif';
  price.innerText = `${data.price}€/Jour`;

  divInfo.append(city, intro, price);

  return divInfo;
};

const hashtag = (data) => {
  const divHashtag = document.createElement('div');
  divHashtag.className = 'div__hashtags';

  const portraits = document.createElement('div');
  portraits.innerText = '#portrait';

  const events = document.createElement('div');
  events.innerText = '#events';

  const travel = document.createElement('div');
  travel.innerText = '#travel';

  const animals = document.createElement('div');
  animals.innerText = '#animals';

  // eslint-disable-next-line no-restricted-syntax
  for (const tag of data.tags) {
    const theme = document.createElement('div');
    theme.innerText = `#${tag}`;

    divHashtag.appendChild(theme);
  }

  return divHashtag;
};

// fonction div photographes
const displayPhotograph = (data) => {
  const divPhotograph = document.createElement('div');
  divPhotograph.className = 'div__photograph';

  const divPortrait = portrait(data);

  const divInfo = info(data);

  const divHashtag = hashtag(data);

  divPhotograph.append(divPortrait, divInfo, divHashtag);

  conteneur1.append(divPhotograph);
};

// display photographs for filters
const displayAllPhotograph = (allPhotograph) => {
  conteneur1.innerText = '';
  // eslint-disable-next-line no-restricted-syntax
  for (const photograph of allPhotograph) {
    displayPhotograph(photograph);
  }
};

// tags filter
const initFilter = () => {
  tags.forEach((tagElement) => {
    tagElement.addEventListener('click', (event) => {
      event.preventDefault();
      const tag = event.currentTarget.id;
      if (tag === selectedTag) {
        displayAllPhotograph(photographs);
        selectedTag = '';
      } else {
        const filterPhotograph = filterByTag(photographs, tag);
        displayAllPhotograph(filterPhotograph);
        selectedTag = tag;
      }
    });
  });
};

const getPhotographData = async () => {
  photographs = await getPhotograph();
  console.table(photographs);

  displayAllPhotograph(photographs);
};

// eslint-disable-next-line func-names
(function () {
  getPhotographData();
  initFilter();
}());
