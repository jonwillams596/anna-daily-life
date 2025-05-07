const cat = document.querySelector('.cat');

cat.addEventListener('click', () => {
    alert('Meow! I am G the cat!! I’m so cute, right?');
});

function switchCatImage() {
    cat.src = 'cat_walk.gif';
    
    setTimeout(() => {
        cat.src = 'cat_blink.gif';
    }, 2500);
    
    setTimeout(() => {
        cat.src = 'cat_walk.gif';
    }, 4000);
    
    setTimeout(() => {
        cat.src = 'cat_yawn.gif';
    }, 7000);
    
    setTimeout(() => {
        cat.src = 'cat_walk.gif';
    }, 9000);
}

switchCatImage();
setInterval(switchCatImage, 10000);
