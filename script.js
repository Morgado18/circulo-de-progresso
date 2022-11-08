
function enviar() {

  var circle = document.getElementById('circleprogress');
  var aviso = document.getElementById('aviso');
  var number = document.querySelector('#numberProgress').value;

  if(number > 100 || number < 0){
    aviso.innerHTML = "Valor invalido"
    aviso.style.color = 'red'
  }
  else{
    document.querySelector('.number').innerHTML = number + "%";
    circle.style.strokeDashoffset = 440 - (440 * number) / 100;
    aviso.innerHTML = ""
  }

}