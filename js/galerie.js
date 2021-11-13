import {getPhotographById, getMediaByPhotographer} from './dataProvider';
import MediaFactory from './mediaFactory';

let photograph = null;
let medias = [];
let likes = 0;


// fonction filtre
function globalFilter(e){
    e.preventDefault();
    e.stopPropagation();
    const value = e.target.value;
    console.log("attribut de filtre : " + value);

    switch (value) {
        case "popularite":
            console.log(medias);
            const filterMedias = filterByTrending(medias);
            displayGalerie(filterMedias);
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

const displayGalerie = (mediasArray) =>{
    console.log(mediasArray);
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

const filter = (a, b) =>{
    return a.likes - b.likes;
}

const filterByTrending = (medias) =>{

/*    const trendingFilterName = document.querySelector(".nom__filtres");

    trendingFilterName.addEventListener('click', () => {
        console.log('Le filtre Popularité a été selectionné""');
    })
*/
    return medias.sort(filter);
}

const getMedias =  async() => {
    medias = await getMediaByPhotographer(photograph.id);
    console.log("medias :",medias);
    displayGalerie(medias);

    likes = medias.reduce(( totalLikes, media) => totalLikes + media.likes, 0)

    fetchLikes();
}

export const fetchMedia = (photographer) => {
    photograph = photographer;
    getMedias();
}


