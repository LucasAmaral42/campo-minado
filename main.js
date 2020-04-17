map = [
  [1,0,0,1,0,0,0,1,0],
  [0,0,0,0,0,0,0,0,1],
  [0,0,1,0,1,0,0,0,0],
  [0,0,0,0,1,0,0,0,1],
  [0,1,0,0,0,0,0,0,0],
  [1,0,0,1,0,1,0,0,0],
  [0,1,0,0,0,0,0,0,0],
  [0,1,0,0,0,0,0,1,1],
  [0,0,1,0,0,0,0,1,0]
]

function click_check(arr) {
  check(arr)? is_a_bomb(arr) : not_a_bomb(arr)  
}

function check(arr) {
  try {
    return map[arr[0]][arr[1]] == 1
  }
  catch(e){
  }
}

function screen_cleaner() {
  let squares = document.querySelectorAll("td")
  squares.forEach(square => {
    square.style.background = "none"
    square.innerHTML = ''
  });
}

function is_a_bomb(arr) {
  let td = document.querySelector(`#p${arr[0]}-${arr[1]}`)
  draw_bomb(arr)
  alert("Você perdeu")
  screen_cleaner()
}

function not_a_bomb(arr, previous) {
  previous += arr
  around = {
    "up-left": [arr[0]-1, arr[1]-1],
    "up": [arr[0]-1, arr[1]],
    "up-right": [arr[0]-1, arr[1]+1],
    "right": [arr[0], arr[1]+1],
    "down-right": [arr[0]+1, arr[1]+1],
    "down": [arr[0]+1, arr[1]],
    "down-left": [arr[0]+1, arr[1]-1],
    "left": [arr[0], arr[1]-1]
  }
  
  let count = 0;
  for (const [key, value] of Object.entries(around)) {
    check(value)? count++ : null
  }
  
  draw_number(arr, count)
}

function draw_bomb(arr) {
  let td = document.querySelector(`#p${arr[0]}-${arr[1]}`)
  td.style.background = "url('images/bomb-blast.jpg') center"
  td.style.backgroundSize = "contain"
}

function draw_number(arr, count) {
  let td = document.querySelector(`#p${arr[0]}-${arr[1]}`);
  td.innerHTML = count;
  td.style.backgroundColor = '#ccd1d1'
}

rows = document.querySelectorAll("table#table tr:not(#header)")
rows.forEach((row, index) => {
  for (let i = 0; i < 9; i++) {
    row.innerHTML += `<td id="p${index}-${i}" onclick="click_check([${index},${i}])"></td>`  
  }
});