let luckyNumber = document.querySelector('.luckyNumber');

function buttonClick() {
 luckyNumber.innerHTML = Math.round(Math.random() * 1000);
}

  document.querySelector('button').addEventListener('click', buttonClick);
