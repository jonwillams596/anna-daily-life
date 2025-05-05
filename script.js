let selectedEmoji = '';
const emojiButtons = document.querySelectorAll('.emoji-btn');
const saveBtn = document.getElementById('saveBtn');
const noteInput = document.getElementById('noteInput');
const output = document.getElementById('output');

emojiButtons.forEach(button => {
    button.addEventListener('click', () => {
        emojiButtons.forEach(btn => btn.classList.remove('selected'));
        button.classList.add('selected');
        selectedEmoji = button.textContent;
    });
});

saveBtn.addEventListener('click', () => {
    const note = noteInput.value.trim();
    if (!selectedEmoji || !note) {
        alert("Please select a mood and write a note!");
        return;
    }
    const record = document.createElement('p');
    record.innerHTML = `Today you feel <strong>${selectedEmoji}</strong> and wrote: "${note}"`;
    output.prepend(record);
    noteInput.value = '';
    emojiButtons.forEach(btn => btn.classList.remove('selected'));
    selectedEmoji = '';
});
