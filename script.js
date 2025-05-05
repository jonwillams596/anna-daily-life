
function saveNote() {
    const note = document.querySelector("textarea").value;
    const moodResponse = getRandomResponse();
    alert(moodResponse + "\nYou wrote: " + note);
}
function getRandomResponse() {
    const responses = [
        "Aww baby, you did so well today!",
        "Sending kisses and sparkles!",
        "You’re my sunshine, even on cloudy days.",
        "Let’s cuddle and forget all worries.",
        "Time to relax, you earned it, baby."
    ];
    return responses[Math.floor(Math.random() * responses.length)];
}
