const mongoose = require("mongoose");
const { format, formatTime } = require("../utils/utilities");

const NotificacionSchema = mongoose.Schema({
    alumno: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Alumno",
    },
    fecha:{
        type: String,
        default: format(new Date)
    },
    leida: {
        type: Boolean,
        default: false
    },
    evento: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Evento",
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

module.exports = mongoose.model("Notificacion", NotificacionSchema);
