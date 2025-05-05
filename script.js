
const textarea = document.querySelector('textarea');
const cat = document.getElementById('cat');

textarea.addEventListener('input', () => {
    // Move the cat randomly on typing
    const left = Math.random() * 250;
    cat.style.left = left + 'px';
});
