let sel = document.getElementById('toggle-image1')
let canv = document.getElementById('alter')
sel.addEventListener('click',toggleImgOne)

function toggleImgOne(e){
    canv.src = "./images/Beach.jpg"
}

let sel1 = document.getElementById('toggle-image2')
let canv1 = document.getElementById('alter')
sel1.addEventListener('click',toggleImgTwo)

function toggleImgTwo(e){
    canv1.src = "./images/Meadow.jpg"
}

let sel2 = document.getElementById('toggle-image3')
let canv2 = document.getElementById('alter')
sel2.addEventListener('click',toggleImgThree)

function toggleImgThree(e){
    canv2.src = "./images/Snow.jpg"
}

let sel3 = document.getElementById('toggle-image4')
let canv3 = document.getElementById('alter')
sel3.addEventListener('click',toggleImgFour)

function toggleImgFour(e){
    canv2.src = "./images/Sunrise.jpg"
}

let sel4 = document.getElementById('toggle-image5')
let canv4 = document.getElementById('alter')
sel4.addEventListener('click',toggleImgFive)

function toggleImgFive(e){
    canv2.src = "./images/Sunset.jpg"
}