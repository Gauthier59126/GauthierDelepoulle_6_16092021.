export default class ImageFactory {
    constructor (imageData){
        this.createImage(imageData);
    }

    createImage(data) {
        this.divImagePost = document.createElement("div");
        this.divImagePost.className = "poste__photo";
            
        const divImageInfo = this.getInfo(data);
        const divImage = this.getImage(data);
    
        this.divImagePost.append(divImageInfo, divImage);
    
        //return this.divImagePost;
    }

    getInfo(data){
        const divImageInfo = document.createElement("div");
        divImageInfo.className = "description__photo";
    
        const imageDivName = this.getTitle(data);
        const divLike = this.getLike(data);
        const divLikeIcon = this.getLikeIcone(data);
    
        divImageInfo.append(imageDivName, divLike, divLikeIcon);
    
        return divImageInfo;
    }

    getTitle (data){
        const imageDivName = document.createElement("div");
        imageDivName.className = "nom__photo";
    
        const imageName = document.createElement("h2");
        imageName.innerText = data.title;
    
        imageDivName.appendChild(imageName);
    
        return imageDivName;
    }

    getLike(data){
        const divLike = document.createElement("div");
        divLike.className = "nb__like";
    
        const nbLike = document.createElement("h2");
        nbLike.innerText = data.likes;
    
        divLike.appendChild(nbLike);
    
        return divLike;
    }

    getLikeIcone (data){
        const divLikeIcon = document.createElement("div");
        divLikeIcon.className = "icone__like";
    
        const likeIcone = document.createElement("i");
        likeIcone.className = "fas fa-heart";
    
        divLikeIcon.appendChild(likeIcone);
    
        return divLikeIcon;
    }

    getImage (data){
        const divImage = document.createElement("div");
        divImage.className = "div__img";
    
        const image = document.createElement("img")
        image.src = "images/images/" + data.image;
    
        divImage.appendChild(image);
    
        return divImage;
    }

    appendTo(conteneur){
        if (conteneur) {
            conteneur.appendChild(this.divImagePost);
        }
    }
}