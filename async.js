function ordenarProducto(producto) {

    return new Promise((resolve, reject) => {
    console.log(`Ordenando: ${producto}...`);
    setTimeout(() => {
        if (producto === "camisa") {
            resolve("Ordenando la camisa...");
        } else {
            reject("Este producto no está disponible en este momento.");
        }
    }, 2000)
    });
};

function procesarPedido(respuesta) {
    return new Promise((resolve) => {
        console.log("Procesando respuesta...");
        console.log(`La respuesta fue: ${respuesta}`);
        setTimeout(() => {
            resolve("Gracias por tu compra. Disfruta nuestro producto!");
        }, 2000);
    });
}

//  ordenarProducto("camisa")
// .then((respuesta) => {
//     console.log("Respuesta recibida correctamente.");
//     console.log(respuesta);
//     return procesarPedido(respuesta);
// })
// .then((respuestaProcesada) => {
//     console.log(respuestaProcesada);
// })
// .catch((error) => {
//     console.log(error);
// });

async function realizarPedido(producto) {
    try {
        const respuesta = await ordenarProducto(producto);
        console.log("Respuesta recibida correctamente.");
        const respuestaProcesada = await procesarPedido(respuesta);
        console.log(respuestaProcesada);
    } catch (error) {
        console.log(error);
    }
};

realizarPedido("camisa");