const nom = (data) => {
    const divName = document.createElement("div");
    divName.className = "nom";

    const textName = document.createElement("h1");
    textName.innerText ='Mimi Keel';

    divName.appendChild(textName);

    return divName;
}

const cityAndIntro = (data) => {
    const divCityAndIntro = document.createElement("div");
    divCityAndIntro.className = "div__ville__intro";

    const textCity = document.createElement("h3");
    textCity.className = "ville";
    textCity.innerText = "London, UK";

    const TextIntro = document.createElement("h3");
    TextIntro.className = "phrase-intro";
    TextIntro.innerText = "Voir le beau dans le quotidien";

    divCityAndIntro.append(textCity, TextIntro);

    return divCityAndIntro;
}

const hashtag = (data) =>{
    const divHashtag = document.createElement("div");
    divHashtag.className = "div__hashtags";

    const portrait = document.createElement("div");
    portrait.innerText = "#portrait";

    const events = document.createElement("div");
    events.innerText = "#events";

    const travel = document.createElement("div");
    travel.innerText = "#travel";

    divHashtag.append(portrait, events, travel);

    return divHashtag;
}

const displayInfoProfil = (data) => {
    const divInfoProfil =  document.createElement("div");
    divInfoProfil.className = "div__info-profil";

    const divName = nom(data);

    const divCityAndIntro = cityAndIntro(data);

    const divHashtag = hashtag(data);

    divInfoProfil.append(divName, divCityAndIntro, divHashtag);

    return divInfoProfil;
}

const conteneur = (data) => {
    const conteneur1 = document.querySelector('.conteneur1');

    const divInfoProfil = displayInfoProfil(data);

    conteneur1.prepend(divInfoProfil);
}

conteneur();