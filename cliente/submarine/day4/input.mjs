import path from 'path';
import fs from 'fs';


const randomNumbers = fs
.readFileSync(path.join('.', 'input.txt'), 'utf8')
.toString()
.trim()
.split('\n')[0]
.split(',')
.map((num) => parseInt(num, 10));
;


const preBoards = fs
.readFileSync(path.join('.', 'input.txt'), 'utf8')
.toString()
.trim()
.split('\n')
.splice(1)
.splice(1);


function toBoards(lista) {
    let r = []
    for(let i=0; i<lista.length; i++){
        if (lista[i] === ''){
            let arr = [];
            for(let k = 5; k>0; k--){
                let arrNum = lista[i-k].split(' ').filter(x=>x!='').map(x=>parseInt(x));
                arr.push(arrNum);
            }
            r.push(arr);
        }
    }
    return r
}


let boards = toBoards(preBoards);



export  { randomNumbers, boards, preBoards };
