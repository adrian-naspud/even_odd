const button = document.querySelector('#button');
const even = document.querySelector('#even');
const odd = document.querySelector('#odd');
const divBy3 = document.querySelector('#divBy3');
const divBy5 = document.querySelector('#divBy5');
const divBy15 = document.querySelector('#divBy15');

count = 0

button.addEventListener('click', sortNums);
function sortNums() {
  increaseNum();
  if (count % 15 === 0) {
    divBy15.innerHTML += `<div class='box' onclick='removeBox(this)'>${count}</div>`;
  } else if (count % 5 === 0) {
    divBy5.innerHTML += `<div class='box' onclick='removeBox(this)'>${count}</div>`;
  } else if (count % 3 === 0) {
    divBy3.innerHTML += `<div class='box' onclick='removeBox(this)'>${count}</div>`;
  } else if (count % 2 === 0) {
    even.innerHTML += `<div class='box' onclick='removeBox(this)'>${count}</div>`;
  } else {
    odd.innerHTML += `<div class='box' onclick='removeBox(this)'>${count}</div>`;
  }
}


function increaseNum() {
  count++;
  button.innerText = count;
}

function removeBox(box) {
  box.remove();
}