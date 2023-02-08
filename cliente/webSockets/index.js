const miNuevoMensaje = document.getElementById('nuevo-mensaje')
const misRespuestas = document.getElementById('respuestas')
const btnConnect = document.getElementById('btnConnect')
const btnDisconnect = document.getElementById('btnDisconnect')
const ipList = document.getElementById('ipList')
const msgButton = document.getElementById('buttonmsg')
let newMsgs = []

window.addEventListener('DOMContentLoaded', async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/servidores/`, {
      })
      response.data.map(x=>{
        let option = document.createElement('option');
        option.text = x.url;
        ipList.add(option)
    });
    msgButton.style.display = 'none'
    }
    catch (e) {
      console.log(e)
    }
  })
  
let servidorWS = '';
let miWebSocket;
                   
//Controlamos la conexión a nuestro servidor WebSocket

// Funciones
const open = () => {
    // Abre conexión

    console.log("WebSocket abierto.");   
}

const  message = async (evento) => {
    // Se recibe un mensaje
    console.log("WebSocket ha recibido un mensaje");
    // Mostrar mensaje en HTML
    const mensajeRecibido = await evento.data 
    newMsgs.push(mensajeRecibido)
}

const  error =  (evento) => {
    // Ha ocurrido un error
    console.error("WebSocket ha observado un error: ", evento);
}

const close =  (evento) =>  {
    miWebSocket.close();
    console.log("WebSocket cerrado.");
}

const enviarNuevoMensaje = (evento) => {
    // Evento tecla Enter
    if(evento.code === 'Enter') {
        // Envia mensaje por WebSockets
        miWebSocket.send(miNuevoMensaje.value);
        // Borra texto en el input
        miNuevoMensaje.value = '';
        msgButton.style.display = 'block'
    }
}

// Evento para envia nuevo mensaje
miNuevoMensaje.addEventListener('keypress', enviarNuevoMensaje);

btnDisconnect.addEventListener('click', close);

btnConnect.addEventListener('click', ()=>{
    miWebSocket = new WebSocket(servidorWS);
        //Eventos del webSocket
    miWebSocket.addEventListener('open', open);
    miWebSocket.addEventListener('message', message);
    miWebSocket.addEventListener('error', error);
    miWebSocket.addEventListener('close', close);
});

msgButton.addEventListener('click', ()=>{
    console.log(newMsgs)
    newMsgs.forEach(x=>{
        misRespuestas.innerHTML = misRespuestas.innerHTML.concat( x, '<br>');
    })
    newMsgs = []
    msgButton.style.display = 'none'
})


ipList.addEventListener('click', ()=>{
    servidorWS = ipList.options[ipList.selectedIndex].text;
});