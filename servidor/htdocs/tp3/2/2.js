const base = document.getElementById("base");
const altura = document.getElementById("altura");


document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formulario").addEventListener('submit', validate); 
});

function validate(){
        this.submit();
}

