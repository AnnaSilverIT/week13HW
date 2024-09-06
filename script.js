const btn = document.querySelector('.button');
const input = document.querySelector('#input');
const result = document.querySelector('.result')

// const function count() {
    
//   }
btn.onclick = () => {
  let newDate = document.createElement('p');
  newDate.className = 'newDate'
  newDate.innerText = 'До вашего дня рождения осталось:' 
  input.value = ''
  result.appendChild(newDate)
  }