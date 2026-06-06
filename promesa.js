// const promesaCumplida = false;
// const miPromesa = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if (promesaCumplida) {
//             resolve("La promesa fue cumplida");
//         } else {
//             reject("La promesa no fue cumplida");
//         }
//     }, 2000);
// })  ;

// const manejarPromesaCumplida = (valor) => {
//     console.log(valor);
// };
// const manejarPromesaRechazada = (error) => {
//     console.log(error);
// };

// miPromesa.then(manejarPromesaCumplida, manejarPromesaRechazada);

const estatusPedido = () => {
    const estatus = Math.random() < 0.8; 
return estatus;
};

const miPedidoDePizza = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (estatusPedido()) {
            resolve("Tu pizza está en camino!");
        } else {
            reject("Tu pizza no pudo ser preparada. Inténtalo de nuevo.");
        }   
    }), 2000});

   
    miPedidoDePizza.then(
        (manejarPromesaCumplida) => {
            console.log(manejarPromesaCumplida);
        }
    ).catch(
        (manejarPromesaRechazada) => {
            console.log(manejarPromesaRechazada);
        }
    );