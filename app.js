// Création de la grille
document.addEventListener("DOMContentLoaded", () => {
    createCards();
});

// Check les clics sur les cartes
document.addEventListener("click", event => {
    const eventCard = event.target;
    const eventParent = eventCard.parentElement;
    console.log(eventCard)
    console.log(eventParent)
    if (eventCard.className.includes('card-back') && !eventParent.className.includes('clickedCard')    )  {

        game(eventCard, eventParent);
    }
})

// Variable pour compter les cartes validées et la dernière carte retournée
let countClickedCardsValid = 0;
let lastClickedCardId;
let lastClickedCardName;

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

    // Affichage des cartes
    cardtable.forEach((item) => {
        let gridArea = document.querySelector("main");
        let card = document.createElement("div");
        card.classList = "card";
        card.id = item.id;
        card.setAttribute("name", item.name);
        gridArea.appendChild(card);

        // Création de la face de la carte
        let front = document.createElement("img");
        front.classList = "card-front";
        front.src = item.srcImg;
        card.appendChild(front);
        
        // Création du derrière de la carte
        let back = document.createElement("div");
        back.classList = "card-back";
        card.appendChild(back);



    });



};


function  game(eventCard, eventParent)  {

    // Liste des cartes cliquées
    let listClickedCards = document.getElementsByClassName("clickedCardBack");

    // Check si c'est un nouveau tour alors on retourne la carte
    if (listClickedCards.length  < countClickedCardsValid + 1) {
        flipCard(eventCard, eventParent);
        lastClickedCardId = eventParent.id;
        lastClickedCardName = eventParent.getAttribute("name");
    }
    
    // Check si c'est la seconde carte cliquée d'un tour, alors on retourne la carte
    else if (listClickedCards.length === countClickedCardsValid + 1) {
        flipCard(eventCard, eventParent);
        
        // Si la carte est la même on valide les deux
        if(lastClickedCardName === eventParent.getAttribute("name")){
            countClickedCardsValid = countClickedCardsValid+2;
            // Si les 12 cartes ont été retournées on valide la partie
            if(countClickedCardsValid === 12){
                let textBox = document.getElementById('texteVictoire');
                console.log(textBox)
                textBox.style.display = "block";
            }
        }
        // Sinon on retourne les cartes et on ne les compte pas
        else if (lastClickedCardName != eventParent.getAttribute("name")){
            let lastCard = document.getElementById(lastClickedCardId);
            setTimeout(flipCard, 1000, eventCard, eventParent);
            setTimeout(flipCard, 1000, lastCard.lastChild, lastCard);
            

        }
    }
};

// Retourner une carte
function flipCard(eventCard, eventParent) {
    eventCard.classList.toggle("clickedCardBack");
    eventParent.classList.toggle("clickedCard");
}