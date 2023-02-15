function rec (n) {
    n == 0 ?  0 : n + rec(n-1)
}

function badRec (n) {
    n + badRec(n-1)
}

function sum (list){
    list.length === 0 ? 0 : list[0].edad + sum(list.shift())
}

console.log(rec(5))

console.log(badRec(5))