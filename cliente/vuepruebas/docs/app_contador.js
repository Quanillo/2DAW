const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            negativo: false,
            listaMultiplos:[],
        }
    },
    methods:{
        suma(){
            this.counter++;
            if(this.counter%3==0 && !this.listaMultiplos.includes(this.counter)){
                this.listaMultiplos.push(this.counter);
            }
                
        },
        resta(){
            this.counter--;
            if(this.counter%3==0 && !this.listaMultiplos.includes(this.counter)){
                this.listaMultiplos.push(this.counter);
            }
        },
        reset(){
            this.counter = 0;
        },
        
    },
});
app.mount('#miApp');