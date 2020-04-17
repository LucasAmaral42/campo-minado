map = [
  [1,0,0,1,0,0,0,1,0],
  [0,0,0,0,0,0,0,0,1],
  [0,0,1,0,1,0,0,0,0],
  [0,0,0,0,1,0,0,0,1],
  [0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0]
]

function click_check(arr) {
  check(arr)? is_a_bomb(arr) : console.log(arr, "não é uma bomba")  
}

function check(arr) {
  return map[arr[0]][arr[1]] == 1
}

function screen_cleaner() {
  squares = document.querySelectorAll("td")
  squares.forEach(square => {
    square.style.backgroundColor = "white"
  });
}

function is_a_bomb(arr) {
  td = document.querySelector(`#p${arr[0]}-${arr[1]}`)
  td.style.backgroundColor = 'red'
}



rows = document.querySelectorAll("table#table tr:not(#header)")
rows.forEach((row, index) => {
  for (let i = 0; i < 9; i++) {
    row.innerHTML += `<td id="p${index}-${i}" onclick="click_check([${index},${i}])"></td>`  
  }
});