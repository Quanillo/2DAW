import input from './input.mjs';

const prueba = [
1000,
2000,
3000,
"",
4000,
"",
5000,
6000,
"",
7000,
8000,
9000,
"",
10000,
]
let cal = 0;
const calxElfo = prueba.reduce((ac, el)=>{
    if(el===''){
        ac.push(cal);
        cal=0;
    }else{
        cal+=el;
    }
}, [])

auxiliar
          .sort()
          .map((el,idx,arr)=>  (idx % 2 == 1) ? [el,arr[idx-1]]: null)
          .filter( el => el !== null);

console.log(calxElfo);

/*
prueba.reduce((ac, el)=>{
    if(el===""){
        
        ac = 0;
    }
    else{
        console.log(el)
        ac+=el
    }
})
*/

/*
let calxElfo = [];
let ac = 0;
input.map(el=>{
    if(el===''){
        calxElfo.push(ac);
        ac = 0;
    }
    else{
        ac+=Number(el);
    }
});
*/