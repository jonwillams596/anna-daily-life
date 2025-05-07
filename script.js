
const textarea = document.getElementById('note');
const cat = document.getElementById('cat');

textarea.addEventListener('input', () => {
  if (textarea.value.trim() !== '') {
    cat.classList.remove('hidden');
  } else {
    cat.classList.add('hidden');
  }
});
