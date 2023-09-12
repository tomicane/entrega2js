const pizzas = [
    {
      id: 1,
      nombre: "pizza de Muzzarella",
      precio: 850,
      ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
    },
  
    {
      id: 2,
      nombre: "pizza de Cebolla",
      precio: 1100,
      ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
    },
  
    {
      id: 3,
      nombre: "pizza Napolitana",
      precio: 1050,
      ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
    },
  
    {
      id: 4,
      nombre: "pizza 4 Quesos",
      precio: 1350,
      ingredientes: [
        "Muzzarella",
        "Tomate",
        "Queso Azul",
        "Parmesano",
        "Roquefort",
      ],
    },
  
    {
      id: 5,
      nombre: "pizza Especial",
      precio: 1200,
      ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
    },
  
    {
      id: 6,
      nombre: "pizza con Anana",
      precio: 1000,
      ingredientes: ["Muzzarella", "Tomate", "Anana"],
    },
  ];
  
  
  console.log("a)  Las pizzas que son id impar");
  
  const idImpar = pizzas.filter((pizzas) => {
    return pizzas.id % 2 !== 0;
  });
  idImpar.forEach((pizzas) => {
    console.log(`La ${pizzas.nombre} tiene id impar`);
  });
  
  console.log("--------------------------------------------------------");
  
  
  console.log("b) Responder: ¿Hay alguna pizza que valga menos de $600?");
  
  const menorA = (precio) => {
    return pizzas.some((id) => {
      return id.precio < precio;
    })
      ? console.log(`Hay pizzas  que valen menos de $${precio}`)
      : console.log(`No hay pizzas  con valor menor a $${precio}`);
  };
  menorA(600);
  console.log("--------------------------------------------------------");
  
 
  console.log("c) Pizzas con su respectivo precio");
  
  for (let index = 0; index < 6; index++) {
    console.log(
      "La  " + pizzas[index].nombre + " Cuesta  $ " + pizzas[index].precio
    );
  }
  console.log("--------------------------------------------------------");
  
  
  console.log("d) Todos los ingredientes de cada pizza ");
  
  for (let index = 0; index < 6; index++) {
    console.log("__________________________________________");
    console.log(
      "La " + pizzas[index].nombre + " tiene los siguientes ingredientes:"
    );
  
    for (let index1 = 0; index1 < 3; index1++) {
      console.log(pizzas[index].ingredientes[index1]);
    }
  }
  console.log("--------------------------------------------------------");