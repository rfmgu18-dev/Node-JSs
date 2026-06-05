//Importación de JSON
 const json = require("./json");
 console.log(json);

//De Objeto JSON a String
let infoCursoJSON = JSON.stringify(json);
console.log(infoCursoJSON);
console.log(typeof infoCursoJSON);

// De String a Objeto JSON
let infoCursoObject = JSON.parse(infoCursoJSON);
console.log(infoCursoObject);
console.log(typeof infoCursoObject);