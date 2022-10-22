const cards = ['bobrossparrot', 'explodyparrot', 'fiestaparrot', 'metalparrot', 'revertitparrot', 'tripletsparrot', 'unicornparrot'];
const pack = [];
let count = 0
let interval;
const seconds = document.querySelector('.timer h2')
const plays = document.querySelector('.plays h2')

cards.sort(shuffle)

let numberOfCards = Number(prompt('Quantas cartas você quer?\ninsira um número par de 4 a 14'));
const card = document.querySelector('.cards');

while (numberOfCards < 4 || numberOfCards > 14 || numberOfCards % 2 != 0) {
    numberOfCards = Number(prompt('Quantas cartas você quer?\ninsira um número par de 4 a 14'));
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
    if (document.querySelectorAll('.turned').length < 2) {
        if (element.querySelector('.face:nth-child(2)').classList.contains('turned') === false && element.querySelector('.face:nth-child(2)').classList.contains('match') === false) {
            console.log(element.querySelector('.face:nth-child(2)'))
            const backCard = element.querySelector('.back')
            const frontCard = element.querySelector('.front')
            let rematch;
            frontCard.classList.remove('front')
            frontCard.classList.add('turned')
            backCard.classList.add('rotate')
            count++
            plays.innerHTML = count
            const matchedCards = document.querySelectorAll('.match')
            let flipedCards = document.querySelectorAll('.turned')
            const firstCardSelected = flipedCards[0].querySelector('.turned p')
            if (flipedCards.length === 2) {
                const secondCardSelected = flipedCards[1].querySelector('.turned p') 
                if (firstCardSelected.innerHTML == secondCardSelected.innerHTML) {
                    flipedCards[0].classList.add('match')
                    flipedCards[1].classList.add('match')
                    flipedCards[0].classList.remove('turned')
                    flipedCards[1].classList.remove('turned')
                    if (matchedCards.length == pack.length - 2) {
                        setTimeout(() => {alert(`Parabéns!!\nVocê ganhou em ${count} jogadas!! \nEssa partida durou: ${seconds.innerHTML} segundos`)}, 500)
                        clearInterval(interval)
                        setTimeout(() => {
                            rematch = prompt('Gostaria de reiniciar a partida? (sim ou não)')
                            while (rematch !== 'sim' && rematch !== 'não') {
                                rematch = prompt('Gostaria de reiniciar a partida? (sim ou não)')
                            }

                            if (rematch === 'sim') {
                                location.reload(true)
                            }
                        }, 1000)
                    }
                } else {
                    setTimeout(() => {
                        flipedCards[0].classList.add('front')
                        flipedCards[0].parentNode.querySelector('.back').classList.remove('rotate')
                        flipedCards[1].classList.add('front')
                        flipedCards[1].parentNode.querySelector('.back').classList.remove('rotate')
                        flipedCards[0].classList.remove('turned')
                        flipedCards[1].classList.remove('turned')
                    }, 1000)
                }
            }
        }
    }
}

function shuffle() { 
	return Math.random() - 0.5; 
}

function timer() {
    interval = setInterval(() => {
        seconds.innerHTML++
    }, 1000)
}

timer()