"use strict";
const config = require("config");
const mongoose = require("mongoose");
const colors = require("colors/safe");
const { createCursos } = require("./createCursos");
const { createAsignaturas } = require("./createAsignaturas");
const { createAdmin } = require("./createAdmin");
const { createPersonasAlumnos } = require("./alumnos/createPersonasAlumnos");
const { createProfesores } = require("./createProfesores");
const { createPreceptores } = require("./createPreceptores");
const { createPersonasPadres } = require("./alumnos/createPersonasPadres");
const { createAlumnos } = require("./alumnos/createAlumnos");
const { createLegajos } = require("./alumnos/createLegajos");
const { createTutores } = require("./alumnos/createTutores");
const { createEscuelas } = require("./createEscuelas");
const { createTipoAutoridades } = require("./createTipoAutoridades");

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

  // Tipo de autoridades

  const {
    autoridadAdminType,
    autoridadPreceptorType,
    autoridadProfesorType,
    autoridadTutorType,
  } = await createTipoAutoridades();

  // Escuelas

  const { escuelaEnet, escuelaFray } = await createEscuelas();

  // Cursos

  const {
    curso1A,
    curso1B,
    curso1C,
    curso1D,
    curso2A,
    curso2B,
    curso2C,
    curso2D,
  } = await createCursos(escuelaFray, autoridadPreceptorType);

  // Administrativo

  await createAdmin(escuelaFray, autoridadAdminType);

  // Profesores

 const { autoridadProfesor1, autoridadProfesor2 } = await createProfesores(
    autoridadProfesorType,
    escuelaFray,
    curso1A,
    curso1B,
    curso1C,
    curso1D,
    curso2A,
    curso2B,
    curso2C,
    curso2D)

  // Preceptores
  
    await createPreceptores(
      escuelaFray,
      autoridadPreceptorType,
      curso1A,
      curso1B,
      curso1C,
      curso1D,
      curso2A,
      curso2B,
      curso2C,
      curso2D
    );

  // Asignaturas

  await createAsignaturas(
    autoridadProfesor1,
    autoridadProfesor2,
    curso1A,
    curso1B,
    curso1C,
    curso1D,
    curso2A,
    curso2B,
    curso2C,
    curso2D
  );

  // Personas Alumnos

  const {
    personaAlumno1,
    personaAlumno2,
    personaAlumno3,
    personaAlumno4,
    personaAlumno5,
    personaAlumno6,
    personaAlumno7,
    personaAlumno8,
    personaAlumno9,
    personaAlumno10,
    personaAlumno11,
    personaAlumno12,
    personaAlumno13,
    personaAlumno14,
    personaAlumno15,
    personaAlumno16,
    personaAlumno17,
    personaAlumno18,
    personaAlumno19,
    personaAlumno20,
    personaAlumno21,
  } = await createPersonasAlumnos();

  // Personas Padres

  const {
    personaMadre1, 
    personaMadre2, 
    personaMadre3, 
    personaMadre4, 
    personaMadre5, 
    personaMadre6, 
    personaMadre7, 
    personaMadre8, 
    personaMadre9, 
    personaMadre10, 
    personaMadre11, 
    personaMadre12, 
    personaMadre13, 
    personaMadre14, 
    personaMadre15, 
    personaMadre16,
    personaPadre1, 
    personaPadre2, 
    personaPadre3, 
    personaPadre4, 
    personaPadre5, 
    personaPadre6, 
    personaPadre7, 
    personaPadre8, 
    personaPadre9, 
    personaPadre10, 
    personaPadre11, 
    personaPadre12, 
    personaPadre13, 
    personaPadre14, 
    personaPadre15, 
    personaPadre16,
  } = await createPersonasPadres();

  
  // Alumnos

  const {
    alumno1,
    alumno2,
    alumno3,
    alumno4,
    alumno5,
    alumno6,
    alumno7,
    alumno8,
    alumno9,
    alumno10,
    alumno11,
    alumno12,
    alumno13,
    alumno14,
    alumno15,
    alumno16,
    alumno17,
    alumno18,
    alumno19,
    alumno20,
    alumno21
  } = await createAlumnos(
    personaAlumno1,
    personaAlumno2,
    personaAlumno3,
    personaAlumno4,
    personaAlumno5,
    personaAlumno6,
    personaAlumno7,
    personaAlumno8,
    personaAlumno9,
    personaAlumno10,
    personaAlumno11,
    personaAlumno12,
    personaAlumno13,
    personaAlumno14,
    personaAlumno15,
    personaAlumno16,
    personaAlumno17,
    personaAlumno18,
    personaAlumno19,
    personaAlumno20,
    personaAlumno21
  );

  // Autoridades Tutores

  const { 
    autoridadTutor1, 
    autoridadTutor2, 
    autoridadTutor3, 
    autoridadTutor4, 
    autoridadTutor5, 
    autoridadTutor6, 
    autoridadTutor7, 
    autoridadTutor8, 
    autoridadTutor9, 
    autoridadTutor10, 
    autoridadTutor11, 
    autoridadTutor12, 
    autoridadTutor13, 
    autoridadTutor14, 
    autoridadTutor15, 
    autoridadTutor16
   } =
    await createTutores(
      personaPadre1,
      personaMadre2,
      personaMadre3,
      personaPadre4,
      personaMadre5,
      personaMadre6,
      personaMadre7,
      personaPadre8,
      personaMadre9,
      personaMadre10,
      personaPadre11,
      personaPadre12,
      personaPadre13,
      personaMadre14,
      personaMadre15,
      personaPadre16,
      autoridadTutorType,
      escuelaFray,
      alumno1,
      alumno2,
      alumno3,
      alumno4,
      alumno5,
      alumno6,
      alumno7,
      alumno8,
      alumno9,
      alumno10,
      alumno11,
      alumno12,
      alumno13,
      alumno14,
      alumno15,
      alumno16,
      alumno17,
      alumno18,
      alumno19,
      alumno20,
      alumno21
    );

  // Legajos

  await createLegajos(
    alumno1,
    alumno2,
    alumno3,
    alumno4,
    alumno5,
    alumno6,
    alumno7,
    alumno8,
    alumno9,
    alumno10,
    alumno11,
    alumno12,
    alumno13,
    alumno14,
    alumno15,
    alumno16,
    alumno17,
    alumno18,
    alumno19,
    alumno20,
    alumno21,
    personaMadre1, 
    personaMadre2, 
    personaMadre3, 
    personaMadre4, 
    personaMadre5, 
    personaMadre6, 
    personaMadre7, 
    personaMadre8, 
    personaMadre9, 
    personaMadre10, 
    personaMadre11, 
    personaMadre12, 
    personaMadre13, 
    personaMadre14, 
    personaMadre15, 
    personaMadre16,
    personaPadre1, 
    personaPadre2, 
    personaPadre3, 
    personaPadre4, 
    personaPadre5, 
    personaPadre6, 
    personaPadre7, 
    personaPadre8, 
    personaPadre9, 
    personaPadre10, 
    personaPadre11, 
    personaPadre12, 
    personaPadre13, 
    personaPadre14, 
    personaPadre15, 
    personaPadre16,
    autoridadTutor1,
    autoridadTutor2,
    autoridadTutor3,
    autoridadTutor4, 
    autoridadTutor5, 
    autoridadTutor6, 
    autoridadTutor7, 
    autoridadTutor8, 
    autoridadTutor9, 
    autoridadTutor10, 
    autoridadTutor11, 
    autoridadTutor12, 
    autoridadTutor13, 
    autoridadTutor14, 
    autoridadTutor15, 
    autoridadTutor16,
    curso1A,
    curso1B,
    curso1C,
    curso1D,
    curso2A,
    curso2B,
    curso2C,
    curso2D
  );

    //Falta crear Eventos - Inasistencias - Listados de Calificaciones 


  // salimos del script 20 segundos despues de haber insertado los documentos
  setTimeout(function () {
    console.log(colors.red("Proceso Terminado"));
    return process.exit(1);
  }, 2000);
})();


