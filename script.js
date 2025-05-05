
const textarea = document.querySelector("textarea");
const cat = document.getElementById("cat");

let typingTimer;
let isWalking = false;

textarea.addEventListener("input", () => {
  const textLength = textarea.value.length;
  const newLeft = Math.min(100 + textLength * 10, 800);
  cat.style.left = newLeft + "px";

  // 切换为走路状态
  if (!isWalking) {
    cat.style.backgroundImage = "url('cat-walk.gif')";
    isWalking = true;
  }

  // 停止输入后恢复静止图
  clearTimeout(typingTimer);
  typingTimer = setTimeout(() => {
    cat.style.backgroundImage = "url('cat-idle.gif')";
    isWalking = false;
  }, 1000); // 1秒后切回待机
});
