const bar=document.getElementById('bar');
const nav=document.getElementById('navbar');
const close=document.getElementById('close');

bar.addEventListener('click',() =>{
    nav.classList.add('slide');
})

close.addEventListener('click',()=>{
    nav.classList.remove('slide');
})

var mainimg=document.getElementById('main-image');
var smallimg=document.getElementsByClassName('small-image');
for (var i = 0; i <4; i++) {
    smallimg[i].addEventListener("click", function() {
        mainimg.src = this.src; // 'this' refers to the current smallimg element in the loop
    });
}