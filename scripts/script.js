let currentPlayer = 'x'

String.prototype.replaceAt = function(index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}

function onFieldClick(context) {
    if (context.innerHTML === "") {
        if (currentPlayer === 'x') {
            context.innerHTML = 'X'
            currentPlayer = 'o'
        } else if (currentPlayer === 'o') {
            context.innerHTML = 'O'
            currentPlayer = 'x'
        }
    }
    let winner = checkWin();
    if (winner != "") {
        winscreen = document.getElementById("winscreen");
        winscreen.style.visibility = "visible";
        winscreen.innerHTML = winscreen.innerHTML.replaceAt(0, winner);
    }
}

let fields = document.getElementsByClassName("field")

function getLines() {
    rows = [
        [fields[0], fields[1], fields[2]],
        [fields[3], fields[4], fields[5]],
        [fields[6], fields[7], fields[8]]
    ]

    columns = [
        [fields[0], fields[3], fields[6]],
        [fields[1], fields[4], fields[7]],
        [fields[2], fields[5], fields[8]]
    ]

    diagonals = [
        [fields[0], fields[4], fields[8]],
        [fields[2], fields[4], fields[6]]
    ]

    return rows.concat(columns).concat(diagonals)
}

function checkWin() {
    let lines = getLines();
    for (let i in lines) {
        let a = "";
        for (let j in lines[i]) {
            a += lines[i][j].innerHTML;
        }
        if (a==="XXX") {
            return "x";
        } else if (a==="OOO") {
            return "o";
        }
    }
    return ""
}

console.log(getLines())