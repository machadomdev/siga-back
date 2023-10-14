const Persona = require("../../models/Persona");
const Autoridad = require("../../models/Autoridad");
const Usuario = require("../../models/Usuario");
const bcryptjs = require("bcryptjs");
const colors = require("colors/safe");
const Curso = require("../../models/Curso");
exports.createPreceptores = async (escuelaFray, autoridadPreceptorType, curso1A, curso1B, curso1C, curso1D, curso2A, curso2B, curso2C, curso2D ) => {
  console.log(colors.cyan("Personas - Preceptores"));
  const personaPreceptor1 = await Persona({
    nombres: "Preceptor",
    apellidos: "N° 1",
    numeroDocumento: "0000001",
    tipoDocumento: "DNI",
    genero: "Masculino",
    grupoFactor: "B+",
    nacionalidad: "AR",
    fechaNacimiento: "2014-10-19T16:36:14.197Z",
    domicilioLocalidad: "San Fernando del Valle de Catamarca",
    domicilioCodigoPostal: 4700,
    domicilioBarrio: "barrio preceptor",
    domicilioCalle: "domicilio preceptor",
    domicilioNumeroCalle: 4444,
    domicilioPiso: 4,
    domicilioDepartamento: "A",
    ocupacion: "Preceptor",
    domicilioLaboralLocalidad: "Capital",
    domicilioLaboralCodigoPostal: 4700,
    domicilioLaboralBarrio: "25 de septiembre",
    domicilioLaboralCalle: "Av. Belgrano",
    domicilioLaboralNumeroCalle: 599,
    domicilioLaboralPiso: null,
    domicilioLaboralDepartamento: null,
    contactoTelefono: "1500000002",
    contactoTelefonoSec: "1500000001",
    contactoCorreo: "preceptor@dominio.com"
  }).save();


  const personaPreceptor2 = await Persona({
    nombres: "Preceptor",
    apellidos: "N° 2",
    numeroDocumento: "0000002",
    tipoDocumento: "DNI",
    genero: "Masculino",
    grupoFactor: "A+",
    nacionalidad: "AR",
    fechaNacimiento: "2014-10-19T16:36:14.197Z",
    domicilioLocalidad: "San Fernando del Valle de Catamarca",
    domicilioCodigoPostal: 4700,
    domicilioBarrio: "barrio preceptor n°2",
    domicilioCalle: "domicilio preceptor n°2",
    domicilioNumeroCalle: 3333,
    domicilioPiso: 4,
    domicilioDepartamento: "A",
    ocupacion: "Preceptor",
    domicilioLaboralLocalidad: "Capital",
    domicilioLaboralCodigoPostal: 4700,
    domicilioLaboralBarrio: "25 de septiembre",
    domicilioLaboralCalle: "Av. Belgrano",
    domicilioLaboralNumeroCalle: 599,
    domicilioLaboralPiso: null,
    domicilioLaboralDepartamento: null,
    contactoTelefono: "1500000004",
    contactoTelefonoSec: "1500000003",
    contactoCorreo: "preceptor@dominio.com"
  }).save();

  console.log(colors.cyan("Autoridad - Preceptores"));
  const autoridadPreceptor1 = await Autoridad({
    persona: personaPreceptor1._id,
    tipo: autoridadPreceptorType._id,
    alumnos: [],
    cursos: [],
    escuela: escuelaFray._id,
  }).save();
  
  const autoridadPreceptor2 = await Autoridad({
    persona: personaPreceptor2._id,
    tipo: autoridadPreceptorType._id,
    alumnos: [],
    cursos: [],
    escuela: escuelaFray._id,
  }).save();

  console.log(colors.cyan("Asignando cursos a los preceptores"));
  await Autoridad.findByIdAndUpdate({_id: autoridadPreceptor1._id},{$set: {cursos: [curso1A._id.toString(),curso1B._id.toString(),curso1C._id.toString(),curso1D._id.toString()]}});
  await Autoridad.findByIdAndUpdate({_id: autoridadPreceptor2._id},{$set: {cursos: [curso2A._id.toString(),curso2B._id.toString(),curso2C._id.toString(),curso2D._id.toString()]}});
  
  await Curso.findByIdAndUpdate({_id: curso1A._id},{$set: {preceptor: autoridadPreceptor1._id}});
  await Curso.findByIdAndUpdate({_id: curso1B._id},{$set: {preceptor: autoridadPreceptor1._id}});
  await Curso.findByIdAndUpdate({_id: curso1C._id},{$set: {preceptor: autoridadPreceptor1._id}});
  await Curso.findByIdAndUpdate({_id: curso1D._id},{$set: {preceptor: autoridadPreceptor1._id}});
  await Curso.findByIdAndUpdate({_id: curso2A._id},{$set: {preceptor: autoridadPreceptor2._id}});
  await Curso.findByIdAndUpdate({_id: curso2B._id},{$set: {preceptor: autoridadPreceptor2._id}});
  await Curso.findByIdAndUpdate({_id: curso2C._id},{$set: {preceptor: autoridadPreceptor2._id}});
  await Curso.findByIdAndUpdate({_id: curso2D._id},{$set: {preceptor: autoridadPreceptor2._id}});

  console.log(colors.cyan("Usuarios - Preceptores"));
  const salt = await bcryptjs.genSalt(10);
  await Usuario({
    usuario: "preceptor1",
    password: await bcryptjs.hash("preceptor1", salt),
    autoridad: autoridadPreceptor1._id,
  }).save()
  await Usuario({
    usuario: "preceptor2",
    password: await bcryptjs.hash("preceptor2", salt),
    autoridad: autoridadPreceptor2._id,
  }).save()
}