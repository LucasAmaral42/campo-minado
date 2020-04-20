function draw_bomb(arr) {
  let td = document.querySelector(`#p${arr[0]}-${arr[1]}`)
  td.style.background = "url('../images/bomb-blast.jpg') center"
  td.style.backgroundSize = "contain"
}

function draw_number(arr, count) {
  let td = document.querySelector(`#p${arr[0]}-${arr[1]}`);
  if (count != 0) {
    td.innerHTML = count;
  }
  td.style.backgroundColor = '#e5e8e8'
}

// Renderização dos quadrados do jogo

function render_rows() {
  rows = document.querySelectorAll("table#table tr:not(#header)")
  rows.forEach((row, index) => {
    for (let i = 0; i < 9; i++) {
      row.innerHTML += `<td id="p${index}-${i}" onclick="click_check([${index},${i}])"></td>`  
    }
  });
  activate_flag();
}

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

render_rows()
