const button = document.querySelector('.button');
const input = document.querySelector('#input').value;
const result = document.querySelector('.result');

button.onclick = () => {
  const currentDate = Date.now();
  let birthDate = Date.parse(input);
  console.log(currentDate);
  console.log(birthDate);
  let diffInMS = birthDate.Date.parse - currentDate;
  let diffInDays = (diffInMS / (1000*60*60*24))
  let newDate = document.createElement('p');
  newDate.className = 'newDate'
  newDate.innerText = 'До вашего дня рождения осталось:' + diffInDays + 'дней!'
  input.value = ''
  result.appendChild(newDate)
  }