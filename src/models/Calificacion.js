const mongoose = require("mongoose");
const { formatTime } = require("../utils/utilities");

const CalificacionSchema = mongoose.Schema({
    alumno: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Alumno"
    },
    asignatura: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Asignatura"
    },
    valor: {
        type: String,
        default: "A"
    },
    ausente: {
        type: Boolean,
        default: false
    },
    fecha:{
        type: String
    },
    createdAt: {
        type: Date,
        default: formatTime(new Date),
    },
    updatedAt: {
        type: Date,
        default: formatTime(new Date),
    },
});

module.exports = mongoose.model("Calificacion", CalificacionSchema);
