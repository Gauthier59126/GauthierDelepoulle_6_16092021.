import {getPhotographById, getMediaByPhotographer} from './dataProvider';
import MediaFactory from './mediaFactory';

const photographId = new URL(location.href).searchParams.get('id');
console.log('idPhotographe', photographId);

let photograph = null;
let medias = [];

const title = (data) =>{
    const imageDivName = document.createElement("div");
    imageDivName.className = "nom__photo";

    const imageName = document.createElement("h2");
    imageName.innerText = data.title;

    imageDivName.appendChild(imageName);

    return imageDivName;
}

const like = (data) =>{
    const divLike = document.createElement("div");
    divLike.className = "nb__like";

    const nbLike = document.createElement("h2");
    nbLike.innerText = data.likes;

    divLike.appendChild(nbLike);

    return divLike;
}

const likeIcone = (data) =>{
    const divLikeIcon = document.createElement("div");
    divLikeIcon.className = "icone__like";

    const likeIcone = document.createElement("i");
    likeIcone.className = "fas fa-heart";

    divLikeIcon.appendChild(likeIcone);

    return divLikeIcon;
}

const displayImageInfo = (data) =>{
    const divImageInfo = document.createElement("div");
    divImageInfo.className = "description__photo";

    const imageDivName = title(data);
    const divLike = like(data);
    const divLikeIcon = likeIcone(data);

    divImageInfo.append(imageDivName, divLike, divLikeIcon);

    return divImageInfo;
}

const displayImage = (data) =>{
    const divImage = document.createElement("div");
    divImage.className = "div__img";

    const image = document.createElement("img")
    image.src = "images/images/" + data.image;

    divImage.appendChild(image);

    return divImage;
}

const displayImagePost = (data) =>{
    const divImagePost = document.createElement("div");
    divImagePost.className = "poste__photo";

    
    const divImageInfo = displayImageInfo(data);
    const divImage = displayImage(data);

    divImagePost.append(divImageInfo, divImage);

    return divImagePost;
}

const displayGalerie = (mediasArray) =>{
    const galerie = document.querySelector(".galerie");

    for (const media of mediasArray) {
        const mediaType = media.image != null?"image":"video";
        const divImagePost = new MediaFactory(mediaType, media);
        if (mediaType== "image") {
            console.log(divImagePost, mediaType);
            divImagePost.appendTo(galerie);
        }
        
       // galerie.prepend(divImagePost);
    }
}

const getMedias =  async() => {
    medias = await getMediaByPhotographer(photographId);
    console.log("medias :",medias);
    displayGalerie(medias);
}

getMedias();


