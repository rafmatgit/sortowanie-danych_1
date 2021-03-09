const btn = document.querySelector("a");
const time = document.querySelectorAll("tbody tr td");
const arr = [];

time.forEach((e, i) => {
  if (parseInt(e.innerHTML)) {
    arr.push(
      new Date(parseInt(e.innerHTML) * 1000).toISOString().substr(11, 8)
    );
  }
});
const one = arr[0];
let two = arr[1];
let three = arr[2];

btn.addEventListener("click", () => {
  let i = 0;
  time.forEach(e => {
    if (parseInt(e.innerHTML)) {
      console.log(e.innerHTML, i);
      e.innerHTML = arr[i];
      i++;
    }
  });
});
