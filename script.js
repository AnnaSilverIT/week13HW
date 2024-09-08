const button = document.querySelector('.button');
const input = document.querySelector('#input');
const result = document.querySelector('.result');

button.onclick = () => {
  const currentDate = Date.now();
  let inputValue = input.value
  let birthDate = Date.parse(inputValue);
  console.log(currentDate);
  console.log(birthDate);
  let diffInMS = birthDate - currentDate;
  let diffInDays = Math.round(diffInMS / (1000*60*60*24))
  let newDate = document.createElement('p');
  console.log(diffInDays)
  newDate.className = 'newDate'
  newDate.innerText = 'До вашего дня рождения осталось: ' + diffInDays + ' дней!'
  input.value = ''
  result.appendChild(newDate)
  }