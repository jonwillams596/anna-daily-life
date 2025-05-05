
const textarea = document.querySelector("textarea");
const cat = document.getElementById("cat");

textarea.addEventListener("input", () => {
  const textLength = textarea.value.length;
  cat.style.left = Math.min(100 + textLength * 2, 300) + "px";
});
