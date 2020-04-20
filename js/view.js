// Desenha Bombas

function draw_bomb(arr) {
  let td = document.querySelector(`#p${arr[0]}-${arr[1]}`)
  td.style.background = "url('../images/bomb-blast.jpg') center"
  td.style.backgroundSize = "contain"
}

// Desenha numeros

function draw_number(arr, count) {
  let td = document.querySelector(`#p${arr[0]}-${arr[1]}`);
  if (count != 0) {
    td.innerHTML = count;
  }
  else{
    td.innerHTML = "&nbsp&nbsp"
  }
  td.style.background = '#aeb6bf'
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
  square.innerHTML = "&nbsp"
  square.style.background = "url('../images/flag.png') center"
  square.style.backgroundSize = "contain"
}

function remove_flag(arr) {
  square = document.querySelector(`#p${arr[0]}-${arr[1]}`)
  square.innerHTML = ""
  square.style.background = "white"
}

// Adiciona quantidade de bombas ao jogo

document.querySelector("#bomb-count").innerHTML = how_many_bombs()

render_rows()
