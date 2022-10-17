const app = Vue.createApp({
    data() {
        return {
            newElemento:'',
            listaElementos: [],
            newElemento2:'',
            listaElementos2: [],
        }
    },
    methods:{
        addElemento(){
            this.listaElementos.push( this.newElemento );
            this.newElemento = '';
        },
        eliminaElemento(elemento){
            this.listaElementos = this.listaElementos.filter(el => el != elemento);
        },
        aniadeElemento2(){
            this.listaElementos2.push( this.newElemento2 );
            this.newElemento2='';
        }
    },
});
app.mount('#miApp');