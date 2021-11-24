/* eslint-disable no-constructor-return */
import ImageFactory from './imageFactory';
import VideoFactory from './videoFactory';

export default class MediaFactory {
  constructor(mediaType, mediaData, addLike) {
    switch (mediaType) {
      case 'image':
        return new ImageFactory(mediaData, addLike);
      case 'video':
        return new VideoFactory(mediaData, addLike);
      default:
        throw Error("Ce type de média n'est pas pris en compte");
    }
  }
}
