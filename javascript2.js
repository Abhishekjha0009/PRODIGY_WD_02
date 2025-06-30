var hours = 0;
var minutes = 0;
var seconds = 0;

var stopwatch = null;

function updateTimeOnScreen() {
  var h = hours < 10 ? "0" + hours : hours;
  var m = minutes < 10 ? "0" + minutes : minutes;
  var s = seconds < 10 ? "0" + seconds : seconds;

  var display = document.getElementById("time-display");
  display.textContent = h + ":" + m + ":" + s;
}

function countTime() {
  seconds = seconds + 1;

  if (seconds === 60) {
    seconds = 0;
    minutes = minutes + 1;
  }

  if (minutes === 60) {
    minutes = 0;
    hours = hours + 1;
  }

  updateTimeOnScreen();
}

document.getElementById("start").addEventListener("click", function() {
  if (stopwatch === null) {
    stopwatch = setInterval(countTime, 1000);
  }
});

document.getElementById("pause").addEventListener("click", function() {
  clearInterval(stopwatch);
  stopwatch = null;
});

document.getElementById("reset").addEventListener("click", function() {
  clearInterval(stopwatch);
  stopwatch = null;
  hours = 0;
  minutes = 0;
  seconds = 0;
  updateTimeOnScreen();
  document.getElementById("laps-list").innerHTML = "";
});

document.getElementById("lap").addEventListener("click", function() {
  if (stopwatch !== null) {
    var lapTime = document.getElementById("time-display").textContent;
    var newLapItem = document.createElement("li");
    newLapItem.textContent = "Lap: " + lapTime;
    var lapList = document.getElementById("laps-list");
    lapList.appendChild(newLapItem);
  }
});

updateTimeOnScreen();
