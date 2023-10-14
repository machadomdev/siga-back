const mongoose = require("mongoose");
const { formatTime } = require("../utils/utilities");

const UsuariosSchema = mongoose.Schema({
    usuario: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        trim: true,
    },
    autoridad: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Autoridade",
    },
    resetToken: {
        type: String,
        required: false,
        trime: true,
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

module.exports = mongoose.model("Usuario", UsuariosSchema);
