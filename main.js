const one = document.getElementById('one')
const two = document.getElementById('two')
const three = document.getElementById('three')
const four = document.getElementById('four')
const five = document.getElementById('five')
const six = document.getElementById('six')
const seven = document.getElementById('seven')
const eight = document.getElementById('eight')
const nine = document.getElementById('nine')

let logic = 1
document.getElementById('turn').innerHTML = "Its <div id='oo'>x</div> turn"
let xo = 'x'

function op(num) {
    logic = logic + 1
    console.log(logic)
    if (logic % 2 != 0) {
        xo = 'o'
        document.getElementById('turn').innerHTML = "Its <div id='oo'>x</div> turn"
    } else {
        xo = 'x'
        document.getElementById('turn').innerHTML = "Its <div id='oo'>o</div> turn"
    }

    if (num == 1) {
        one.innerHTML = xo
        one.onclick = null
    } else if (num == 2) {
        two.innerHTML = xo
        two.onclick = null
    } else if (num == 3) {
        three.innerHTML = xo
        three.onclick = null
    } else if (num == 4) {
        four.innerHTML = xo
        four.onclick = null
    } else if (num == 5) {
        five.innerHTML = xo
        five.onclick = null
    } else if (num == 6) {
        six.innerHTML = xo
        six.onclick = null
    } else if (num == 7) {
        seven.innerHTML = xo
        seven.onclick = null
    } else if (num == 8) {
        eight.innerHTML = xo
        eight.onclick = null
    } else if (num == 9) {
        nine.innerHTML = xo
        nine.onclick = null
    } else { }

    if (one.innerHTML == 'x' && two.innerHTML == 'x' && three.innerHTML == 'x') {
        document.getElementById('turn').innerHTML = "<div id='oo'>x</div> won"
        one.onclick = null
        two.onclick = null
        three.onclick = null
        four.onclick = null
        five.onclick = null
        six.onclick = null
        seven.onclick = null
        eight.onclick = null
        nine.onclick = null

        one.style.color = "black"
        two.style.color = "black"
        three.style.color = "black"
    } else if (one.innerHTML == 'x' && four.innerHTML == 'x' && seven.innerHTML == 'x') {
        document.getElementById('turn').innerHTML = "<div id='oo'>x</div> won"
        one.onclick = null
        two.onclick = null
        three.onclick = null
        four.onclick = null
        five.onclick = null
        six.onclick = null
        seven.onclick = null
        eight.onclick = null
        nine.onclick = null

        one.style.color = "black"
        four.style.color = "black"
        seven.style.color = "black"
    } else if (seven.innerHTML == 'x' && eight.innerHTML == 'x' && nine.innerHTML == 'x') {
        document.getElementById('turn').innerHTML = "<div id='oo'>x</div> won"
        one.onclick = null
        two.onclick = null
        three.onclick = null
        four.onclick = null
        five.onclick = null
        six.onclick = null
        seven.onclick = null
        eight.onclick = null
        nine.onclick = null

        seven.style.color = "black"
        eight.style.color = "black"
        nine.style.color = "black"
    } else if (nine.innerHTML == 'x' && six.innerHTML == 'x' && three.innerHTML == 'x') {
        document.getElementById('turn').innerHTML = "<div id='oo'>x</div> won"
        one.onclick = null
        two.onclick = null
        three.onclick = null
        four.onclick = null
        five.onclick = null
        six.onclick = null
        seven.onclick = null
        eight.onclick = null
        nine.onclick = null

        nine.style.color = "black"
        six.style.color = "black"
        three.style.color = "black"
    } else if (one.innerHTML == 'x' && five.innerHTML == 'x' && nine.innerHTML == 'x') {
        document.getElementById('turn').innerHTML = "<div id='oo'>x</div> won"
        one.onclick = null
        two.onclick = null
        three.onclick = null
        four.onclick = null
        five.onclick = null
        six.onclick = null
        seven.onclick = null
        eight.onclick = null
        nine.onclick = null

        one.style.color = "black"
        five.style.color = "black"
        nine.style.color = "black"
    } else if (seven.innerHTML == 'x' && five.innerHTML == 'x' && three.innerHTML == 'x') {
        document.getElementById('turn').innerHTML = "<div id='oo'>x</div> won"
        one.onclick = null
        two.onclick = null
        three.onclick = null
        four.onclick = null
        five.onclick = null
        six.onclick = null
        seven.onclick = null
        eight.onclick = null
        nine.onclick = null

        seven.style.color = "black"
        five.style.color = "black"
        three.style.color = "black"
    } else if (four.innerHTML == 'x' && five.innerHTML == 'x' && six.innerHTML == 'x') {
        document.getElementById('turn').innerHTML = "<div id='oo'>x</div> won"
        one.onclick = null
        two.onclick = null
        three.onclick = null
        four.onclick = null
        five.onclick = null
        six.onclick = null
        seven.onclick = null
        eight.onclick = null
        nine.onclick = null

        four.style.color = "black"
        five.style.color = "black"
        six.style.color = "black"
    } else if (two.innerHTML == 'x' && five.innerHTML == 'x' && eight.innerHTML == 'x') {
        document.getElementById('turn').innerHTML = "<div id='oo'>x</div> won"
        one.onclick = null
        two.onclick = null
        three.onclick = null
        four.onclick = null
        five.onclick = null
        six.onclick = null
        seven.onclick = null
        eight.onclick = null
        nine.onclick = null

        two.style.color = "black"
        five.style.color = "black"
        eight.style.color = "black"
    } else if (one.innerHTML == 'o' && two.innerHTML == 'o' && three.innerHTML == 'o') {
        document.getElementById('turn').innerHTML = "<div id='oo'>o</div> won"
        one.onclick = null
        two.onclick = null
        three.onclick = null
        four.onclick = null
        five.onclick = null
        six.onclick = null
        seven.onclick = null
        eight.onclick = null
        nine.onclick = null

        one.style.color = "black"
        two.style.color = "black"
        three.style.color = "black"
    } else if (one.innerHTML == 'o' && four.innerHTML == 'o' && seven.innerHTML == 'o') {
        document.getElementById('turn').innerHTML = "<div id='oo'>o</div> won"
        one.onclick = null
        two.onclick = null
        three.onclick = null
        four.onclick = null
        five.onclick = null
        six.onclick = null
        seven.onclick = null
        eight.onclick = null
        nine.onclick = null

        four.style.color = "black"
        one.style.color = "black"
        seven.style.color = "blackck"
    } else if (seven.innerHTML == 'o' && eight.innerHTML == 'o' && nine.innerHTML == 'o') {
        document.getElementById('turn').innerHTML = "<div id='oo'>o</div> won"
        one.onclick = null
        two.onclick = null
        three.onclick = null
        four.onclick = null
        five.onclick = null
        six.onclick = null
        seven.onclick = null
        eight.onclick = null
        nine.onclick = null

        seven.style.color = "black"
        eight.style.color = "black"
        nine.style.color = "black"
    } else if (nine.innerHTML == 'o' && six.innerHTML == 'o' && three.innerHTML == 'o') {
        document.getElementById('turn').innerHTML = "<div id='oo'>o</div> won"
        one.onclick = null
        two.onclick = null
        three.onclick = null
        four.onclick = null
        five.onclick = null
        six.onclick = null
        seven.onclick = null
        eight.onclick = null
        nine.onclick = null

        nine.style.color = "black"
        three.style.color = "black"
        six.style.color = "black"
    } else if (one.innerHTML == 'o' && five.innerHTML == 'o' && nine.innerHTML == 'o') {
        document.getElementById('turn').innerHTML = "<div id='oo'>o</div> won"
        one.onclick = null
        two.onclick = null
        three.onclick = null
        four.onclick = null
        five.onclick = null
        six.onclick = null
        seven.onclick = null
        eight.onclick = null
        nine.onclick = null

        one.style.color = "black"
        five.style.color = "black"
        nine.style.color = "black"
    } else if (seven.innerHTML == 'o' && five.innerHTML == 'o' && three.innerHTML == 'o') {
        document.getElementById('turn').innerHTML = "<div id='oo'>o</div> won"
        one.onclick = null
        two.onclick = null
        three.onclick = null
        four.onclick = null
        five.onclick = null
        six.onclick = null
        seven.onclick = null
        eight.onclick = null
        nine.onclick = null

        seven.style.color = "black"
        five.style.color = "black"
        three.style.color = "black"
    } else if (four.innerHTML == 'o' && five.innerHTML == 'o' && six.innerHTML == 'o') {
        document.getElementById('turn').innerHTML = "<div id='oo'>o</div> won"
        one.onclick = null
        two.onclick = null
        three.onclick = null
        four.onclick = null
        five.onclick = null
        six.onclick = null
        seven.onclick = null
        eight.onclick = null
        nine.onclick = null

        four.style.color = "black"
        five.style.color = "black"
        six.style.color = "black"
    } else if (two.innerHTML == 'o' && five.innerHTML == 'o' && eight.innerHTML == 'o') {
        document.getElementById('turn').innerHTML = "<div id='oo'>o</div> won"
        one.onclick = null
        two.onclick = null
        three.onclick = null
        four.onclick = null
        five.onclick = null
        six.onclick = null
        seven.onclick = null
        eight.onclick = null
        nine.onclick = null

        two.style.color = "black"
        five.style.color = "black"
        eight.style.color = "black"
    } else if (logic == 10) {
        document.getElementById('turn').innerHTML = "Its a <div id='oo'>Draw</div>"
        one.onclick = null
        two.onclick = null
        three.onclick = null
        four.onclick = null
        five.onclick = null
        six.onclick = null
        seven.onclick = null
        eight.onclick = null
        nine.onclick = null

        one.style.color = "black"
        two.style.color = "black"
        three.style.color = "black"
        four.style.color = "black"
        five.style.color = "black"
        six.style.color = "black"
        seven.style.color = "black"
        eight.style.color = "black"
        nine.style.color = "black"
    } else { }
}

function res() {
    location.reload()
}