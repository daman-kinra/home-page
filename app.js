const arr = [
  "CARDS",
  "PAYMENTS",
  "LOAN",
  "SUPPORT",
  "REWARDS",
  "SAVINGS",
  "INVESTMENTS",
  "FOREX",
  "ANALYTICS",
];
var cursorVisible = true;
var j = 0;
const func = (j) => {
  var i = 0;
  var txt = arr[j];
  var speed = 350;
  document.getElementById("texts").innerHTML = "";
  function typeWriter() {
    if (i < txt.length) {
      document.getElementById("texts").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }
  typeWriter();
};
setInterval(() => {
  func(j++);
}, 4000);
setInterval(() => {
  j = 0;
}, 36000);
setInterval(function () {
  var cusorDom = document.getElementById("cursor");
  if (cursorVisible) {
    cusorDom.style.opacity = 0;
    cursorVisible = false;
  } else {
    cusorDom.style.opacity = 1;
    cursorVisible = true;
  }
}, 350);
