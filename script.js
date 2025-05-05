
let selectedMood = "";

document.querySelectorAll(".mood").forEach(el => {
    el.addEventListener("click", () => {
        selectedMood = el.textContent;
    });
});

function saveMood() {
    const note = document.getElementById("note").value;
    if (selectedMood || note) {
        const data = { mood: selectedMood, note: note };
        localStorage.setItem("todayMood", JSON.stringify(data));
        displayMood();
    }
}

function displayMood() {
    const data = JSON.parse(localStorage.getItem("todayMood"));
    if (data) {
        document.getElementById("today-record").textContent =
            `Mood: ${data.mood} | Note: ${data.note}`;
    }
}

window.onload = displayMood;
