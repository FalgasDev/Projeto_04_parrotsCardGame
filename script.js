const cards = ['bobrossparrot', 'explodyparrot', 'fiestaparrot', 'metalparrot', 'revertitparrot', 'tripletsparrot', 'unicornparrot'];
const pack = [];
let count = 0
let interval;
const seconds = document.querySelector('.timer h2')

cards.sort(shuffle)

let numberOfCards = Number(prompt('Quantas cartas você quer?'));
const card = document.querySelector('.cards');

while (numberOfCards < 4 || numberOfCards > 14 || numberOfCards % 2 != 0) {
    alert('insira um número par de 4 a 14 por favor!')
    numberOfCards = Number(prompt('Quantas cartas você quer?'));
}

for (let i = 0; i < (numberOfCards / 2); i++) {
    pack.push(cards[i])
    pack.push(cards[i])
}

pack.sort(shuffle);
for (let i = 0; numberOfCards > i; i++) {
    card.innerHTML += `
    <div class="card" onclick="flipCard(this)">
        <div class="back face">
            <img src="./images/back.png">
        </div>
        <div class="front face">
            <img src="./images/${pack[i]}.gif">
            <p>${pack[i]}</p>
        </div>
    </div>
    `
}

function flipCard(element) {
    const backCard = element.querySelector('.back')
    const frontCard = element.querySelector('.front')
    count++
    frontCard.classList.remove('front')
    frontCard.classList.add('turned')
    backCard.classList.add('rotate')
    const matchedCards = document.querySelectorAll('.match')
    let flipedCards = document.querySelectorAll('.turned')
    const first = flipedCards[0].querySelector('.turned p')
    if (flipedCards.length === 2) {
        const second = flipedCards[1].querySelector('.turned p') 
        if (first.innerHTML == second.innerHTML) {
            flipedCards[0].classList.add('match')
            flipedCards[1].classList.add('match')
            flipedCards[0].classList.remove('turned')
            flipedCards[1].classList.remove('turned')
            if (matchedCards.length == pack.length - 2) {
                setTimeout(() => {alert(`Você ganhou em ${count} jogadas!! \nEssa rodada durou ${seconds.innerHTML} segundos`)}, 500)
                clearInterval(interval)
            }
        } else {
            setTimeout(() => {
                flipedCards[0].classList.add('front')
                flipedCards[0].parentNode.querySelector('.back').classList.remove('rotate')
                flipedCards[1].classList.add('front')
                flipedCards[1].parentNode.querySelector('.back').classList.remove('rotate')
            }, 1000)
            flipedCards[0].classList.remove('turned')
            flipedCards[1].classList.remove('turned')
        }
    }
}

function shuffle() { 
	return Math.random() - 0.5; 
}

function timer() {
    console.log()
    interval = setInterval(() => {
        seconds.innerHTML++
    }, 1000)
}

timer()