import ImageFactory from "./imageFactory";
export default class MediaFactory {
    constructor (mediaType, mediaData){

        switch (mediaType) {
            case "image":
                return new ImageFactory(mediaData);
                break;
            case "video":
                return null;
                break;
            default: 
            throw Error("Ce type de média n'est pas pris en compte")
                break;
        }
    }
}