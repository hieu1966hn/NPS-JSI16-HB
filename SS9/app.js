var today = new Date("2024-01-28T12:00:00+07:00");
let isRuning = false;
function showTime() {
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  if (h > 12) {
    h -= 12;
  }

  document.getElementById("time").innerHTML = `${h}:${m}:${s}`;
}
function start() {
    console.log("Chạy hàm start");
  isRuning = true;
  setInterval(showTime, 1000);
}

function pause() {
    console.log("Chạy hàm pause");
  isRuning = false;
  clearInterval(showTime);
}

document.getElementById("start").addEventListener("click", start);

document.getElementById("pause").addEventListener("click", pause);
