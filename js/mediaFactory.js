import ImageFactory from "./imageFactory";
import VideoFactory from "./videoFactory";

export default class MediaFactory {
    constructor (mediaType, mediaData, addLike){

        switch (mediaType) {
            case "image":
                return new ImageFactory(mediaData, addLike);
                break;
            case "video":
                return new VideoFactory(mediaData, addLike);
                break;
            default: 
            throw Error("Ce type de média n'est pas pris en compte")
                break;
        }
    }
}