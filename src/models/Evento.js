const mongoose = require("mongoose");
const { formatTime } = require("../utils/utilities");

const EventoSchema = mongoose.Schema({
    emisor_nombre: {
        type: String
    },
    autoridad_emisor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Autoridade",
    },
    tipo: {
        type: String,
        enum: ['Evento','Comunicado','Difusion']
    },
    notificacion: {
        type: Boolean,
        default: false
    },
    titulo: {
        type: String,
        required: true
    },
    contenido:{
        type: String,
        required: true
    },
    descripcion: {
        type: String
    },
    fecha:{
        type: String
    },
    alumnos: [{ type: mongoose.Schema.Types.ObjectId, ref: "Alumno" }],
    cursos: [{ type: mongoose.Schema.Types.ObjectId, ref: "Curso" }],
    difusion: {
        type: Boolean,
        default: false
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

module.exports = mongoose.model("Evento", EventoSchema);
