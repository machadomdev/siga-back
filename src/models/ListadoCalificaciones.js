const mongoose = require("mongoose");
const { formatTime } = require('../utils/utilities');

const ListadoCalificacionesSchema = mongoose.Schema({
    calificaciones: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Califacion"
    }],
    fecha: {
        type: String
    },
    concepto: {
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

module.exports = mongoose.model("ListadoCalificaciones", ListadoCalificacionesSchema);
