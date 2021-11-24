import lightbox from './lightbox';

export default class ImageFactory {
  constructor(imageData, addLike) {
    this.createImage(imageData);
    this.likes = imageData.likes;
    this.addLike = addLike;
  }

  createImage(data) {
    this.divImagePost = document.createElement('div');
    this.divImagePost.className = 'poste__photo';

    const divImageInfo = this.getInfo(data);
    const divImage = this.getImage(data);

    this.divImagePost.append(divImageInfo, divImage);

    // return this.divImagePost;
  }

  getInfo(data) {
    const divImageInfo = document.createElement('div');
    divImageInfo.className = 'description__photo';

    const imageDivName = this.getTitle(data);
    const divLike = this.getLike(data);
    const divLikeIcon = this.getLikeIcone(data);

    divImageInfo.append(imageDivName, divLike, divLikeIcon);

    return divImageInfo;
  }

  getTitle(data) {
    this.imageDivName = document.createElement('div');
    this.imageDivName.className = 'nom__photo';

    const imageName = document.createElement('h2');
    imageName.innerText = data.title;

    this.imageDivName.appendChild(imageName);

    return this.imageDivName;
  }

  getLike(data) {
    const divLike = document.createElement('div');
    divLike.className = 'nb__like';

    this.nbLike = document.createElement('h2');
    this.nbLike.innerText = data.likes;

    divLike.appendChild(this.nbLike);

    return divLike;
  }

  // nombre de like lors du click sur l'icone
  getLikeIcone() {
    const divLikeIcon = document.createElement('div');
    divLikeIcon.className = 'icone__like';

    const likeIcone = document.createElement('i');
    likeIcone.className = 'fas fa-heart';

    divLikeIcon.appendChild(likeIcone);

    likeIcone.addEventListener('click', () => {
      console.log('Le média a été liké');
      this.likes += 1;
      this.nbLike.innerText = this.likes;
      this.addLike();
    });

    return divLikeIcon;
  }

  getImage(data) {
    this.divImage = document.createElement('a');
    this.divImage.className = 'div__img';
    this.divImage.href = '#';

    const image = document.createElement('img');
    image.src = `images/${data.photograph.name.split(' ')[0]}/${data.image}`;
    image.alt = 'Photo posté par le Photographe';

    this.divImage.appendChild(image);

    this.divImage.addEventListener('click', () => {
      lightbox(data);
    });

    return this.divImage;
  }

  appendTo(conteneur) {
    if (conteneur) {
      conteneur.appendChild(this.divImagePost);
    }
  }
}
