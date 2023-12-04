// Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53

// const input = `
// Card 1: 41 48 83 86 17 | 83 86  6 31 1  8 48 53
// Card 2: 41 48 83 86 17 | 8 8  6 1 7  9 4 5
// Card 3: 41 48 83 86 17 | 83 86  6 31 17  9 48 53
// Card 4: 41 48 83 86 17 | 83 86  6 31 17  9 48 53
// Card 5: 41 48 83 86 17 | 83 86  6 31 17  9 48 53
// `

import { input } from './input'


const cardGames = input.split('\n')
    .filter(line => line.trim() !== '')
    .map(line => line.split(':'))
    .map(([name, numbers]) => {
        const [card1, card2] = numbers.split('|')
        return {
        name: name.trim(),
        card1: card1.trim().split(' ').map(n => parseInt(n, 10)).filter(n => !isNaN(n)),
        card2: card2.trim().split(' ').map(n => parseInt(n, 10)).filter(n => !isNaN(n)),
        }
    })
    
const sameNumbers = (card1: number[], card2: number[]) => {
    let count = 0
    for (const n of card1) {
        if (card2.includes(n)) {
            count++
        }
    }
    return count
}

let allResults = 0

const results = cardGames.forEach(cards => { 

    let same = sameNumbers(cards.card1, cards.card2)
 
    const numbers: { [key: number]: number } = {
        1: 1,
        2: 2,
        3: 4,
        4: 8,
        5: 16,
        6: 32,
        7: 64,
        8: 128,
        9: 256,
        10: 512
    };

    if (same > 0) {
        same = numbers[same]
    }

    allResults += same;
    
    console.log(`${cards.name} has ${same} same numbers + all results: ${allResults}`)
})

console.log(results)


