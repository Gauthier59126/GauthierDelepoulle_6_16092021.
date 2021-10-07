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

const test = async () =>{
    const photograph = await getPhotograph ();
    console.log(photograph);
}

test();