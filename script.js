const cards = ['bobrossparrot', 'explodyparrot', 'fiestaparrot', 'metalparrot', 'revertitparrot', 'tripletsparrot', 'unicornparrot'];

let numberOfCards = Number(prompt('Quantas cartas você quer?'));
const card = document.querySelector('.cards');

cards.sort(shuffle);


while (numberOfCards < 4 || numberOfCards > 14 || numberOfCards % 2 != 0) {
    alert('insira um número par de 4 a 14 por favor!')
    numberOfCards = Number(prompt('Quantas cartas você quer?'));
}

for (let i = 0; numberOfCards > i; i++) {  
    card.innerHTML += `
    <div class="card" onclick="flipCard(this)">
        <div class="front hidden">
            <img src="./images/${cards[i]}.gif">
        </div>
        <div class="back">
            <img src="./images/back.png">
        </div>
    </div>`
}

function flipCard(element) {
    const backCard = element.querySelector('.back')
    const frontCard = element.querySelector('.front')
    backCard.classList.add('hidden')
    frontCard.classList.remove('hidden')
}

function shuffle() { 
	return Math.random() - 0.5; 
}

