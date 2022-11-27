<template>
    <p  v-for="(item, index) in this.input" :key="index">{{ item }}</p>
    <button>Random</button>
</template>

<script>
    
    import path from 'path';
    import fs from 'fs';

  export default {
    name: 'Par',
    created() {
    this.input = fs
        .readFileSync(path.join('.', 'input.txt'), 'utf8')
        .toString()
        .trim()
        .split('\n');
    },
    data() {
        return {
            input: [],
            par: [], 
        }
    },
    methods: {
        empareja (){
            let parejas = []
            if(this.imput.length % 2 !== 0){
                console.log('La this.imput tiene que ser par')
            }
            else{
                while(this.imput.length > 0 ){
                    let par = [];
                    let p1 = Math.floor(Math.random() * this.imput.length);
                    par.push(this.imput[p1]);
                    this.imput.splice(p1, 1);
                    let p2 = Math.floor(Math.random() * this.imput.length);
                    par.push(this.imput[p2]);
                    this.imput.splice(p2, 1);
                    parejas.push(par)
                }
            }
            this.par = parejas;
        }
    },
}
</script>

<style scoped>

</style>
