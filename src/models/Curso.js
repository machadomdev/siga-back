const mongoose = require('mongoose');
const { formatTime } = require('../utils/utilities');

const CursosSchema = mongoose.Schema({
    escuela: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Escuela'
    },
    preceptor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Autoridade'
    },
    nivel: {
        type: String,
        trim: true
    },
    anio: {
        type: String,
        required: true
    },
    seccion: {
        type: String,
        required: true
    },
    turno: {
        type: String,
        enum : ['Mañana','Tarde', 'Noche']
    },
    asistenciaEstado: {
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
})

module.exports = mongoose.model('Curso', CursosSchema);