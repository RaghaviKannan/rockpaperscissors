function ComputerMove() {
    let randomNum = Math.random()
    let result;
    if (randomNum > 0 && randomNum < 1 / 3) {
        result = "✊"
    }
    else if (randomNum > 1 / 3 && randomNum < 2 / 3) {
        result = "🖐️"
    } else {
        result = "✌️"
    }
    return result
}

let results;
let winningcount = 0
let losingcount = 0
let tiecount = 0
function result(playermove) {
    let computermove = ComputerMove()
    if ((playermove === "✊" && computermove === "🖐️") || (playermove === "🖐️" && computermove === "✌️") || (playermove === "✌️" && computermove === "✊")) {
        results = "You lose"
        losingcount += 1
    } else if ((playermove === "✌️" && computermove === "🖐️") || (playermove === "✊" && computermove === "✌️") || (playermove === "🖐️" && computermove === "✊")) {
        results = "You win"
        winningcount += 1
    } else if (playermove === computermove) {
        results = "Tie"
        tiecount += 1
    }
    showResult(results, playermove, computermove)
}

function showResult(results, playermove, computermove) {
    document.querySelector(".game-result").innerHTML = results
    document.querySelector(".game-moves").innerHTML = `You picked ${playermove} & Computer picked ${computermove}`
    document.querySelector(".count").innerHTML = `Wins:${winningcount} Losses:${losingcount} Tie:${tiecount}`
}

function resetscore() {
    winningcount = 0
    losingcount = 0
    tiecount = 0
    document.querySelector(".game-result").innerHTML = ""
    document.querySelector(".game-moves").innerHTML = ""
    document.querySelector(".count").innerHTML = `Wins:${winningcount} Losses:${losingcount} Tie:${tiecount}`
}
