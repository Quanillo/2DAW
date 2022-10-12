import { randomNumbers, boards, preBoards }  from './input.mjs';

let rnumbers = [7,4,9,5,11,17,23,2,0,14,21,24,10,16,13,6,15,25,12,22,18,20,8,19,3,26,1]

let rboards = [
    [    
        [22, 13, 17, 11, 0],
        [8, 2, 23, 4, 24],
        [21, 9, 14, 16, 7],
        [6, 10, 3, 18, 5],
        [1, 12, 20, 15, 19]
    ],
    [
        [3, 15, 0, 2, 22],
        [9, 18, 13, 17, 5],
        [19, 8, 7, 25, 23],
        [20, 11, 10, 24, 4],
        [14, 21, 16, 12, 6] 
    ],     
    [
        [14, 21, 17, 24, 4],
        [10, 16, 15, 9, 19],
        [18 ,8, 23, 26, 20],
        [22, 11, 13, 6, 5],
        [2, 0, 12, 3, 7] 
    ]
];

let arr =[...rboards];

for(let i= 0; i<rnumbers.length; i++){
    let finded = false;
    arr.push(rnumbers[i]);
    if(i%5===0 || i<rnumbers.length-5){
        boards.map((x, i1)=>{
            let tab = i1;
            x.map((k, i2)=>{
                let fil = i2;
                k.map((j, i3, line)=>{
                    let col = i3;
                    for(let i4 = 0; i4<arr.length; i4++){
                        if(j===arr[i4]){
                            //console.log(j);
                            line[i3]=true;
                            //console.log(j);
                        }
                    }
                })
                console.log(k);
                if(k.reduce((acc, el) => el === true ? acc+1 : acc) === 5 && finded ===false){
                    console.log("encontrado " + rboards[tab][fil][col]);
                    finded = true;
                }
            })
        });
    }
    
}







//console.log(rnumbers);
//console.log(rboards);