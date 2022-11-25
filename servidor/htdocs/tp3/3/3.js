const num = document.getElementById("num");


document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formulario").addEventListener('submit', validate); 
});

function validate(){
        this.submit();
}

