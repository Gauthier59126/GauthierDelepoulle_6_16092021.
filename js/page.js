//import {fetchMedia} from './galerie';
import {getPhotographById, getMediaByPhotographer} from './dataProvider';
import MediaFactory from './mediaFactory';
import {sortByTrending, sortByTitle, sortByDate} from './sort';

let medias = [];
let likes = 0;

const photographId = new URL(location.href).searchParams.get('id');
console.log('idPhotographe', photographId);

let photograph = null;

const nom = (data) => {
    const divName = document.createElement("div");
    divName.className = "nom";

    const textName = document.createElement("h1");
    textName.innerText = data.name;

    divName.appendChild(textName);

    return divName;
}

const cityAndIntro = (data) => {
    const divCityAndIntro = document.createElement("div");
    divCityAndIntro.className = "div__ville__intro";

    const textCity = document.createElement("h3");
    textCity.className = "ville";
    textCity.innerText = data.city +", "+  data.country;

    const TextIntro = document.createElement("h3");
    TextIntro.className = "phrase-intro";
    TextIntro.innerText = data.tagline;

    divCityAndIntro.append(textCity, TextIntro);

    return divCityAndIntro;
}

const hashtag = (data) =>{
    const divHashtag = document.createElement("div");
    divHashtag.className = "div__hashtags";

    for (const tag of data.tags) {
        const divTag = document.createElement("div");
        divTag.innerText = "#" + tag;

        divHashtag.appendChild(divTag);
    }

    return divHashtag;
}

const displayImagePhotograph = (data) =>{
    const divImage = document.querySelector('.img__profile');
    divImage.src = "images/Photographers/" + data.portrait;
    divImage.alt = "Photo de profil du photographe";
}
 
const displayInfoProfil = (data) => {
    const divInfoProfil =  document.createElement("div");
    divInfoProfil.className = "div__info-profil";

    const divName = nom(data);

    const divCityAndIntro = cityAndIntro(data);

    const divHashtag = hashtag(data);

    divInfoProfil.append(divName, divCityAndIntro, divHashtag);

    displayImagePhotograph(data);

    return divInfoProfil;
}

const conteneur = (data) => {
    const conteneur1 = document.querySelector('.conteneur1');

    const divInfoProfil = displayInfoProfil(data);

    conteneur1.prepend(divInfoProfil);
}

// fonction filtre
function globalFilter(e){
    e.preventDefault();
    e.stopPropagation();
    const value = e.target.value;
    console.log("attribut de filtre : " + value);

    let sortMedias =[];

    switch (value) {
        case "popularite":
            sortMedias = sortByTrending(medias);
            displayGalerie(sortMedias);
            break;
        case "titre":
            sortMedias = sortByTitle(medias);
            displayGalerie(sortMedias);
            break;

        case "date":
            sortMedias = sortByDate(medias);
            displayGalerie(sortMedias);
            break;
        default:
            break;
    }
}



const select = document.querySelector(".sous");
select.addEventListener("change", globalFilter);

const addLike = () =>{
    likes += 1;
    fetchLikes();
}

const fetchMedia = (photographer) => {
    photograph = photographer;
    getMedias();
}

const getMedias =  async() => {
    medias = await getMediaByPhotographer(photograph.id);
    console.log("medias :",medias);
    medias = sortByTrending(medias);
    displayGalerie(medias);

    likes = medias.reduce(( totalLikes, media) => totalLikes + media.likes, 0)

    fetchLikes();
}

const displayGalerie = (mediasArray) =>{
    console.table(mediasArray);
    const galerie = document.querySelector(".galerie");

    galerie.innerText = "";

    for (const media of mediasArray) {
        const mediaType = media.image == null?"video":"image";
        media.photograph = photograph;
        const divVideoPost = new MediaFactory(mediaType, media, addLike);
        divVideoPost.appendTo(galerie);
    }
}

const fetchLikes = (likesCount) => {
    const likeToFetch = likesCount || likes;

    const divTotalLikes = document.querySelector('.total-likes');
    divTotalLikes.innerText = likeToFetch;
}

const getPhotographData = async() => {
    photograph = await getPhotographById(photographId);
    conteneur(photograph);
    fetchMedia(photograph);
}

getPhotographData();



