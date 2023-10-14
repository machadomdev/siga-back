const Curso = require("../../models/Curso");
const colors = require("colors/safe");

exports.createCursos = async (escuelaFray) => {

  console.log(colors.cyan("Cursos"));
  const curso1A = await Curso({
    escuela: escuelaFray,
    preceptor: null,
    nivel: "Secundario",
    anio: "1",
    seccion: "A",
    turno: "Mañana"
  }).save();

  const curso1B = await Curso({
    escuela: escuelaFray,
    preceptor: null,
    nivel: "Secundario",
    anio: "1",
    seccion: "B",
    turno: "Mañana"
  }).save();

  const curso1C = await Curso({
    escuela: escuelaFray,
    preceptor: null,
    nivel: "Secundario",
    anio: "1",
    seccion: "C",
    turno: "Mañana"
  }).save();

  const curso1D = await Curso({
    escuela: escuelaFray,
    preceptor: null,
    nivel: "Secundario",
    anio: "1",
    seccion: "D",
    turno: "Mañana"
  }).save();


  const curso2A = await Curso({
    escuela: escuelaFray,
    preceptor: null,
    nivel: "Secundario",
    anio: "2",
    seccion: "A",
    turno: "Mañana"
  }).save();

  const curso2B = await Curso({
    escuela: escuelaFray,
    preceptor: null,
    nivel: "Secundario",
    anio: "2",
    seccion: "B",
    turno: "Mañana"
  }).save();

  const curso2C = await Curso({
    escuela: escuelaFray,
    preceptor: null,
    nivel: "Secundario",
    anio: "2",
    seccion: "C",
    turno: "Mañana"
  }).save();

  const curso2D = await Curso({
    escuela: escuelaFray,
    preceptor: null,
    nivel: "Secundario",
    anio: "2",
    seccion: "D",
    turno: "Mañana"
  }).save();


  return {
      curso1A,
      curso1B,
      curso1C,
      curso1D,
      curso2A,
      curso2B,
      curso2C,
      curso2D,
  }
}