
const calendar = document.getElementById("calendar");
const popup = document.getElementById("popup");
const saveBtn = document.getElementById("saveBtn");
const emojis = popup.querySelectorAll(".emojis span");
const textarea = popup.querySelector("textarea");

let selectedDay = null;

// 创建简单的30天日历
for (let i = 1; i <= 30; i++) {
  const day = document.createElement("div");
  day.className = "day";
  day.innerText = i;
  day.addEventListener("click", () => {
    selectedDay = day;
    popup.classList.remove("hidden");
  });
  calendar.appendChild(day);
}

// 点击表情时标记在格子上
emojis.forEach(emoji => {
  emoji.addEventListener("click", () => {
    if (selectedDay) {
      selectedDay.innerText = selectedDay.innerText.split(" ")[0] + " " + emoji.innerText;
    }
  });
});

// 保存按钮点击事件
saveBtn.addEventListener("click", () => {
  popup.classList.add("hidden");
  textarea.value = "";
});
