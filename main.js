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

document.getElementById('a1').addEventListener('click', async (e) => {
    var ele = document.getElementsByName('q1');

    for (i = 0; i < ele.length; i++) {
        if (ele[i].checked) {
            if (ele[i].value == '3') {
                changeTurn()
            }
        }
    }
    document.getElementById('c1').click()
})

document.getElementById('a2').addEventListener('click', async (e) => {
    var ele = document.getElementsByName('q2');

    for (i = 0; i < ele.length; i++) {
        if (ele[i].checked) {
            if (ele[i].value == '2') {
                changeTurn()
            }
        }
    }
    document.getElementById('c2').click()
})

document.getElementById('a3').addEventListener('click', async (e) => {
    var ele = document.getElementsByName('q3');

    for (i = 0; i < ele.length; i++) {
        if (ele[i].checked) {
            if (ele[i].value == '1') {
                changeTurn()
            }
        }
    }
    document.getElementById('c3').click()
})
document.getElementById('a4').addEventListener('click', async (e) => {
    var ele = document.getElementsByName('q4');

    for (i = 0; i < ele.length; i++) {
        if (ele[i].checked) {
            if (ele[i].value == '3') {
                changeTurn()
            }
        }
    }
    document.getElementById('c4').click()
})
document.getElementById('a5').addEventListener('click', async (e) => {
    var ele = document.getElementsByName('q5');

    for (i = 0; i < ele.length; i++) {
        if (ele[i].checked) {
            if (ele[i].value == '3') {
                changeTurn()
            }
        }
    }
    document.getElementById('c5').click()
})
document.getElementById('a6').addEventListener('click', async (e) => {
    var ele = document.getElementsByName('q6');

    for (i = 0; i < ele.length; i++) {
        if (ele[i].checked) {
            if (ele[i].value == '3') {
                changeTurn()
            }
        }
    }
    document.getElementById('c6').click()
})

document.getElementById('a7').addEventListener('click', async (e) => {
    var ele = document.getElementsByName('q7');

    for (i = 0; i < ele.length; i++) {
        if (ele[i].checked) {
            if (ele[i].value == '2') {
                changeTurn()
            }
        }
    }
    document.getElementById('c7').click()
})

document.getElementById('a8').addEventListener('click', async (e) => {
    var ele = document.getElementsByName('q8');

    for (i = 0; i < ele.length; i++) {
        if (ele[i].checked) {
            if (ele[i].value == '2') {
                changeTurn()
            }
        }
    }
    document.getElementById('c8').click()
})
document.getElementById('a9').addEventListener('click', async (e) => {
    var ele = document.getElementsByName('q9');

    for (i = 0; i < ele.length; i++) {
        if (ele[i].checked) {
            if (ele[i].value == '3') {
                changeTurn()
            }
        }
    }
    document.getElementById('c9').click()
})
document.getElementById('a10').addEventListener('click', async (e) => {
    var ele = document.getElementsByName('q10');

    for (i = 0; i < ele.length; i++) {
        if (ele[i].checked) {
            if (ele[i].value == '1') {
                changeTurn()
            }
        }
    }
    document.getElementById('c10').click()
})

document.getElementById('a11').addEventListener('click', async (e) => {
    var ele = document.getElementsByName('q11');

    for (i = 0; i < ele.length; i++) {
        if (ele[i].checked) {
            if (ele[i].value == '1') {
                changeTurn()
            }
        }
    }
    document.getElementById('c11').click()
})

document.getElementById('a12').addEventListener('click', async (e) => {
    var ele = document.getElementsByName('q12');

    for (i = 0; i < ele.length; i++) {
        if (ele[i].checked) {
            if (ele[i].value == '2') {
                changeTurn()
            }
        }
    }
    document.getElementById('c12').click()
})

document.getElementById('a13').addEventListener('click', async (e) => {
    var ele = document.getElementsByName('q13');

    for (i = 0; i < ele.length; i++) {
        if (ele[i].checked) {
            if (ele[i].value == '3') {
                changeTurn()
            }
        }
    }
    document.getElementById('c13').click()
})

document.getElementById('a14').addEventListener('click', async (e) => {
    var ele = document.getElementsByName('q14');

    for (i = 0; i < ele.length; i++) {
        if (ele[i].checked) {
            if (ele[i].value == '1') {
                changeTurn()
            }
        }
    }
    document.getElementById('c14').click()
})

document.getElementById('a15').addEventListener('click', async (e) => {
    var ele = document.getElementsByName('q15');

    for (i = 0; i < ele.length; i++) {
        if (ele[i].checked) {
            if (ele[i].value == '3') {
                changeTurn()
            }
        }
    }
    document.getElementById('c15').click()
})

document.getElementById('a16').addEventListener('click', async (e) => {
    var ele = document.getElementsByName('q16');

    for (i = 0; i < ele.length; i++) {
        if (ele[i].checked) {
            if (ele[i].value == '3') {
                changeTurn()
            }
        }
    }
    document.getElementById('c16').click()
})

document.getElementById('a17').addEventListener('click', async (e) => {
    var ele = document.getElementsByName('q17');

    for (i = 0; i < ele.length; i++) {
        if (ele[i].checked) {
            if (ele[i].value == '2') {
                changeTurn()
            }
        }
    }
    document.getElementById('c17').click()
})

document.getElementById('a19').addEventListener('click', async (e) => {
    var ele = document.getElementsByName('q19');

    for (i = 0; i < ele.length; i++) {
        if (ele[i].checked) {
            if (ele[i].value == '1') {
                changeTurn()
            }
        }
    }
    document.getElementById('c19').click()
})

document.getElementById('a20').addEventListener('click', async (e) => {
    var ele = document.getElementsByName('q20');

    for (i = 0; i < ele.length; i++) {
        if (ele[i].checked) {
            if (ele[i].value == '2') {
                changeTurn()
            }
        }
    }
    document.getElementById('c20').click()
})

document.getElementById('a21').addEventListener('click', async (e) => {
    var ele = document.getElementsByName('q20');

    for (i = 0; i < ele.length; i++) {
        if (ele[i].checked) {
            if (ele[i].value == '2') {
                changeTurn()
            }
        }
    }
    document.getElementById('c20').click()
})

document.getElementById('a23').addEventListener('click', async (e) => {
    var ele = document.getElementsByName('q20');

    for (i = 0; i < ele.length; i++) {
        if (ele[i].checked) {
            if (ele[i].value == '2') {
                changeTurn()
            }
        }
    }
    document.getElementById('c20').click()
})

document.getElementById('a24').addEventListener('click', async (e) => {
    var ele = document.getElementsByName('q24');

    for (i = 0; i < ele.length; i++) {
        if (ele[i].checked) {
            if (ele[i].value == '3') {
                changeTurn()
            }
        }
    }
    document.getElementById('c24').click()
})

document.getElementById('a25').addEventListener('click', async (e) => {
    var ele = document.getElementsByName('q25');

    for (i = 0; i < ele.length; i++) {
        if (ele[i].checked) {
            if (ele[i].value == '1') {
                changeTurn()
            }
        }
    }
    document.getElementById('c25').click()
})

document.getElementById('a27').addEventListener('click', async (e) => {
    var ele = document.getElementsByName('q27');

    for (i = 0; i < ele.length; i++) {
        if (ele[i].checked) {
            if (ele[i].value == '1') {
                changeTurn()
            }
        }
    }
    document.getElementById('c27').click()
})

document.getElementById('a28').addEventListener('click', async (e) => {
    var ele = document.getElementsByName('q28');

    for (i = 0; i < ele.length; i++) {
        if (ele[i].checked) {
            if (ele[i].value == '2') {
                changeTurn()
            }
        }
    }
    document.getElementById('c27').click()
})

document.getElementById('a29').addEventListener('click', async (e) => {
    var ele = document.getElementsByName('q29');

    for (i = 0; i < ele.length; i++) {
        if (ele[i].checked) {
            if (ele[i].value == '2') {
                changeTurn()
            }
        }
    }
    document.getElementById('c29').click()
})

document.getElementById('a31').addEventListener('click', async (e) => {
    var ele = document.getElementsByName('q31');

    for (i = 0; i < ele.length; i++) {
        if (ele[i].checked) {
            if (ele[i].value == '1') {
                changeTurn()
            }
        }
    }
    document.getElementById('c31').click()
})

document.getElementById('a32').addEventListener('click', async (e) => {
    var ele = document.getElementsByName('q32');

    for (i = 0; i < ele.length; i++) {
        if (ele[i].checked) {
            if (ele[i].value == '3') {
                changeTurn()
            }
        }
    }
    document.getElementById('c32').click()
})

document.getElementById('a33').addEventListener('click', async (e) => {
    var ele = document.getElementsByName('q33');

    for (i = 0; i < ele.length; i++) {
        if (ele[i].checked) {
            if (ele[i].value == '2') {
                changeTurn()
            }
        }
    }
    document.getElementById('c33').click()
})

document.getElementById('a35').addEventListener('click', async (e) => {
    var ele = document.getElementsByName('q35');

    for (i = 0; i < ele.length; i++) {
        if (ele[i].checked) {
            if (ele[i].value == '1') {
                changeTurn()
            }
        }
    }
    document.getElementById('c35').click()
})

document.getElementById('a36').addEventListener('click', async (e) => {
    var ele = document.getElementsByName('q36');

    for (i = 0; i < ele.length; i++) {
        if (ele[i].checked) {
            if (ele[i].value == '1') {
                changeTurn()
            }
        }
    }
    document.getElementById('c36').click()
})

document.getElementById('a37').addEventListener('click', async (e) => {
    var ele = document.getElementsByName('q37');

    for (i = 0; i < ele.length; i++) {
        if (ele[i].checked) {
            if (ele[i].value == '3') {
                changeTurn()
            }
        }
    }
    document.getElementById('c37').click()
})

function question() {
    let location = [[39.2, 0], [88.2, -9.8], [49, -9.8],[78.4,-19.6],[9.8,-29.4],[29.4,-39.2],[9.8,-49],[49,-58.8],[58.8,-68.6],[29.4,-78.4],[19.6,0],[58.8,0],[78.4,0],[68.6,-9.8],[29.4,-9.8],[9.8,-9.8],[0,-19.6],[19.6,-19.6],[39.2,-19.6],[58.8,-19.6],[88.2,-29.4],[68.6,-29.4],[49,-29.4],[29.4,-29.4],[0,-39.2],[19.6,-39.2],[58.8,-39.2],[78.4,-39.2],[88.2,-49],[68.6,-49],[49,-49],[29.4,-49],[0,-58.8],[19.6,-58.8],[58.8,-58.8],[78.4,-58.8],[88.2,-68.6],[29.4,-68.6],[9.8,-68.6],[0,-78.4],[58.8,-78.4],[78.4,-78.4],[88.2,-88.2],[68.6,-88.2],[49,-88.2]]

    console.log(location.length)

    for (let i = 0; i < 28; i++) {
        if (marginLeft() == location[i][0] && marginTop() == location[i][1]) {
            document.getElementById(`${i+1}`).click()
        }
        
    }
}

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
        question()
        resolve()
    })
}
function checkladdersandsnakes() {
    let froms = [[58.8, -9.8], [29.4, -19.6], [39.2, -19.6], [88.2, -39.2], [88.2, -49], [29.4, -68.6], [9.8, -88.2]]
    let tos = [[68.6, -29.4], [49, 0], [29.4, -39.2], [88.2, -19.6], [78.4, -68.6], [19.6, -88.2], [19.6, -68.6]]

    for (let i = 0; i < tos.length; i++) {
        if (marginLeft() == froms[i][0] && marginTop() == froms[i][1]) {
            new Audio('win.mp3').play()
            document.querySelector(`#${turn}`).style.marginLeft = `${tos[i][0]}vmin`
            document.querySelector(`#${turn}`).style.marginTop = `${tos[i][1]}vmin`
        }

    }
}
function move(direction) {
    return new Promise(async (resolve, reject) => {
        new Audio('move.mp3').play()
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
        new Audio('diceRoll.mp3').play()
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
