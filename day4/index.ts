// Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53

const input = `
Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53
Card 2: 41 48 83 86 17 | 83 86  6 31 17  9 48 53
Card 3: 41 48 83 86 17 | 83 86  6 31 17  9 48 53
Card 4: 41 48 83 86 17 | 83 86  6 31 17  9 48 53
Card 5: 41 48 83 86 17 | 83 86  6 31 17  9 48 53
`

const cards = input.split('\n')
    .filter(line => line.trim() !== '')
    .map(line => line.split(':'))
    .map(([name, numbers]) => {
        const [card1, card2] = numbers.split('|')
        return {
        name: name.trim(),
        card1: card1.trim().split(' ').map(n => parseInt(n, 10)),
        card2: card2.trim().split(' ').map(n => parseInt(n, 10)),
        }
    })

console.log(cards)


