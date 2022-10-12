const superHeroes = [
    {nombre:'Batman', tipo:'DC'},
    {nombre:'Linterna Verde', tipo:'DC'},
    {nombre:'Lobezno', tipo:'Marvel'},
    {nombre:'Spiderman', tipo:'Marvel'},
    ];
//1    
const filtraLista = (lista, tipo) => lista.filter(x => x.tipo === tipo);
     
let superHeroesDC = filtraLista(superHeroes, 'DC');
    
console.log(superHeroesDC);
//2    
//const cambiaNombre = (lista) => lista.map(el => "CAMBIADO " + el.nombre)
    
const cambiaNombre = (lista) => lista.map(el=> {
    if (el.tipo==='DC'){
    return el.nombre=`CAMBIADO ${el.nombre}`;
    }
})
    
console.log(cambiaNombre(superHeroesDC));
//3
console.log(superHeroesDC.length);
//4
const superHeroes2 = [ 
	'{"nombre":"Batman", "tipo":"DC"}',
	'{"nombre":"Linterna Verde", "tipo":"DC"}',
	'{"nombre":"Lobezno", "tipo":"Marvel"}',
	'{"nombre":"Spiderman", "tipo":"Marvel"}',
];

const superHeroesObj = superHeroes2.map(el => JSON.parse(el));
console.log("De JSON a objeto");
console.log(superHeroesObj);

let superHeroesMarvel = filtraLista(superHeroesObj, 'Marvel');
console.log("filtrado");
console.log(superHeroesMarvel);

const superHeroesAdd = [
  { nombre: 'Flash', tipo: 'DC' },
  { nombre: 'Hulk', tipo: 'Marvel' },
]
const superHeroesAdd2 = [
  { nombre: 'Iron Man', tipo: 'DC' },
  { nombre: 'Aquaman', tipo: 'Marvel' },
]
console.log("Añadimos al final");
superHeroesAdd.map(el => superHeroes.push(el));
console.log(superHeroes);
console.log("Añadimos al principio");
superHeroesAdd2.map(el => superHeroes.unshift(el));
console.log(superHeroes);

function ordenaHeroesNombre(x, y){
  return x.nombre.localeCompare(y.nombre);
}

let superHeroesPorNombre = superHeroes.sort(ordenaHeroesNombre);
console.log("Ordenado por nombre");
console.log(superHeroes);

function ordenaHeroesTipo(x, y){
  let ordenTipo = {DC: 1, Marvel: 2};
  return ordenTipo[x.tipo] - ordenTipo[y.tipo];
}
let superHeroesPorTipo = superHeroes.sort(ordenaHeroesTipo);
console.log("Ordenado por tipo");
console.log(superHeroes);

let nombresHeroes = superHeroes.map(x => x.nombre);
console.log("Solo los nombres");
console.log(nombresHeroes);


let nombreHeroesObj = superHeroes.map(x => {nombre: `${x.nombre}`});
console.log("Solo los nombres en objeto")
console.log(nombreHeroesObj);

