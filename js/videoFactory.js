import lightbox from './lightbox';

export default class VideoFactory{
    constructor (videoData, addLike){
        this.createVideo(videoData);
        this.likes = videoData.likes;
        this.addLike = addLike;

        console.log('video')
    }

    createVideo(data) {
        this.divVideoPost = document.createElement("div");
        this.divVideoPost.className = "poste__video";
            
        const divVideoInfo = this.getInfo(data);
        const divVideo = this.getVideo(data);
    
        this.divVideoPost.append(divVideoInfo, divVideo);
    }

    getInfo(data){
        const divVideoInfo = document.createElement("div");
        divVideoInfo.className = "description__video";
    
        const videoDivName = this.getTitle(data);
        const divLike = this.getLike(data);
        const divLikeIcon = this.getLikeIcone(data);
    
        divVideoInfo.append(videoDivName, divLike, divLikeIcon);
    
        return divVideoInfo;
    }

    getTitle (data){
        const VideoDivName = document.createElement("div");
        VideoDivName.className = "nom__video";
    
        const VideoName = document.createElement("h2");
        VideoName.innerText = data.title;
    
        VideoDivName.appendChild(VideoName);
    
        return VideoDivName;
    }

    getLike(data){
        const divLike = document.createElement("div");
        divLike.className = "nb__like";
    
        this.nbLike = document.createElement("h2");
        this.nbLike.innerText = data.likes;
    
        divLike.appendChild(this.nbLike);
    
        return divLike;
    }

    getLikeIcone (data){
        const divLikeIcon = document.createElement("div");
        divLikeIcon.className = "icone__like";
    
        const likeIcone = document.createElement("i");
        likeIcone.className = "fas fa-heart";
    
        divLikeIcon.appendChild(likeIcone);

        likeIcone.addEventListener('click', () => {
            console.log('Le média a été liké');
            this.likes += 1;
            this.nbLike.innerText = this.likes;
            this.addLike();
        })
    
        return divLikeIcon;
    }

    getVideo (data){
        console.log("vidéo en cours de lecture")
        const divVideo = document.createElement("div");
        divVideo.className = "div__video";
    
        const video = document.createElement("video")
        video.src = "images/" + data.photograph.name.split(" ")[0] + "/" + data.video;

        video.controls = true;
    
        divVideo.appendChild(video);

        divVideo.addEventListener("click", () =>{
            lightbox(data);
        })
    
        return divVideo;
    }

    appendTo(conteneur){
        if (conteneur) {
            conteneur.appendChild(this.divVideoPost);
        }
    }
}