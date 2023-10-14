const mongoose = require("mongoose");
const { formatTime } = require("../utils/utilities");

const AlumnosSchema = mongoose.Schema({
    persona: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Persona",
    },
    procedenciaEscolar: {
        type: String,
        required: false,
        trim: true,
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

module.exports = mongoose.model("Alumno", AlumnosSchema);
