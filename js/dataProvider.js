const get = (url) => fetch(url);

const getData = async () => {
  try {
    const response = await get('data/data.json');
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('il y a eu un problème', error);
    return null;
  }
};

export const getPhotograph = async () => {
  const data = await getData();
  return data?.photographers;
};

export const getPhotographById = async (id) => {
  const allPhotographers = await getPhotograph();
  const photograph = allPhotographers.find((onePhotograph) => onePhotograph.id === Number(id));

  return photograph;
};

// export images
export const getImage = async () => {
  const data = await getData();
  return data?.media;
};

export const getImageById = async (id) => {
  const allImages = await getImage();
  const image = allImages.find((oneImage) => oneImage.id === Number(id));

  return image;
};

export const getMediaByPhotographer = async (id) => {
  const data = await getData();
  const medias = data.media.filter((media) => media.photographerId === Number(id));
  return medias;
};
