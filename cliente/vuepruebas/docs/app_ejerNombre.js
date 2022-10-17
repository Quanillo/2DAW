const app = Vue.createApp({
    data() {
        return {
            nombre: '',
            nombreIntro: '',
            apellido: '',
            apellidoIntro: '',
            listaElementos: [1,2,3,4,5],
        }
    },
    methods:{
        addNombre(){
            this.nombre = this.nombreIntro;
            this.nombreIntro = '';
        },
        addApellido(){
            this.apellido = this.apellidoIntro;
            this.apellidoIntro = '';
        },
    },
});
app.mount('#miApp');