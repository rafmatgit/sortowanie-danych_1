const btn = document.querySelector("a");
const time = document.querySelectorAll("tbody tr td");
const arrow = document.querySelector("i");
const arr = [];

time.forEach(e => {
  if (parseInt(e.innerHTML)) {
    arr.push(parseInt(e.innerHTML));
  }
});

function sortTableFromLowest() {
  arr.sort((a, b) => {
    return a - b;
  });
}

function sortTableFromHighest() {
  arr.sort((a, b) => {
    return b - a;
  });
}

function convertToHours() {
  new Date(parseInt(e.innerHTML) * 1000).toISOString().substr(11, 8);
}
function printTime() {
  let i = 0;
  time.forEach(e => {
    if (parseInt(e.innerHTML)) {
      e.innerHTML = arr[i];
      i++;
    }
  });
}

function changeArrowDirection() {
  if (arr[0] > arr[2]) {
    arrow.classList = "fas fa-caret-down";
  } else {
    arrow.classList = "fas fa-caret-up";
  }
}

function changeTableOrder() {}
