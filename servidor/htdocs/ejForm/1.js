const nombre = document.getElementById("nombre");
const apellidos = document.getElementById("apellidos").value;
const edad = document.getElementById("edad").value;
const dni = document.getElementById("dni").value;
const mail = document.getElementById("mail").value;
const web = document.getElementById("web").value;
const sugerencia = document.getElementById("sugerencia").value;

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formulario").addEventListener('submit', validate); 
});

function validateText(text){
    if(text!=null && text!='')
        return true;
    else
        return false;
}

function validateEdad(edad){
    if(edad>0 && edad<123 && Number.isInteger(edad))
        return true;
    else
        return false;
}

function validateDni(dni){
    dniReg = /^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKE]$/i;
    if(dniReg.test(dni))
        return true;
    else
        return false;
}
function validateMail( mail ){
    var mailReg = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return mailReg.test(mail) ? true : false;
}

function validateWeb(web){
    var webReg = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
    return webReg.test(web) ? true : false;
}


function validate(evento){
    evento.preventDefault();

    if(!validateText(nombre)){
        alert('Nombre incorrecto: ' + nombre);
        console.log(nombre);
    }
        
    else if(validateText(apellidos))
        alert('Apellidos incorrectos');
    else if(validateEdad(edad))
        alert('Edad incorrecta');
    else if(validateDni(dni))
        alert('Dni incorrecto');
    else if(validateMail(mail))
        alert('Mail incorrecto');
    else if(validateText(sugerencia)) 
        alert('Sugerencia incorrecta');
    else 
        this.submit();
}

