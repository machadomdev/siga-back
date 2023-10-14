const mongoose = require("mongoose");

const AutoridadSchema = mongoose.Schema({
    tipo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "AutoridadType",
        required: false,
    },
    escuela: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Escuela",
    },
    persona: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Persona",
    },
    parentezco_tutor: {
        type: mongoose.Schema.Types.String
    },
    cursos: [{ type: mongoose.Schema.Types.ObjectId, ref: "Curso" }],
    alumnos: [{ type: mongoose.Schema.Types.ObjectId, ref: "Alumno" }],
});

module.exports = mongoose.model("Autoridade", AutoridadSchema);
