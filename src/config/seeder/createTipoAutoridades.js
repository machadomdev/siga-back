const AutoridadType = require("../../models/AutoridadType");
const colors = require("colors/safe");

exports.createTipoAutoridades = async () => {
  console.log(colors.cyan("Tipos de autoridades"));
  const autoridadAdminType = await AutoridadType({
    tipoAutoridad: "Administrativo",
    permisos: ["superuser"],
  }).save();

  const autoridadPreceptorType = await AutoridadType({
    tipoAutoridad: "Preceptor",
    permisos: ["lst-inasistenci"],
  }).save();

  const autoridadProfesorType = await AutoridadType({
    tipoAutoridad: "Profesor",
    permisos: ["lst-inasistenci"],
  }).save();

  const autoridadTutorType = await AutoridadType({
    tipoAutoridad: "Tutor",
    permisos: ["lst-inasistenci"],
  }).save();
  return { autoridadAdminType, autoridadPreceptorType, autoridadProfesorType, autoridadTutorType };
}
