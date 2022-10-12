import input from './input.mjs';


// versión con for

let count = 0;
for (let i = 0; i < input.length - 1; i++) {
	let current = input[i];
	let next = input[i + 1];
  if (next > current) {
		count++;
	}
}
console.log(count);

//versión con reduce
//vemos como cosa nueva el idx, tercer parámetro del reduce que nos muestra el índice de la lista
const count2 =input.reduce((ac,el,idx) =>(el > input[idx-1])? ac+=1:ac,0);

console.log(count2);
