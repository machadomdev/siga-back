const Autoridad = require("../../../models/Autoridad");
const Usuario = require("../../../models/Usuario");
const bcryptjs = require("bcryptjs");
const colors = require("colors/safe");

exports.createTutores = async (
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
) => {
  console.log(colors.cyan("Tutores"));

  const autoridadTutor1 = await Autoridad({
    persona: personaPadre1._id,
    tipo: autoridadTutorType._id,
    alumnos: [alumno1._id, alumno2._id, alumno3._id],
    cursos: [],
    escuela: escuelaFray._id,
  }).save();

  const autoridadTutor2 = await Autoridad({
    persona: personaMadre2._id,
    tipo: autoridadTutorType._id,
    alumnos: [alumno4._id],
    cursos: [],
    escuela: escuelaFray._id,
  }).save();

  const autoridadTutor3 = await Autoridad({
    persona: personaMadre3._id,
    tipo: autoridadTutorType._id,
    alumnos: [alumno5._id, alumno6._id],
    cursos: [],
    escuela: escuelaFray._id,
  }).save();

  const autoridadTutor4 = await Autoridad({
    persona: personaPadre4._id,
    tipo: autoridadTutorType._id,
    alumnos: [alumno7._id],
    cursos: [],
    escuela: escuelaFray._id,
  }).save();

  const autoridadTutor5 = await Autoridad({
    persona: personaMadre5._id,
    tipo: autoridadTutorType._id,
    alumnos: [alumno8._id],
    cursos: [],
    escuela: escuelaFray._id,
  }).save();

  const autoridadTutor6 = await Autoridad({
    persona: personaMadre6._id,
    tipo: autoridadTutorType._id,
    alumnos: [alumno9._id],
    cursos: [],
    escuela: escuelaFray._id,
  }).save();

  const autoridadTutor7 = await Autoridad({
    persona: personaMadre7._id,
    tipo: autoridadTutorType._id,
    alumnos: [alumno10._id],
    cursos: [],
    escuela: escuelaFray._id,
  }).save();

  const autoridadTutor8 = await Autoridad({
    persona: personaPadre8._id,
    tipo: autoridadTutorType._id,
    alumnos: [alumno11._id],
    cursos: [],
    escuela: escuelaFray._id,
  }).save();

  const autoridadTutor9 = await Autoridad({
    persona: personaMadre9._id,
    tipo: autoridadTutorType._id,
    alumnos: [alumno12._id, alumno13._id],
    cursos: [],
    escuela: escuelaFray._id,
  }).save();

  const autoridadTutor10 = await Autoridad({
    persona: personaMadre10._id,
    tipo: autoridadTutorType._id,
    alumnos: [alumno14._id],
    cursos: [],
    escuela: escuelaFray._id,
  }).save();

  const autoridadTutor11 = await Autoridad({
    persona: personaPadre11._id,
    tipo: autoridadTutorType._id,
    alumnos: [alumno15._id],
    cursos: [],
    escuela: escuelaFray._id,
  }).save();

  const autoridadTutor12 = await Autoridad({
    persona: personaPadre12._id,
    tipo: autoridadTutorType._id,
    alumnos: [alumno16._id],
    cursos: [],
    escuela: escuelaFray._id,
  }).save();

  const autoridadTutor13 = await Autoridad({
    persona: personaPadre13._id,
    tipo: autoridadTutorType._id,
    alumnos: [alumno17._id, alumno18._id],
    cursos: [],
    escuela: escuelaFray._id,
  }).save();

  const autoridadTutor14 = await Autoridad({
    persona: personaMadre14._id,
    tipo: autoridadTutorType._id,
    alumnos: [alumno19._id],
    cursos: [],
    escuela: escuelaFray._id,
  }).save();

  const autoridadTutor15 = await Autoridad({
    persona: personaMadre15._id,
    tipo: autoridadTutorType._id,
    alumnos: [alumno20._id],
    cursos: [],
    escuela: escuelaFray._id,
  }).save();

  const autoridadTutor16 = await Autoridad({
    persona: personaPadre16._id,
    tipo: autoridadTutorType._id,
    alumnos: [alumno21._id],
    cursos: [],
    escuela: escuelaFray._id,
  }).save();

  console.log(colors.cyan("Usuarios - Tutores"));
  const salt = await bcryptjs.genSalt(10);
  await Usuario({
    usuario: "tutor1",
    password: await bcryptjs.hash("tutor1", salt),
    autoridad: autoridadTutor1._id,
  }).save();
  await Usuario({
    usuario: "tutor2",
    password: await bcryptjs.hash("tutor2", salt),
    autoridad: autoridadTutor2._id,
  }).save();
  await Usuario({
    usuario: "tutor3",
    password: await bcryptjs.hash("tutor3", salt),
    autoridad: autoridadTutor3._id,
  }).save();
  await Usuario({
    usuario: "tutor4",
    password: await bcryptjs.hash("tutor4", salt),
    autoridad: autoridadTutor4._id,
  }).save();
  await Usuario({
    usuario: "tutor5",
    password: await bcryptjs.hash("tutor5", salt),
    autoridad: autoridadTutor5._id,
  }).save();
  await Usuario({
    usuario: "tutor6",
    password: await bcryptjs.hash("tutor6", salt),
    autoridad: autoridadTutor6._id,
  }).save();
  await Usuario({
    usuario: "tutor7",
    password: await bcryptjs.hash("tutor7", salt),
    autoridad: autoridadTutor7._id,
  }).save();
  await Usuario({
    usuario: "tutor8",
    password: await bcryptjs.hash("tutor8", salt),
    autoridad: autoridadTutor8._id,
  }).save();
  await Usuario({
    usuario: "tutor9",
    password: await bcryptjs.hash("tutor9", salt),
    autoridad: autoridadTutor9._id,
  }).save();
  await Usuario({
    usuario: "tutor10",
    password: await bcryptjs.hash("tutor10", salt),
    autoridad: autoridadTutor10._id,
  }).save();
  await Usuario({
    usuario: "tutor11",
    password: await bcryptjs.hash("tutor11", salt),
    autoridad: autoridadTutor11._id,
  }).save();
  await Usuario({
    usuario: "tutor12",
    password: await bcryptjs.hash("tutor12", salt),
    autoridad: autoridadTutor12._id,
  }).save();
  await Usuario({
    usuario: "tutor13",
    password: await bcryptjs.hash("tutor13", salt),
    autoridad: autoridadTutor13._id,
  }).save();
  await Usuario({
    usuario: "tutor14",
    password: await bcryptjs.hash("tutor14", salt),
    autoridad: autoridadTutor14._id,
  }).save();
  await Usuario({
    usuario: "tutor15",
    password: await bcryptjs.hash("tutor15", salt),
    autoridad: autoridadTutor15._id,
  }).save();
  await Usuario({
    usuario: "tutor16",
    password: await bcryptjs.hash("tutor16", salt),
    autoridad: autoridadTutor16._id,
  }).save();
  return { 
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
  };
};
