let menu=document.getElementById('menu');
let nav=document.getElementById('nav');
let back=document.getElementById('back');
let menu2=document.getElementById('dMenu')
menu.addEventListener('click', ()=>{

    menu.classList.toggle('rotate')
    menu2.classList.toggle('small')
    menu2.classList.toggle('border')
    nav.classList.toggle('hidden')
    back.classList.toggle('back')
})

$(document).ready(function(){

    var height = $(window).height();

    $('#dMenu').height(height);
});
