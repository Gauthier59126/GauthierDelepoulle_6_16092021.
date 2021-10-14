const get = (url) => {
    return fetch(url);
}

const getData = async () =>{
    try{
        let response = await get ('data/data.json');
        const data = await response.json();
        return data;
    } catch(error) {
        console.log("il y a eu un problème", error);
    }
}


export const getPhotograph = async () =>{
    const data = await getData();
    return data?.photographers;
}

export const getPhotographById = async (id) => {
    const allPhotographers = await getPhotograph();
    const photograph = allPhotographers.find((onePhotograph) =>{
        return onePhotograph.id == id;
    })

    return photograph;
}


// export images
export const getImage = async () =>{
    const data = await getData();
    return data?.media;
}

export const getImageById = async (id) =>{
    const allImages = await getImage();
    const image = allImages.find((oneImage) =>{
        return oneImage.id == id;
    })

    return image;
}

export const getMediaByPhotographer = async (id) => {
    const data = await getData();
    const medias = data.media.filter((media) => 
        media.photographerId == id 
    )   
    return medias;
}


const test = async () =>{
    const photograph = await getPhotograph ();
    console.log(photograph);

    const image = await getImage();
    console.log(image);
}

test();