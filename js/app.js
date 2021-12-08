const text = document.querySelector('#txt_welcome');
const img = document.querySelector('.main1');
const canvas =document.querySelector('#canvas')
text.style.display = "none";
canvas.style.display = "none";

img.addEventListener('mouseenter', function(){
    text.style.display = "block";
    canvas.style.display = "block";
});


img.addEventListener('mouseleave', function(){
    text.style.display = "none";
    canvas.style.display = "none";
});
