// Desenha Bombas

function draw_bomb(arr) {
  let td = document.querySelector(`#p${arr[0]}-${arr[1]}`)
  td.style.background = "url('../images/bomb.png') center"
  td.style.backgroundSize = "contain"
}

// Desenha numeros

function draw_number(arr, count) {
  try{
    let td = document.querySelector(`#p${arr[0]}-${arr[1]}`);
    if (count != 0) {
      td.innerHTML = count;
    }
    else{
      td.innerHTML = "&nbsp&nbsp"
    }
    td.style.background = '#aeb6bf'
    map[arr[0]][arr[1]] = 'number'
  }
  catch(e){
  }
}

// Renderização dos quadrados do jogo

function render_rows() {
  rows = document.querySelectorAll("table#table tr:not(#header)")
  rows.forEach((row, index) => {
    for (let i = 0; i < 7; i++) {
      row.innerHTML += `<td id="p${index}-${i}" onclick="click_check([${index},${i}])"></td>`  
    }
  });
  activate_flag();
}

// Renderização das Bandeiras

function draw_flag(arr) {
  square = document.querySelector(`#p${arr[0]}-${arr[1]}`)
  square.innerHTML = "<i class='fas fa-flag'></i>"
}

function remove_flag(arr) {
  square = document.querySelector(`#p${arr[0]}-${arr[1]}`)
  square.innerHTML = ""
}

// Adiciona quantidade de bombas ao jogo
function draw_how_many_bombs() {
  document.querySelector("#bomb-count").innerHTML = how_many_bombs()
}

render_rows()
