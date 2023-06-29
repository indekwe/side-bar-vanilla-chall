const cross=document.getElementById('cross');
const menu=document.getElementById('menu')
const cancel=document.getElementById('cancel')
const aside = document.getElementById('side-bar');
/*
cross.addEventListener('mouseenter', function(){
    cross.style.transform='rotate(90deg)'
});
cross.addEventListener('mouseleave', function(){
    cross.style.transform='rotate(0deg)';
});
setInterval(function(){
    menu.setAttribute('style', 'transform: scale(1.5); transition: transform 1s ease-in-out')
}, 1000);
*/
cancel.addEventListener('click', function(){
    aside.setAttribute('style', 'transform: translateY(-100%)');
})
menu.addEventListener('click', function(){
    aside.setAttribute('style', 'transform: translateY(0%)')
})
console.log(aside);