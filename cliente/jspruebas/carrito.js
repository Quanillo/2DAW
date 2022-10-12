const carrito = {
    productos : [
      {nombre: "papel higienico", unidades: 2, precio: 6},
      {nombre: "pan", unidades: 1, precio: 0.70},
    ],
    get precioTotal(){
      return this.productos.reduce((acc, el)=> acc += (el.unidades*el.precio), 0);
    },
    set anade(producto){ this.productos.push(producto);}
  };
  
  const producto= {nombre: "leche", unidades: 4, precio: 1};
  
  carrito.anade = producto;
  
  console.log(carrito.productos);
  console.log(carrito.precioTotal);