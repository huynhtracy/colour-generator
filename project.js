
let btn = document.querySelector('#new-colour');
let colour = document.querySelector('.colour');

let background = document.querySelector('.background');

const colours = ['#A682FF', '#715AFF', '#5887FF', '#55C1FF', '#102E4A', '#E6F14A', '#C3D350', '#FF6663', '#F38D68', '#FE7F2D', '#FCCA46', '#619B8A','#A1C181', '#233D4D', '#F038FF', '#3772FF', '#EF709D', '#E2EF70', '#70E4EF'];
btn.addEventListener('click', function(){
    let rand = Math.floor(Math.random()*colours.length);

    background.style.background = colours[rand];
    console.log(colours[rand]);

    colour.innerText = colours[rand];
})