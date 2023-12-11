
let nextColor = '';
let num = 1;
const apiUrl = 'https://color-picker-26p7.onrender.com';
function submit () {

  let ele = document.querySelector('.input');
  let hexColor = ele.value;

  fetch(`${apiUrl}/api/color/${hexColor}`)
    .then(response => response.json())
    .then(json => {
      draw(json.analogous)
    }
    )
    .catch(err => console.log('Request Failed', err));

}

//   fetch(`${apiUrl}/api/color/${hexColor}`)

// .then(data => {
//   
//   let _data = JSON.parse(data)
//   console.log(data.analogous)
//   
//   draw(data.analogous)
// })
// .catch(error => console.error('Error:', error));
// }

function draw (list) {

  let num = Math.floor(Math.random() * 25);
  let html = '';
  nextColor = list[0];

  let color1 = list[0]
  let color2 = list[1]
  for (let i = 0; i < 25; i++) {
    if (num == i) {
      html += `<div class='item' style='background-color:${color2}' onclick='nextDraw()'></div>`
    } else {
      html += `<div class='item' style='background-color:${color1}' onclick='end()'></div>`
    }
  }
  let ele = document.querySelector('.area');
  ele.innerHTML = html
}

function end () {
  alert('Wrong answer!!');
  let ele = document.querySelector('.num');
  num = 1;
  ele.innerHTML = num
  let ele2 = document.querySelector('.area');
  ele2.innerHTML = ''
}
function nextDraw () {
  alert('Correct!Next Question!')
  let ele = document.querySelector('.num');
  ele.innerHTML = ++num
  let hexColor = nextColor
  hexColor = hexColor.replace('#', '')
  fetch(`${apiUrl}/api/color/${hexColor}`)
    .then(response => response.json())
    .then(json => {
      draw(json.analogous)
    }
    )
    .catch(err => console.log('Request Failed', err));


}


