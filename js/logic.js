// Mapa Jogo
map = [
  [0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0]
]
var flags = []

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
  location.reload()
}

function is_a_bomb(arr) {
  let td = document.querySelector(`#p${arr[0]}-${arr[1]}`)
  draw_bomb(arr)
  alert("Você perdeu")
  screen_cleaner()
}

function not_a_bomb(arr) {
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

// Bombas aleatórias
function generate_bombs(bombs) {
  for (let i = 0; i < bombs; i++) {
    pos = random_bombs()
    map[pos[0]][pos[1]] = 1
  }
}

function random_bombs(){
  let line = Math.floor(Math.random() * 9)
  let col = Math.floor(Math.random() * 9)
  return [line, col]
}

// Timer
function timer() {
  let s = 0
  let l = document.getElementById("time")
  setInterval(function() {
    l.innerHTML = s
    s++
  }, 1000)
}

function activate_flag() {
  let squares = document.querySelectorAll('td')
  squares.forEach((square) =>{
    square.addEventListener('contextmenu', e => {
      e.preventDefault();
      s = square.id
      pos = s.match(/p(\d)-(\d)/);
      pos = [parseInt(pos[1]), parseInt(pos[2])]
      if (!is_a_number(pos)) {
        flag(pos)
      }
    })
  }) 
}

function is_a_number(arr) {
  
}

function flag(arr) {
  square = document.querySelector(`#p${arr[0]}-${arr[1]}`)
  if (square.innerHTML == "&nbsp;") {
    flags_remove(arr)
    remove_flag(arr)
  }
  else{
    flags.push(arr)
    draw_flag(arr)
  }
}

function flags_remove(arr) {
  flags.forEach((e, index) => {
    if (e[0] == arr[0] && e[1] == arr[1]) {
      delete flags[index]
    } 
  });
}

generate_bombs(15)
timer()