
let input = document.getElementById('input');
let button = document.getElementById('button');



function changeColor() {
    console.log('function runs');
    document.body.style.backgroundColor = input.value;
    // document.body.style.backgroundColor = '#' +'00' +'00'+ '00';
}