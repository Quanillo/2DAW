import path from 'path';
import fs from 'fs';

const input = fs
	.readFileSync(path.join('.', 'input.txt'), 'utf8')
	.toString()
	.trim()
    .split('\n');
 //console.log(input);

 function empareja (lista){
    let parejas = []
    if(lista.length % 2 !== 0){
        console.log('La lista tiene que ser par')
    }
    else{
        while(lista.length > 0 ){
            let par = [];
            let p1 = Math.floor(Math.random() * lista.length);
            par.push(lista[p1]);
            lista.splice(p1, 1);
            let p2 = Math.floor(Math.random() * lista.length);
            par.push(lista[p2]);
            lista.splice(p2, 1);
            parejas.push(par)
        }
    }
    return parejas;
 }

 //console.log(empareja(input))


 let lista = [1,2,3,4,5];

 console.log(lista.sort(()=>Math.random() -0.5));
