import {getPhotographById} from './dataProvider';
import {fetchMedia} from './galerie';

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

const getPhotographData = async() => {
    photograph = await getPhotographById(photographId);
    conteneur(photograph);
    fetchMedia(photograph);
}

getPhotographData();



