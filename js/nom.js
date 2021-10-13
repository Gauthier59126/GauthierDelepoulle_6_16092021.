import {getPhotographById} from './dataProvider';

const photographId = new URL(location.href).searchParams.get('id');
console.log('idPhotographe', photographId);

let photograph = null;

const formName = (data) =>{

    const formTitle = document.createElement("h1");
    formTitle.className = "form-title";
    formTitle.innerText = "Contactez-moi "  + data.name;

    return formTitle;
}

const displayProfileName = (data) =>{
    const divTitle = document.querySelector('.div-title')
    
    const formTitle = formName(data);

    divTitle.prepend(formTitle);
}

const getPhotographData = async() => {
    photograph = await getPhotographById(photographId);
    displayProfileName(photograph);
}

getPhotographData();