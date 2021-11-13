import {getMediaByPhotographer} from './dataProvider';

let medias = [];
let selectedMediaIndex = 0;
let name = "";
const photographId = new URL(location.href).searchParams.get('id');

const lightbox = document.querySelector(".lightbox");
const closeBtn = document.querySelector(".btn-close");
const lightboxImage = document.querySelector(".lightbox-image");
const lightboxVideo = document.querySelector(".lightbox-video");
const btnPrev = document.querySelector(".btn-prev");
const btnNext = document.querySelector(".btn-next");
const mediaTitle = document.querySelector(".title");

//position du media sélectionné pour la lightbox
const showSelectedMedia = (media) => {

  if (media.image) {
    lightboxVideo.style.display = "none";
    lightboxImage.style.display = "block";
    lightboxImage.src = "images/"+ name.split(" ")[0] + "/" + media.image;
  }else {
    lightboxVideo.style.display = "block";
    lightboxImage.style.display = "none";
    lightboxVideo.src = "images/"+ name.split(" ")[0] + "/" + media.video;
  }

  mediaTitle.innerText = media.title;
}

const prev = (e) =>{
  if (selectedMediaIndex == 0) {
    selectedMediaIndex = medias.length -1;
  } else{
    selectedMediaIndex -=1;
  }
  const media = medias[selectedMediaIndex];
  showSelectedMedia(media);
}

const next = (e) =>{
  if (selectedMediaIndex == medias.length -1) {
    selectedMediaIndex = 0;
  } else{
    selectedMediaIndex +=1;
  }
  const media = medias[selectedMediaIndex];
  showSelectedMedia(media);
}

export default (media) =>{
  selectedMediaIndex = medias.findIndex(item => item.id == media.id);
  lightbox.style.display = "flex";
  name = media.photograph.name;
  showSelectedMedia(media);
}

const handleClose = (e) => lightbox.style.display = "none";

(async function(){
  medias = await getMediaByPhotographer(photographId);
  closeBtn.addEventListener('click', handleClose);
  btnPrev.addEventListener('click', prev);
  btnNext.addEventListener('click', next);
  console.log(medias);
})()