function saludo(nombre) {
    return `Hola ${nombre}`;
}
function saludarMundo() {
    return "Hola Mundo";
}

module.exports = {
    saludo: saludo,
    saludarMundo: saludarMundo
};

console.log(module.exports);