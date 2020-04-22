// Mapa Jogo
map = [
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0]
]
var flags = []
var fc = true;

// Verificação dos cliques
function click_check(arr) {
  if (fc == true) {
    generate_bombs(10)
    if (check(arr)) {
      map[arr[0]][arr[1]] = 0;
      not_a_bomb(arr)
    }
    fc = false
  }
  if (not_a_number(arr)) {
    check(arr)? is_a_bomb(arr) : not_a_bomb(arr)  
  }
  draw_how_many_bombs()
}

// Verifica se é uma bomba ou não
function check(arr) {
  try {
    return map[arr[0]][arr[1]] == 1
  }
  catch(e){
  }
}

// Limpa a tela
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
  if (valid_size(arr) && not_a_number(arr)) {
    let around = {
      "up-left": [arr[0]-1, arr[1]-1],
      "up": [arr[0]-1, arr[1]],
      "up-right": [arr[0]-1, arr[1]+1],
      "right": [arr[0], arr[1]+1],
      "down-right": [arr[0]+1, arr[1]+1],
      "down": [arr[0]+1, arr[1]],
      "down-left": [arr[0]+1, arr[1]-1],
      "left": [arr[0], arr[1]-1]
    }
    let count = 0
    for (const [key, value] of Object.entries(around)) {
      check(value)? count++ : null
    }
    draw_number(arr, count)
    if (count == 0) {
      for (const [key, value] of Object.entries(around)) {
        not_a_bomb(value)
      }
    }
  }
}

// Bombas aleatórias
function generate_bombs(bombs) {
  for (let i = 0; i < bombs; i++) {
    let pos = random_bombs()
    map[pos[0]][pos[1]] = 1
  }
}

function random_bombs(){
  let line = Math.floor(Math.random() * 7)
  let col = Math.floor(Math.random() * 7)
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

// Flag
function activate_flag() {
  let squares = document.querySelectorAll('td') 
  squares.forEach((square) =>{
    square.addEventListener('contextmenu', e => {
      e.preventDefault();
      s = square.id
      pos = s.match(/p(\d)-(\d)/);
      pos = [parseInt(pos[1]), parseInt(pos[2])]
      if (not_a_number(pos)) {
        flag(pos)
      }
    })
  }) 
}

// Bandeiras
function flag(arr) {
  square = document.querySelector(`#p${arr[0]}-${arr[1]}`)
  if (square.childElementCount != 0) {
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
      flags.splice(index, 1)
    } 
  });
}

// Verifica se ganhou
function win() {
  let bombs = how_many_bombs();
  let count = 0;
  flags.forEach(ele => {
    check(ele)? count++ : null
  })
  if (count == bombs && count == flags.length) {
    alert("Você ganhou!!!")
  }
  else{
    alert("Quase lá!")
  }
}

// Verifica as bombas
function verify() {
  if (isMobileDevice()) {
    for (let i = 0; i < map.length; i++) {
      for (let j = 0; j < map[i].length; j++) {
        if (map[i][j] != "number") {
          flag([i,j])
        }
      }
    }
  }
  win()
}

// Quantidade de bombas no jogo

function how_many_bombs() {
  count = 0;
  for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map[i].length; j++) {
      if (map[i][j] == 1) {
        count++;
      }      
    }
  }
  return count
}

// Verifica se é mobile
function isMobileDevice() {
  return (typeof window.orientation !== "undefined") 
  || (navigator.userAgent.indexOf('IEMobile') !== -1);
};

// Verifica se está dentro do mapa
function valid_size(arr) {
  return arr[0] >= 0 && arr[0] < map.length && arr[1] >= 0 && arr[1] < map.length
}

// Não é um número
function not_a_number(arr) {
  return document.querySelector(`#p${arr[0]}-${arr[1]}`).innerHTML == '' ||
  document.querySelector(`#p${arr[0]}-${arr[1]}`).childElementCount != 0
}


timer()