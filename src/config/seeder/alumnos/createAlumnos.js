const Alumno = require("../../../models/Alumno");
const colors = require("colors/safe");

exports.createAlumnos = async (
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
    personaAlumno21) => {
    console.log(colors.cyan("Alumnos"));
    const alumno1 = await Alumno({ persona: personaAlumno1._id }).save();
    const alumno2 = await Alumno({ persona: personaAlumno2._id }).save();
    const alumno3 = await Alumno({ persona: personaAlumno3._id }).save();
    const alumno4 = await Alumno({ persona: personaAlumno4._id }).save();
    const alumno5 = await Alumno({ persona: personaAlumno5._id }).save();
    const alumno6 = await Alumno({ persona: personaAlumno6._id }).save();
    const alumno7 = await Alumno({ persona: personaAlumno7._id }).save();
    const alumno8 = await Alumno({ persona: personaAlumno8._id }).save();
    const alumno9 = await Alumno({ persona: personaAlumno9._id }).save();
    const alumno10 = await Alumno({ persona: personaAlumno10._id }).save();
    const alumno11 = await Alumno({ persona: personaAlumno11._id }).save();
    const alumno12 = await Alumno({ persona: personaAlumno12._id }).save();
    const alumno13 = await Alumno({ persona: personaAlumno13._id }).save();
    const alumno14 = await Alumno({ persona: personaAlumno14._id }).save();
    const alumno15 = await Alumno({ persona: personaAlumno15._id }).save();
    const alumno16 = await Alumno({ persona: personaAlumno16._id }).save();
    const alumno17 = await Alumno({ persona: personaAlumno17._id }).save();
    const alumno18 = await Alumno({ persona: personaAlumno18._id }).save();
    const alumno19 = await Alumno({ persona: personaAlumno19._id }).save();
    const alumno20 = await Alumno({ persona: personaAlumno20._id }).save();
    const alumno21 = await Alumno({ persona: personaAlumno21._id }).save();
    return {
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
    }
}