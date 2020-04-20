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

// Bombas aleatórias
function generate_bombs(bombs) {
  for (let i = 0; i < bombs; i++) {
    pos = random_bombs()
    map[pos[0]][pos[1]] = 1
  }
}

function random_bombs(){
  line = Math.floor(Math.random() * 9)
  col = Math.floor(Math.random() * 9)
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

generate_bombs(15)
timer()