
document.addEventListener("DOMContentLoaded", function () {
  const moodElements = document.querySelectorAll(".mood");
  const selectedMoodBox = document.getElementById("selected-mood-box");
  const saveButton = document.getElementById("save");
  const noteInput = document.getElementById("note");
  const record = document.getElementById("record");

  let selectedMood = "";

  moodElements.forEach((mood) => {
    mood.addEventListener("click", () => {
      selectedMood = mood.getAttribute("data-mood");
      selectedMoodBox.textContent = selectedMood;
    });
  });

  saveButton.addEventListener("click", () => {
    const note = noteInput.value;
    if (selectedMood && note) {
      record.textContent = `Mood: ${selectedMood} | Note: ${note}`;
    } else {
      alert("Please select a mood and enter a note!");
    }
  });
});
