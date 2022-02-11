let red = document.querySelector('#red')
let blue = document.querySelector('#red')
let turn = 'red'
let stopEvent = false
let button = document.getElementById('btn')

button.addEventListener('click', async (e) => {
    if (!stopEvent) {
        stopEvent = true
        let dicenum = await roll()
//         let dicenum = 99
        let isoutofrange = checkRange(dicenum)
        console.log(dicenum)
        await new Promise(resolve => setTimeout(resolve, 400))
        if (!isoutofrange) {
            await run(dicenum)
            await new Promise(resolve => setTimeout(resolve, 400))
        }
        let won = wonby()
        if (won == 'none') {
            changeTurn();
            stopEvent = false
        }
    }
})

function wonby() {
    if (marginTop() == -88.2 && marginLeft() == 0) {
        document.querySelector("#p_turn").innerHTML = `${turn} Player Won`
        return turn
    }
    else {
        return 'none'
    }
}

function checkRange(dicenum) {
    let isout = false;
    if (marginTop() == 88.2 && (marginLeft() + Number((dicenum * -9.8).toFixed(1))) < 0) {
        isout = true
    }
    return isout
}

function run(dicenum) {
    return new Promise(async (resolve, reject) => {
        for (let i = 0; i < dicenum; i++) {
            let direction = getDirection()
            console.log(direction)
            await move(direction)
        }
        checkladdersandsnakes()
        resolve()
    })
}
function checkladdersandsnakes() {
    let froms = [[58.8, -9.8], [29.4, -19.6], [39.2, -19.6], [88.2, -39.2], [88.2, -49], [29.4, -68.6], [9.8, -88.2]]
    let tos = [[68.6, -29.4], [49, 0], [29.4, -39.2], [88.2, -19.6], [78.4, -68.6], [19.6, -88.2], [19.6, -68.6]]

    for (let i = 0; i < tos.length; i++) {
        if (marginLeft() == froms[i][0] && marginTop() == froms[i][1]) {
            new Audio('/SnakeAndLadderVersion/media/win.mp3').play()
            document.querySelector(`#${turn}`).style.marginLeft = `${tos[i][0]}vmin`
            document.querySelector(`#${turn}`).style.marginTop = `${tos[i][1]}vmin`
        }

    }
}
function move(direction) {
    return new Promise(async (resolve, reject) => {
        new Audio('/SnakeAndLadderVersion/media/move.mp3').play()
        if (direction == 'up') {
            document.querySelector(`#${turn}`).style.marginTop = String(marginTop() - 9.8) + 'vmin'
        }
        else if (direction == 'right') {
            document.querySelector(`#${turn}`).style.marginLeft = String(marginLeft() + 9.8) + 'vmin'
        }
        else if (direction == 'left') {
            document.querySelector(`#${turn}`).style.marginLeft = String(marginLeft() - 9.8) + 'vmin'
        }
        await new Promise(resolve => setTimeout(resolve, 750))
        resolve()
    })
}

function changeTurn() {
    if (turn == 'blue') {
        document.querySelector("#p_turn").innerHTML = "Red Player Turn"
        turn = 'red'
    }
    else if (turn == 'red') {
        document.querySelector("#p_turn").innerHTML = "Blue Player Turn"
        turn = 'blue'
    }
}

function getDirection() {
    let direction = 'left';
    // console.log(marginTop() + "Margin Top")
    let vw = (marginLeft() == 0 && ((((marginTop() * 10) % (-19.6 * 10)) / 10) != 0))
    let vr = (marginLeft() == 88.2 && ((((marginTop() * 10) % (-19.6 * 10)) / 10) == 0))
    if (vr || vw) {
        direction = 'up';
    }
    else if ((((marginTop() * 10) % (-19.6 * 10)) / 10) == 0) {
        direction = 'right'
    }
    else {
        direction = 'left'
    }
    return direction;
}

function roll() {
    return new Promise(async (resolve, reject) => {
        let dicenum = Math.floor(Math.random() * 6) + 1
        let values = [[0, -360], [-180, -360], [-180, 270], [0, -90], [270, 100], [90, 90]]
        new Audio('/media/diceRoll.mp3').play()
        document.querySelector('#cubeinner').style.transform = 'rotateX(360deg) rotateY(360deg)'
        await new Promise(resolve => setTimeout(resolve, 750))
        document.querySelector('#cubeinner').style.transform = `rotateX(${values[dicenum - 1][0]}deg) rotateY(${values[dicenum - 1][1]}deg)`
        await new Promise(resolve => setTimeout(resolve, 750))
        resolve(dicenum)
    })
}

function marginLeft() {
    return Number(document.querySelector(`#${turn}`).style.marginLeft.split('v')[0])


}
function marginTop() {
    return Number(document.querySelector(`#${turn}`).style.marginTop.split('v')[0])

}
