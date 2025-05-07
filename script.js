
const cat = document.getElementById('cat');
const input = document.getElementById('noteInput');

input.addEventListener('input', () => {
    cat.style.left = Math.random() * 100 + 'px';
    cat.style.top = Math.random() * 50 + 'px';
});
