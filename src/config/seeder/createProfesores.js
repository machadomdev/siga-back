const Persona = require("../../models/Persona");
const Autoridad = require("../../models/Autoridad");
const Usuario = require("../../models/Usuario");
const bcryptjs = require("bcryptjs");
const colors = require("colors/safe");

exports.createProfesores = async (autoridadProfesorType, escuelaFray, curso1A, curso1B, curso1C, curso1D, curso2A, curso2B, curso2C, curso2D) => {
    console.log(colors.cyan("Persona - Profesores"));
    const personaProfesor1 = await Persona({
      nombres: "Profesor",
      apellidos: "N° 1",
      numeroDocumento: "11111111",
      tipoDocumento: "DNI",
      genero: "Masculino",
      grupoFactor: "B+",
      nacionalidad: "AR",
      fechaNacimiento: "1982-10-19T16:36:14.197Z",
      domicilioLocalidad: "San Fernando del Valle de Catamarca",
      domicilioCodigoPostal: 4700,
      domicilioBarrio: "barrio profesor",
      domicilioCalle: "domicilio profesor",
      domicilioNumeroCalle: 5555,
      domicilioPiso: 3,
      domicilioDepartamento: "Z",
      ocupacion: "Profesor",
      domicilioLaboralLocalidad: "Capital",
      domicilioLaboralCodigoPostal: 4700,
      domicilioLaboralBarrio: "25 de septiembre",
      domicilioLaboralCalle: "Av. Belgrano",
      domicilioLaboralNumeroCalle: 599,
      domicilioLaboralPiso: null,
      domicilioLaboralDepartamento: null,
      contactoTelefono: "1511111112",
      contactoTelefonoSec: "1511111111",
      contactoCorreo: "profesor@dominio.com"
    }).save();
  
    const personaProfesor2 = await Persona({
      nombres: "Profesor",
      apellidos: "N° 2",
      numeroDocumento: "11111112",
      tipoDocumento: "DNI",
      genero: "Femenino",
      grupoFactor: "B+",
      nacionalidad: "AR",
      fechaNacimiento: "1982-10-19T16:36:14.197Z",
      domicilioLocalidad: "San Fernando del Valle de Catamarca",
      domicilioCodigoPostal: 4700,
      domicilioBarrio: "barrio profesor",
      domicilioCalle: "domicilio profesor",
      domicilioNumeroCalle: 5555,
      domicilioPiso: 3,
      domicilioDepartamento: "Z",
      ocupacion: "Profesor",
      domicilioLaboralLocalidad: "Capital",
      domicilioLaboralCodigoPostal: 4700,
      domicilioLaboralBarrio: "25 de septiembre",
      domicilioLaboralCalle: "Av. Belgrano",
      domicilioLaboralNumeroCalle: 599,
      domicilioLaboralPiso: null,
      domicilioLaboralDepartamento: null,
      contactoTelefono: "1511111114",
      contactoTelefonoSec: "1511111113",
      contactoCorreo: "profesor1@dominio.com"
    }).save();

    console.log(colors.cyan("Autoridad - Profesores"));
   const autoridadProfesor1 = await Autoridad({
    tipo: autoridadProfesorType._id,
    escuela: escuelaFray._id,
    personaRelacionada: null,
    persona: personaProfesor1._id,
    cursos: []
  }).save();
  
  const autoridadProfesor2 =  await Autoridad({
    tipo: autoridadProfesorType._id,
    escuela: escuelaFray._id,
    personaRelacionada: null,
    persona: personaProfesor2._id,
    cursos: []
  }).save();

  console.log(colors.cyan("Asignando cursos a los profesores"));
  await Autoridad.findByIdAndUpdate(
    { _id: autoridadProfesor1._id },
    {
      $set: {
        cursos: [
          curso1A._id.toString(),
          curso1B._id.toString(),
          curso2A._id.toString(),
          curso2B._id.toString(),
        ],
      },
    }
  );
  await Autoridad.findByIdAndUpdate(
    { _id: autoridadProfesor2._id },
    {
      $set: {
        cursos: [
          curso1C._id.toString(),
          curso1D._id.toString(),
          curso2C._id.toString(),
          curso2D._id.toString(),
        ],
      },
    }
  );

  console.log(colors.cyan("Usuarios - Profesores"));
  const salt = await bcryptjs.genSalt(10);
  await Usuario({
    usuario: "profesor1",
    password: await bcryptjs.hash("profesor1", salt),
    autoridad: autoridadProfesor1._id,
  }).save()
  await Usuario({
    usuario: "profesor2",
    password: await bcryptjs.hash("profesor2", salt),
    autoridad: autoridadProfesor2._id,
  }).save()

    return {
      autoridadProfesor1,
      autoridadProfesor2
    }
};