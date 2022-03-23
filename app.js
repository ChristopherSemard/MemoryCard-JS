document.addEventListener("DOMContentLoaded", (e) => {
    console.log(e);
    createCards();
  });

const createCards = () =>  {

    // Création des cartes
    let cardtable = [
        {srcImg : 'ressources/apple.svg', id : 1, name : "pomme" },
        {srcImg : 'ressources/apple.svg', id : 2, name : "pomme" },
        {srcImg : 'ressources/banana.svg', id : 3, name : "banane" },
        {srcImg : 'ressources/banana.svg', id : 4, name : "banane" },
        {srcImg : 'ressources/brocoli.svg', id : 5, name : "brocoli" },
        {srcImg : 'ressources/brocoli.svg', id : 6, name : "brocoli" },
        {srcImg : 'ressources/cherry.svg', id : 7, name : "cerise" },
        {srcImg : 'ressources/cherry.svg', id : 8, name : "cerise" },
        {srcImg : 'ressources/pepper.svg', id : 9, name : "poivron" },
        {srcImg : 'ressources/pepper.svg', id : 10, name : "poivron" },
        {srcImg : 'ressources/straw.svg', id : 11, name : "fraise" },
        {srcImg : 'ressources/straw.svg', id : 12, name : "fraise" }
    ]

    // Random des cartes
    cardtable.sort((a, b) => 0.5 - Math.random());
    console.log(cardtable)

    // Affichage des cartes
    cardtable.forEach((card) => {
        let gridArea = document.querySelector("main");
        let cardDiv = document.createElement("div");
        cardDiv.classList = "card";
        gridArea.appendChild(cardDiv);

        // Création de la face de la carte
        let front = document.createElement("img");
        front.classList = "card-front";
        front.src = card.srcImg;
        cardDiv.appendChild(front);
        
        // Création de la face de la carte
        let back = document.createElement("div");
        back.classList = "card-back";
        cardDiv.appendChild(back);










    });


};