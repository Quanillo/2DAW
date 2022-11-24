import input from './datos.mjs';

console.log(input)

//console.log(input.filter(x=> x.pais === 'China').filter(x=>x.anio_coche === 1993).reduce((ac, el) => ac + Number.parseFloat(el.precio_coche.substring(1)), 0));

//console.log(input.filter(x=> x.pais === 'South Africa').reduce((ac, el)=> ac.anio_coche < el.anio_coche ? el : ac, input[0]).cuenta_bancaria);

