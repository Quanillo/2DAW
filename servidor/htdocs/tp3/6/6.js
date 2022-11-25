const dias = document.getElementById('dias');
for(let i = 1; i<32; i++){
  dias.add(new Option(i));
}
const meses = document.getElementById('meses');
for(let i = 1; i<13; i++){
  meses.add(new Option(i));
}
const anios = document.getElementById('anios');
for(let i = 1900; i<2023; i++){
  anios.add(new Option(i));
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formulario").addEventListener('submit', validate); 
});


function validate(evento){
    evento.preventDefault();
    let fecha = new Date(anios.value, meses.value, dias.value);
    let nuevo_mes = fecha.getMonth();
    console.log(fecha.getDay())
    if (nuevo_mes != meses.value){
       alert("Fecha incorrecta");
    }else{
        this.submit();
    }
}

