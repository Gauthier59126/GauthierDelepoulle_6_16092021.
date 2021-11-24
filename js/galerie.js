import { getMediaByPhotographer } from './dataProvider';
import MediaFactory from './mediaFactory';

let photograph = null;
let medias = [];
let likes = 0;

const fetchLikes = (likesCount) => {
  const likeToFetch = likesCount || likes;

  const divTotalLikes = document.querySelector('.total-likes');
  divTotalLikes.innerText = likeToFetch;
};

const addLike = () => {
  likes += 1;
  fetchLikes();
};

const displayGalerie = (mediasArray) => {
  console.log(mediasArray);
  const galerie = document.querySelector('.galerie');

  galerie.innerText = '';

  // eslint-disable-next-line no-restricted-syntax
  for (const media of mediasArray) {
    const mediaType = media.image == null ? 'video' : 'image';
    media.photograph = photograph;
    const divVideoPost = new MediaFactory(mediaType, media, addLike);
    divVideoPost.appendTo(galerie);
  }
};

const filter = (a, b) => a.likes - b.likes;
// eslint-disable-next-line no-shadow
const filterByTrending = (medias) => medias.sort(filter);

const getMedias = async () => {
  medias = await getMediaByPhotographer(photograph.id);
  console.log('medias :', medias);
  displayGalerie(medias);

  likes = medias.reduce((totalLikes, media) => totalLikes + media.likes, 0);

  fetchLikes();
};

// fonction filtre
function globalFilter(e) {
  e.preventDefault();
  e.stopPropagation();
  const { value } = e.target;
  console.log(`attribut de filtre : ${value}`);

  switch (value) {
    case 'popularite':
      console.log(medias);
      // eslint-disable-next-line no-case-declarations
      const filterMedias = filterByTrending(medias);
      displayGalerie(filterMedias);
      break;

    default:
      break;
  }
}

const select = document.querySelector('.sous');
select.addEventListener('change', globalFilter);

// eslint-disable-next-line import/prefer-default-export
export const fetchMedia = (photographer) => {
  photograph = photographer;
  getMedias();
};
