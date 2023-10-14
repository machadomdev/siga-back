const mongoose = require("mongoose");
const { formatTime } = require("../utils/utilities");

const AsignaturaSchema = mongoose.Schema({
    nombre: {
        type: String        
    },
    curso: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Curso"
    },
    profesor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Autoridade'
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

module.exports = mongoose.model("Asignatura", AsignaturaSchema);
