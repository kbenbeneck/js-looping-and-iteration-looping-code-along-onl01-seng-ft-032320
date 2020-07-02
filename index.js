

function writeCards(namesArray, event) {
    let thanksYouCards = []
    for (let i = 0; i < namesArray.length; i++) {
        thanksYouCards.push(`Thank you, ${namesArray[i]}, for the wonderful ${event} gift!`)
    }
    
    return thanksYouCards
}

function countDown(anyPositiveInteger){
    while (anyPositiveInteger > 0) {
        console.log(anyPositiveInteger);
        anyPositiveInteger -=1;
    }
    console.log(anyPositiveInteger);
}