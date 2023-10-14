const mongoose = require('mongoose');
const { format, formatTime } = require('../utils/utilities');

const InasistenciaSchema = mongoose.Schema({
    alumno: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Alumno'
    },
    curso:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Curso'
    },
    fecha: {
        type: String,
        default: format(new Date)
    },
    valor: {
        type: Number,
        required: true,
    },
    estado: {
        type: String,
        default: "Injustificada"
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

module.exports = mongoose.model('Inasistencia', InasistenciaSchema);