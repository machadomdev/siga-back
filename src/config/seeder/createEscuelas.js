const Escuela = require("../../models/Escuela");
const colors = require("colors/safe");

exports.createEscuelas = async () => {
  console.log(colors.cyan("Escuelas"));
  const escuelaEnet = await Escuela({
    nombre: "E.N.E.T N° 1",
    telefono: "38344423303",
    localidad: "Capital",
    codigoPostal: "4700",
    barrio: "25 de septiembre",
    calle: "Mariano Moreno Nte.",
    numeroCalle: 599,
  }).save();

  const escuelaFray = await Escuela({
    nombre: "Fray Mamerto Esquiú",
    telefono: "38344428009",
    localidad: "Capital",
    codigoPostal: "4700",
    barrio: "25 de agosto",
    calle: "Av. Belgrano",
    numeroCalle: 298,
  }).save();
  return { escuelaEnet, escuelaFray };
}
