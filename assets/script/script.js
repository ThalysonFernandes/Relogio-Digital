let horas = document.getElementById('horas');
let minutos = document.getElementById('minutos');
let segundos = document.getElementById('segundos');




let relogio = setInterval(function time(){

  let dataAtual = new Date()
  let hrs = dataAtual.getHours()
  let mnts = dataAtual.getMinutes()
  let sgds = dataAtual.getSeconds()

  if(hrs < 10){
    hrs = '0' + hrs
  }
  if(mnts < 10){
    mnts = '0' + mnts

  }
  if(sgds < 10){
    sgds = '0' + sgds
  }

  horas.textContent = hrs;
  minutos.textContent= mnts;
  segundos.textContent= sgds;
}, 100)
