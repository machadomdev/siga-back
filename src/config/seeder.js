"use strict";
const config = require("config");
const mongoose = require("mongoose");
var colors = require('colors/safe');
const bcryptjs = require("bcryptjs");

// Importamos el modelo
const Alumno = require("../models/Alumno");
const Archivo = require("../models/Archivo");
const Asignatura = require("../models/Asignatura");
const Autoridad = require("../models/Autoridad");
const AutoridadType = require("../models/AutoridadType");
const Calificacion = require("../models/Calificacion");
const Curso = require("../models/Curso");
const Escuela = require("../models/Escuela");
const Evento = require("../models/Evento");
const Inasistencia = require("../models/Inasistencia");
const Legajo = require("../models/Legajo");
const ListadoCalificaciones = require("../models/ListadoCalificaciones");
const Notificacion = require("../models/Notificacion");
const Persona = require("../models/Persona");
const Representante = require("../models/Representante");
const Usuario = require("../models/Usuario");

(async () => {
  const connect = mongoose.connect(config.get("db_atlas_dev"));
  await Promise.all([connect]);
  const db = mongoose.createConnection(config.get("db_atlas_dev"));

  // Borramos la coleccion
  console.log(colors.green("Iniciando Delete de colecciones"));
  await db.collection("alumnos").deleteMany();
  console.log(".");
  await db.collection("asignaturas").deleteMany();
  console.log("..");
  await db.collection("autoridades").deleteMany();
  console.log("...");
  await db.collection("autoridadtypes").deleteMany();
  console.log("....");
  await db.collection("calificacions").deleteMany();
  console.log(".....");
  await db.collection("cursos").deleteMany();
  console.log("......");
  await db.collection("escuelas").deleteMany();
  console.log(".......");
  await db.collection("eventos").deleteMany();
  console.log("........");
  await db.collection("inasistencias").deleteMany();
  console.log(".........");
  await db.collection("legajos").deleteMany();
  console.log("..........");
  await db.collection("listadocalificaciones").deleteMany();
  console.log("...........");
  await db.collection("personas").deleteMany();
  console.log("............");
  await db.collection("usuarios").deleteMany();
  console.log(".............");
  console.log(colors.green("Finalizando Delete de colecciones"));

  console.log(colors.green("\nIniciando carga de directorios"));
  console.log(colors.cyan("Creando Escuelas"));
  
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

  console.log(colors.cyan("Personas"));
  const personaPreceptor = await Persona({
    nombres: "Marcos",
    apellidos: "Romero",
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


  const personaPreceptor1 = await Persona({
    nombres: "Federico",
    apellidos: "Martinez",
    numeroDocumento: "0000002",
    tipoDocumento: "DNI",
    genero: "Masculino",
    grupoFactor: "A+",
    nacionalidad: "AR",
    fechaNacimiento: "2014-10-19T16:36:14.197Z",
    domicilioLocalidad: "San Fernando del Valle de Catamarca",
    domicilioCodigoPostal: 4700,
    domicilioBarrio: "barrio preceptor",
    domicilioCalle: "domicilio preceptor",
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

  const personaProfesor = await Persona({
    nombres: "Gonzalo",
    apellidos: "Soria",
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

  const personaProfesor1 = await Persona({
    nombres: "Florencia",
    apellidos: "Vergesio",
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

  const personaAdmin = await Persona({
    nombres: "Administrativo",
    apellidos: "Siga",
    numeroDocumento: "99999991",
    tipoDocumento: "DNI",
    genero: "Masculino",
    grupoFactor: "0+",
    nacionalidad: "AR",
    fechaNacimiento: "1982-10-19T16:36:14.197Z",
    domicilioLocalidad: "San Fernando del Valle de Catamarca",
    domicilioCodigoPostal: 4700,
    domicilioBarrio: "barrio profesor",
    domicilioCalle: null,
    domicilioNumeroCalle: null,
    domicilioPiso: null,
    domicilioDepartamento: null,
    ocupacion: "Administrativo",
    domicilioLaboralLocalidad: null,
    domicilioLaboralCodigoPostal: null, 
    domicilioLaboralBarrio: null,
    domicilioLaboralCalle: null,
    domicilioLaboralNumeroCalle: null,
    domicilioLaboralPiso: null,
    domicilioLaboralDepartamento: null,
    contactoTelefono: "03834896574",
    contactoTelefonoSec: null,
    contactoCorreo: "administrativo@dominio.com"
  }).save();

  console.log(colors.cyan("Autoridad - Preceptores"));
  const autoridadPreceptor = await Autoridad({
    persona: personaPreceptor._id,
    tipo: autoridadPreceptorType._id,
    alumnos: [],
    cursos: [],
    escuela: escuelaFray._id,
  }).save();
  
  const autoridadPreceptor1 = await Autoridad({
    persona: personaPreceptor1._id,
    tipo: autoridadPreceptorType._id,
    alumnos: [],
    cursos: [],
    escuela: escuelaFray._id,
  }).save();

  console.log(colors.cyan("Autoridad - Profesores"));
  const autoridadProfesor = await Autoridad({
    tipo: autoridadProfesorType._id,
    escuela: escuelaFray._id,
    personaRelacionada: null,
    persona: personaProfesor._id,
    cursos: []
  }).save();
  
  const autoridadProfesor1 =  await Autoridad({
    tipo: autoridadProfesorType._id,
    escuela: escuelaFray._id,
    personaRelacionada: null,
    persona: personaProfesor1._id,
    cursos: []
  }).save();
  
  console.log(colors.cyan("Autoridad - Administrativo"));
  const autoridadAdmin = await Autoridad({
    tipo: autoridadAdminType._id,
    escuela: escuelaFray._id,
    personaRelacionada: null,
    persona: personaAdmin._id,
    cursos: []
  }).save();
  console.log(colors.cyan("Cursos"));
  const curso1A = await Curso({
    escuela: escuelaFray._id,
    preceptor: autoridadPreceptor._id,
    nivel: "Secundario",
    anio: "1",
    seccion: "A",
    turno: "Mañana"
  }).save();

  const curso1B = await Curso({
    escuela: escuelaFray._id,
    preceptor: autoridadPreceptor._id,
    nivel: "Secundario",
    anio: "1",
    seccion: "B",
    turno: "Mañana"
  }).save();

  const curso1C = await Curso({
    escuela: escuelaFray._id,
    preceptor: autoridadPreceptor._id,
    nivel: "Secundario",
    anio: "1",
    seccion: "C",
    turno: "Mañana"
  }).save();

  const curso1D = await Curso({
    escuela: escuelaFray._id,
    preceptor: autoridadPreceptor._id,
    nivel: "Secundario",
    anio: "1",
    seccion: "D",
    turno: "Mañana"
  }).save();


  const curso2A = await Curso({
    escuela: escuelaFray._id,
    preceptor: autoridadPreceptor1._id,
    nivel: "Secundario",
    anio: "2",
    seccion: "A",
    turno: "Mañana"
  }).save();

  const curso2B = await Curso({
    escuela: escuelaFray._id,
    preceptor: autoridadPreceptor1._id,
    nivel: "Secundario",
    anio: "2",
    seccion: "B",
    turno: "Mañana"
  }).save();

  const curso2C = await Curso({
    escuela: escuelaFray._id,
    preceptor: autoridadPreceptor1._id,
    nivel: "Secundario",
    anio: "2",
    seccion: "C",
    turno: "Mañana"
  }).save();

  const curso2D = await Curso({
    escuela: escuelaFray._id,
    preceptor: autoridadPreceptor1._id,
    nivel: "Secundario",
    anio: "2",
    seccion: "D",
    turno: "Mañana"
  }).save();

  console.log(colors.cyan("Actualizando autoridades preceptor"));
  await Autoridad.findByIdAndUpdate({_id: autoridadPreceptor._id},{$set: {cursos: [curso1A._id.toString(),curso1B._id.toString(),curso1C._id.toString(),curso1D._id.toString()]}});
  await Autoridad.findByIdAndUpdate({_id: autoridadPreceptor1._id},{$set: {cursos: [curso2A._id.toString(),curso2B._id.toString(),curso2C._id.toString(),curso2D._id.toString()]}});
  
  console.log(colors.cyan("Actualizando autoridades profesor"));
  await Autoridad.findByIdAndUpdate({_id: autoridadProfesor._id},{$set: {cursos: [curso1A._id.toString(),curso1B._id.toString(),curso2A._id.toString(),curso2B._id.toString()]}});
  await Autoridad.findByIdAndUpdate({_id: autoridadProfesor1._id},{$set: {cursos: [curso1C._id.toString(),curso1D._id.toString(),curso2C._id.toString(),curso2D._id.toString()]}});
  
  console.log(colors.cyan("Asignaturas"));

  const arrayNombreMaterias = ["Matematica", "Lengua"];

  const arrayCursosProfesor = [ 
    {profesor:autoridadProfesor ,curso:curso1A},
    {profesor:autoridadProfesor ,curso:curso1B},
    {profesor:autoridadProfesor ,curso:curso1C},
    {profesor:autoridadProfesor ,curso:curso1D},
    {profesor:autoridadProfesor1 ,curso:curso2A},
    {profesor:autoridadProfesor1 ,curso:curso2B},
    {profesor:autoridadProfesor1 ,curso:curso2C},
    {profesor:autoridadProfesor1 ,curso:curso2D},
  ];

  for (let index = 0; index < arrayNombreMaterias.length; index++) {
    // nombre de la materia
    const materia = arrayNombreMaterias[index];
    // sagundo array
    for (let index = 0; index < arrayCursosProfesor.length; index++) { 
      // objeto curso
      const curso = arrayCursosProfesor[index].curso;
      // objeto profesor
      const profesor = arrayCursosProfesor[index].profesor;
      await Asignatura({
        nombre: materia,
        curso: curso._id,
        profesor: profesor._id 
      }).save();
    }
  }
 


  console.log(colors.cyan("Persona - Alumno"));
  const personaAlumno = await Persona({
    nombres: "Santé",
    apellidos: "Barbieri",
    numeroDocumento: "2222220",
    tipoDocumento: "DNI",
    genero: "Masculino",
    grupoFactor: "A+",
    nacionalidad: "AR",
    fechaNacimiento: "1992-10-19T16:36:14.197Z",
    domicilioLocalidad: "San Fernando del Valle de Catamarca",
    domicilioCodigoPostal: 4700,
    domicilioBarrio: "Piedra blanca",
    domicilioCalle: "Ruta N°2",
    domicilioNumeroCalle: 505,
    domicilioPiso: 0,
    domicilioDepartamento: null,
    ocupacion: null,
    domicilioLaboralLocalidad: null,
    domicilioLaboralCodigoPostal: null,
    domicilioLaboralBarrio: null,
    domicilioLaboralCalle: null,
    domicilioLaboralNumeroCalle: null,
    domicilioLaboralPiso: null,
    domicilioLaboralDepartamento: null,
    contactoTelefono: "03834020203",
    contactoTelefonoSec: '03834020203',
    contactoCorreo: "alumno@siga.unca.com"
  }).save();
  
    const personaAlumno1 = await Persona({
    nombres: "Jose",
    apellidos: "Barbieri",
    numeroDocumento: "2222221",
    tipoDocumento: "DNI",
    genero: "Masculino",
    grupoFactor: "A+",
    nacionalidad: "AR",
    fechaNacimiento: "1991-10-19T16:36:14.197Z",
    domicilioLocalidad: "San Fernando del Valle de Catamarca",
    domicilioCodigoPostal: 4700,
    domicilioBarrio: "Piedra blanca",
    domicilioCalle: "Ruta N°2",
    domicilioNumeroCalle: 505,
    domicilioPiso: 0,
    domicilioDepartamento: null,
    ocupacion: null,
    domicilioLaboralLocalidad: null,
    domicilioLaboralCodigoPostal: null,
    domicilioLaboralBarrio: null,
    domicilioLaboralCalle: null,
    domicilioLaboralNumeroCalle: null,
    domicilioLaboralPiso: null,
    domicilioLaboralDepartamento: null,
    contactoTelefono: "3834534454",
    contactoTelefonoSec: null,
    contactoCorreo: "alumno1@siga.unca.com"
    }).save();
  
  const personaAlumno2 = await Persona({
    nombres: "Julio",
    apellidos: "Barbieri",
    numeroDocumento: "2222222",
    tipoDocumento: "DNI",
    genero: "Masculino",
    grupoFactor: "A+",
    nacionalidad: "AR",
    fechaNacimiento: "1991-10-19T16:36:14.197Z",
    domicilioLocalidad: "San Fernando del Valle de Catamarca",
    domicilioCodigoPostal: 4700,
    domicilioBarrio: "Piedra blanca",
    domicilioCalle: "Ruta N°2",
    domicilioNumeroCalle: 505,
    domicilioPiso: 0,
    domicilioDepartamento: null,
    ocupacion: null,
    domicilioLaboralLocalidad: null,
    domicilioLaboralCodigoPostal: null,
    domicilioLaboralBarrio: null,
    domicilioLaboralCalle: null,
    domicilioLaboralNumeroCalle: null,
    domicilioLaboralPiso: null,
    domicilioLaboralDepartamento: null,
    contactoTelefono: "03834028856",
    contactoTelefonoSec: null,
    contactoCorreo: "alumno2@siga.unca.com"
  }).save();

  const personaAlumno3 = await Persona({
    nombres: "Noelia",
    apellidos: "Sosa",
    numeroDocumento: "2222223",
    tipoDocumento: "DNI",
    genero: "Femenino",
    grupoFactor: "A+",
    nacionalidad: "AR",
    fechaNacimiento: "1994-10-19T16:36:14.197Z",
    domicilioLocalidad: "San Fernando del Valle de Catamarca",
    domicilioCodigoPostal: 4700,
    domicilioBarrio: "Barrio las flores",
    domicilioCalle: "Av. Virgen del valle",
    domicilioNumeroCalle: 2076,
    domicilioPiso: 0,
    domicilioDepartamento: null,
    ocupacion: null,
    domicilioLaboralLocalidad: null,
    domicilioLaboralCodigoPostal: null,
    domicilioLaboralBarrio: null,
    domicilioLaboralCalle: null,
    domicilioLaboralNumeroCalle: null,
    domicilioLaboralPiso: null,
    domicilioLaboralDepartamento: null,
    contactoTelefono: "0383402214",
    contactoTelefonoSec: null,
    contactoCorreo: "alumno3@siga.unca.com"
  }).save();

  const personaAlumno4 = await Persona({
    nombres: "Nicolas",
    apellidos: "Sosa",
    numeroDocumento: "2222224",
    tipoDocumento: "DNI",
    genero: "Masculino",
    grupoFactor: "A+",
    nacionalidad: "AR",
    fechaNacimiento: "1994-10-19T16:36:14.197Z",
    domicilioLocalidad: "San Fernando del Valle de Catamarca",
    domicilioCodigoPostal: 4700,
    domicilioBarrio: "Parque chacabuco",
    domicilioCalle: "Presidente castillo",
    domicilioNumeroCalle: 25,
    domicilioPiso: 0,
    domicilioDepartamento: null,
    ocupacion: null,
    domicilioLaboralLocalidad: null,
    domicilioLaboralCodigoPostal: null,
    domicilioLaboralBarrio: null,
    domicilioLaboralCalle: null,
    domicilioLaboralNumeroCalle: null,
    domicilioLaboralPiso: null,
    domicilioLaboralDepartamento: null,
    contactoTelefono: "0383404298",
    contactoTelefonoSec: null,
    contactoCorreo: "alumno4@siga.unca.com"
  }).save();

  const personaAlumno5 = await Persona({
    nombres: "Ruth",
    apellidos: "Varela",
    numeroDocumento: "2222225",
    tipoDocumento: "DNI",
    genero: "Masculino",
    grupoFactor: "A+",
    nacionalidad: "AR",
    fechaNacimiento: "1994-10-19T16:36:14.197Z",
    domicilioLocalidad: "San Fernando del Valle de Catamarca",
    domicilioCodigoPostal: 4700,
    domicilioBarrio: "La tablada",
    domicilioCalle: "Av. guemes",
    domicilioNumeroCalle: 250,
    domicilioPiso: 0,
    domicilioDepartamento: null,
    ocupacion: null,
    domicilioLaboralLocalidad: null,
    domicilioLaboralCodigoPostal: null,
    domicilioLaboralBarrio: null,
    domicilioLaboralCalle: null,
    domicilioLaboralNumeroCalle: null,
    domicilioLaboralPiso: null,
    domicilioLaboralDepartamento: null,
    contactoTelefono: "0383404154",
    contactoTelefonoSec: null,
    contactoCorreo: "alumno5@siga.unca.com"
  }).save();

  const personaAlumno6 = await Persona({
    nombres: "Abel",
    apellidos: "Varela",
    numeroDocumento: "2222226",
    tipoDocumento: "DNI",
    genero: "Masculino",
    grupoFactor: "A+",
    nacionalidad: "AR",
    fechaNacimiento: "1994-10-19T16:36:14.197Z",
    domicilioLocalidad: "San Fernando del Valle de Catamarca",
    domicilioCodigoPostal: 4700,
    domicilioBarrio: "La tablada",
    domicilioCalle: "Salta",
    domicilioNumeroCalle: 10,
    domicilioPiso: 0,
    domicilioDepartamento: null,
    ocupacion: null,
    domicilioLaboralLocalidad: null,
    domicilioLaboralCodigoPostal: null,
    domicilioLaboralBarrio: null,
    domicilioLaboralCalle: null,
    domicilioLaboralNumeroCalle: null,
    domicilioLaboralPiso: null,
    domicilioLaboralDepartamento: null,
    contactoTelefono: "0383404153",
    contactoTelefonoSec: null,
    contactoCorreo: "alumno6@siga.unca.com"
  }).save();
  
  const personaAlumno7 = await Persona({
    nombres: "Jose",
    apellidos: "Toloza",
    numeroDocumento: "2222227",
    tipoDocumento: "DNI",
    genero: "Masculino",
    grupoFactor: "A+",
    nacionalidad: "AR",
    fechaNacimiento: "1994-10-19T16:36:14.197Z",
    domicilioLocalidad: "San Fernando del Valle de Catamarca",
    domicilioCodigoPostal: 4700,
    domicilioBarrio: "Parque norte",
    domicilioCalle: "Maipu Norte",
    domicilioNumeroCalle: 33,
    domicilioPiso: 0,
    domicilioDepartamento: null,
    ocupacion: null,
    domicilioLaboralLocalidad: null,
    domicilioLaboralCodigoPostal: null,
    domicilioLaboralBarrio: null,
    domicilioLaboralCalle: null,
    domicilioLaboralNumeroCalle: null,
    domicilioLaboralPiso: null,
    domicilioLaboralDepartamento: null,
    contactoTelefono: "0383404132",
    contactoTelefonoSec: null,
    contactoCorreo: "alumno7@siga.unca.com"
  }).save();

  console.log(colors.cyan("Persona - Madre"));
  const personaMadre = await Persona({
    nombres: "Valeria",
    apellidos: "Mercado",
    numeroDocumento: "3333330",
    tipoDocumento: "DNI",
    genero: "Femenino",
    grupoFactor: "A+",
    nacionalidad: "AR",
    fechaNacimiento: "1972-10-19T16:36:14.197Z",
    domicilioLocalidad: "San Fernando del Valle de Catamarca",
    domicilioCodigoPostal: 4700,
    domicilioBarrio: "Alem",
    domicilioCalle: "Av. Alem", 
    domicilioNumeroCalle: 5555,
    domicilioPiso: 3,
    domicilioDepartamento: "Z",
    ocupacion: "Lic. Informatica",
    domicilioLaboralLocalidad: "Capital",
    domicilioLaboralCodigoPostal: 4700,
    domicilioLaboralBarrio: null,
    domicilioLaboralCalle: "Av. Belgrano",
    domicilioLaboralNumeroCalle: 599,
    domicilioLaboralPiso: null,
    domicilioLaboralDepartamento: null,
    contactoTelefono: "3834662254",
    contactoTelefonoSec: "3834554548",
    contactoCorreo: "madre@dominio.com"
  }).save();

  const personaMadre1 = await Persona({
    nombres: "Natalia",
    apellidos: "Medina",
    numeroDocumento: "3333331",
    tipoDocumento: "DNI",
    genero: "Femenino",
    grupoFactor: "A+",
    nacionalidad: "AR",
    fechaNacimiento: "1969-10-19T16:36:14.197Z",
    domicilioLocalidad: "San Fernando del Valle de Catamarca",
    domicilioCodigoPostal: 4700,
    domicilioBarrio: "Parque chacabuco",
    domicilioCalle: "Presidente castillo",
    domicilioNumeroCalle: 25,
    domicilioPiso: 0,
    domicilioDepartamento: null,
    ocupacion: "Maestra Jardinera",
    domicilioLaboralLocalidad: "Capital",
    domicilioLaboralCodigoPostal: 4700,
    domicilioLaboralBarrio: null,
    domicilioLaboralCalle: "Esquiu",
    domicilioLaboralNumeroCalle: 345,
    domicilioLaboralPiso: null,
    domicilioLaboralDepartamento: null,
    contactoTelefono: "1511111114",
    contactoTelefonoSec: "1511111113",
    contactoCorreo: "madre1@dominio.com"
  }).save();

  const personaMadre2 = await Persona({
    nombres: "Lucia",
    apellidos: "Camps",
    numeroDocumento: "3333332",
    tipoDocumento: "DNI",
    genero: "Femenino",
    grupoFactor: "A+",
    nacionalidad: "AR",
    fechaNacimiento: "1969-10-19T16:36:14.197Z",
    domicilioLocalidad: "San Fernando del Valle de Catamarca",
    domicilioCodigoPostal: 4700,
    domicilioBarrio: "Parque chacabuco",
    domicilioCalle: "Presidente castillo",
    domicilioNumeroCalle: 25,
    domicilioPiso: 0,
    domicilioDepartamento: null,
    ocupacion: "Abogada",
    domicilioLaboralLocalidad: "Capital",
    domicilioLaboralCodigoPostal: 4700,
    domicilioLaboralBarrio: null,
    domicilioLaboralCalle: "Salta",
    domicilioLaboralNumeroCalle: 23,
    domicilioLaboralPiso: null,
    domicilioLaboralDepartamento: null,
    contactoTelefono: "3834564564",
    contactoTelefonoSec: null,
    contactoCorreo: "madre2@dominio.com"
  }).save();

  const personaMadre3 = await Persona({
    nombres: "Luciana",
    apellidos: "Iraola",
    numeroDocumento: "3333333",
    tipoDocumento: "DNI",
    genero: "Femenino",
    grupoFactor: "A+",
    nacionalidad: "AR",
    fechaNacimiento: "1969-10-19T16:36:14.197Z",
    domicilioLocalidad: "San Fernando del Valle de Catamarca",
    domicilioCodigoPostal: 4700,
    domicilioBarrio: "Parque chacabuco",
    domicilioCalle: "Presidente castillo",
    domicilioNumeroCalle: 25,
    domicilioPiso: 0,
    domicilioDepartamento: null,
    ocupacion: "Empleada pública",
    domicilioLaboralLocalidad: "Capital",
    domicilioLaboralCodigoPostal: 4700,
    domicilioLaboralBarrio: null,
    domicilioLaboralCalle: "Republica",
    domicilioLaboralNumeroCalle: 456,
    domicilioLaboralPiso: null,
    domicilioLaboralDepartamento: null,
    contactoTelefono: "1511111114",
    contactoTelefonoSec: "1511111113",
    contactoCorreo: "madre3@dominio.com"
  }).save();

  console.log(colors.cyan("Persona - Padre"));
  const personaPadre = await Persona({
    nombres: "Pepino",
    apellidos: "Barbieri",
    numeroDocumento: "4444440",
    tipoDocumento: "DNI",
    genero: "Masculino",
    grupoFactor: "B+",
    nacionalidad: "AR",
    fechaNacimiento: "1972-10-19T16:36:14.197Z",
    domicilioLocalidad: "San Fernando del Valle de Catamarca",
    domicilioCodigoPostal: 4700,
    domicilioBarrio: "Alem",
    domicilioCalle: "Av. Alemn",
    domicilioNumeroCalle: 5555,
    domicilioPiso: 3,
    domicilioDepartamento: "Z",
    ocupacion: "Lic. Informatica",
    domicilioLaboralLocalidad: "Capital",
    domicilioLaboralCodigoPostal: 4700,
    domicilioLaboralBarrio: null,
    domicilioLaboralCalle: "Esquiu",
    domicilioLaboralNumeroCalle: 342,
    domicilioLaboralPiso: null,
    domicilioLaboralDepartamento: null,
    contactoTelefono: "3834659585",
    contactoTelefonoSec: "3834655655",
    contactoCorreo: "padre@dominio.com"
  }).save();
    
  const personaPadre1 = await Persona({
    nombres: "Jose",
    apellidos: "Sosa",
    numeroDocumento: "4444441",
    tipoDocumento: "DNI",
    genero: "Masculino",
    grupoFactor: "B+",
    nacionalidad: "AR",
    fechaNacimiento: "1972-10-19T16:36:14.197Z",
    domicilioLocalidad: "San Fernando del Valle de Catamarca",
    domicilioCodigoPostal: 4700,
    domicilioBarrio: "Alem",
    domicilioCalle: "Av. Alem",
    domicilioNumeroCalle: 5555,
    domicilioPiso: 3,
    domicilioDepartamento: "Z",
    ocupacion: "Lic. Informatica",
    domicilioLaboralLocalidad: "Capital",
    domicilioLaboralCodigoPostal: 4700,
    domicilioLaboralBarrio: null,
    domicilioLaboralCalle: "Chacabuco",
    domicilioLaboralNumeroCalle: 599,
    domicilioLaboralPiso: null,
    domicilioLaboralDepartamento: null,
    contactoTelefono: "1511111115",
    contactoTelefonoSec: "1511111114",
    contactoCorreo: "padre1@dominio.com"
  }).save();
  
  const personaPadre2 = await Persona({
    nombres: "Lucas",
    apellidos: "Varela",
    numeroDocumento: "4444442",
    tipoDocumento: "DNI",
    genero: "Masculino",
    grupoFactor: "B+",
    nacionalidad: "AR",
    fechaNacimiento: "1972-10-19T16:36:14.197Z",
    domicilioLocalidad: "San Fernando del Valle de Catamarca",
    domicilioCodigoPostal: 4700,
    domicilioBarrio: "Alem",
    domicilioCalle: "Av. Alemn",
    domicilioNumeroCalle: 5555,
    domicilioPiso: 3,
    domicilioDepartamento: "Z",
    ocupacion: "Lic. Informatica",
    domicilioLaboralLocalidad: "Capital",
    domicilioLaboralCodigoPostal: 4700,
    domicilioLaboralBarrio: null,
    domicilioLaboralCalle: "Av. Belgrano",
    domicilioLaboralNumeroCalle: 599,
    domicilioLaboralPiso: null,
    domicilioLaboralDepartamento: null,
    contactoTelefono: "1511111115",
    contactoTelefonoSec: "1511111114",
    contactoCorreo: "padre2@dominio.com"
  }).save();
  
  const personaPadre3 = await Persona({
    nombres: "Dario",
    apellidos: "Toloza",
    numeroDocumento: "4444443",
    tipoDocumento: "DNI",
    genero: "Masculino",
    grupoFactor: "B+",
    nacionalidad: "AR",
    fechaNacimiento: "1972-10-19T16:36:14.197Z",
    domicilioLocalidad: "San Fernando del Valle de Catamarca",
    domicilioCodigoPostal: 4700,
    domicilioBarrio: "Alem",
    domicilioCalle: "Av. Alemn",
    domicilioNumeroCalle: 5555,
    domicilioPiso: 3,
    domicilioDepartamento: "Z",
    ocupacion: "Lic. Informatica",
    domicilioLaboralLocalidad: "Capital",
    domicilioLaboralCodigoPostal: 4700,
    domicilioLaboralBarrio: null,
    domicilioLaboralCalle: "Av. Belgrano",
    domicilioLaboralNumeroCalle: 599,
    domicilioLaboralPiso: null,
    domicilioLaboralDepartamento: null,
    contactoTelefono: "1511111115",
    contactoTelefonoSec: "1511111114",
    contactoCorreo: "padre3@dominio.com"
  }).save();

  console.log(colors.cyan("Alumnos"));
  const alumno = await Alumno({ persona: personaAlumno._id }).save();
  const alumno1 = await Alumno({ persona: personaAlumno1._id }).save();
  const alumno2 = await Alumno({ persona: personaAlumno2._id }).save();
  const alumno3 = await Alumno({ persona: personaAlumno3._id }).save();
  const alumno4 = await Alumno({ persona: personaAlumno4._id }).save();
  const alumno5 = await Alumno({ persona: personaAlumno5._id }).save();
  const alumno6 = await Alumno({ persona: personaAlumno6._id }).save();
  const alumno7 = await Alumno({ persona: personaAlumno7._id }).save();

  console.log(colors.cyan("Tutores"));

  const autoridadTutor = await Autoridad({
      persona: personaPadre._id,
      tipo: autoridadTutorType._id,
      alumnos: [alumno._id, alumno1._id, alumno2._id],
      cursos: [],
      escuela: escuelaFray._id,
    }).save();

    const autoridadTutor1 = await Autoridad({
      persona: personaMadre1._id,
      tipo: autoridadTutorType._id,
      alumnos: [alumno3._id, alumno4._id, ],
      cursos: [],
      escuela: escuelaFray._id,
    }).save();
    
    const autoridadTutor2 = await Autoridad({
      persona: personaMadre2._id,
      tipo: autoridadTutorType._id,
      alumnos: [alumno5._id, alumno6._id],
      cursos: [],
      escuela: escuelaFray._id,
    }).save();

    const autoridadTutor3 = await Autoridad({
      persona: personaMadre3._id,
      tipo: autoridadTutorType._id,
      alumnos: [alumno7._id],
      cursos: [],
      escuela: escuelaFray._id,
    }).save();
  

console.log(colors.cyan("Legajos"));
await Legajo({
  alumno: alumno._id,
  padre: personaPadre._id,
  madre: personaMadre._id,
  tutor: autoridadTutor._id,
  archivado: false,
  curso: curso1A._id,
}).save()

await Legajo({
  alumno: alumno1._id,
  padre: personaPadre._id,
  madre: personaMadre._id,
  tutor: autoridadTutor._id,
  archivado: false,
  curso: curso2A._id,
}).save()

await Legajo({
  alumno: alumno2._id,
  padre: personaPadre._id,
  madre: personaMadre._id,
  tutor: autoridadTutor._id,
  archivado: false,
  curso: curso2C._id,
}).save()

await Legajo({
  alumno: alumno3._id,
  padre: personaPadre1._id,
  madre: personaMadre1._id,
  tutor: autoridadTutor1._id,
  archivado: false,
  curso: curso1A._id,
}).save()

await Legajo({
  alumno: alumno4._id,
  padre: personaPadre1._id,
  madre: personaMadre1._id,
  tutor: autoridadTutor1._id,
  archivado: false,
  curso: curso2A._id,
}).save()

await Legajo({
  alumno: alumno5._id,
  padre: personaPadre2._id,
  madre: personaMadre2._id,
  tutor: autoridadTutor2._id,
  archivado: false,
  curso: curso2C._id,
}).save()

await Legajo({
  alumno: alumno6._id,
  padre: personaPadre2._id,
  madre: personaMadre2._id,
  tutor: autoridadTutor2._id,
  archivado: false,
  curso: curso1A._id,
}).save()

await Legajo({
  alumno: alumno7._id,
  padre: personaPadre3._id,
  madre: personaMadre3._id,
  tutor: autoridadTutor3._id,
  archivado: false,
  curso: curso1A._id,
}).save()
  
  // generamos salt
  const salt = await bcryptjs.genSalt(10);
  
  console.log(colors.cyan("Usuarios- Preceptores"));
  await Usuario({
    usuario: "roromero",
    password: await bcryptjs.hash("roromero", salt),
    autoridad: autoridadPreceptor._id,
  }).save()
  await Usuario({
    usuario: "femartinez",
    password: await bcryptjs.hash("femartinez", salt),
    autoridad: autoridadPreceptor1._id,
  }).save()

  console.log(colors.cyan("Usuarios- Profesores"));
  await Usuario({
    usuario: "gosoria",
    password: await bcryptjs.hash("gosoria", salt),
    autoridad: autoridadProfesor._id,
  }).save()
  await Usuario({
    usuario: "flovergesio",
    password: await bcryptjs.hash("flovergesio", salt),
    autoridad: autoridadProfesor1._id,
  }).save()

  console.log(colors.cyan("Usuarios- Tutores"));
  await Usuario({
    usuario: "pebarbieri",
    password: await bcryptjs.hash("pebarbieri", salt),
    autoridad: autoridadTutor._id,
  }).save()
  await Usuario({
    usuario: "namedina",
    password: await bcryptjs.hash("namedina", salt),
    autoridad: autoridadTutor1._id,
  }).save()
  await Usuario({
    usuario: "lucamps",
    password: await bcryptjs.hash("lucamps", salt),
    autoridad: autoridadTutor2._id,
  }).save()
  await Usuario({
    usuario: "luiraola",
    password: await bcryptjs.hash("luiraola", salt),
    autoridad: autoridadTutor3._id,
  }).save()

  console.log(colors.cyan("Usuario- Administrativo"));
  await Usuario({
    usuario: "admin",
    password: await bcryptjs.hash("admin", salt),
    autoridad: autoridadAdmin._id,
  }).save()

  // salimos del script 20 segundos despues de haber insertado los documentos
  setTimeout(function () {
    console.log(colors.red("Proceso Terminado"));
    return process.exit(1);
  }, 2000);
})();