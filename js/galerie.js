import {getPhotographById} from './dataProvider';

const photographId = new URL(location.href).searchParams.get('id');
console.log('idPhotographe', photographId);

let photograph = null;

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

    const likeIcone = document.createElement("h2");
    likeIcone.innerText = "";

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
    const divImage = document.querySelector('.div__img');
    divImage.src = "images/images/" + data.id;
}

const displayImagePost = (data) =>{
    const divImagePost = document.createElement("div");
    divImagePost.className = "poste__photo";

    
    const divImageInfo = displayImageInfo(data);
    const divImage = displayImage(data);

    divImagePost.append(divImageInfo, divImage);

    return divImagePost;
}

const displayGalerie = (data) =>{
    const galerie = document.querySelector(".galerie");

    const divImagePost = displayImagePost(data);

    galerie.prepend(divImagePost);
}

const getPhotographData = async() => {
    photograph = await getPhotographById(photographId);
    displayGalerie(photograph);
}

getPhotographData();


