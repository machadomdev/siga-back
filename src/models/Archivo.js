const mongoose = require("mongoose");
const { formatTime } = require("../utils/utilities");

const ArchivoSchema = mongoose.Schema({
    archivoId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "ArchivoType",
    },
    archivo: {
        type: Buffer,
        required: true,
    },
    nombre: {
        type: String,
        required: true,
    },
    ext: {
        type: String,
        required: true,
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

module.exports = mongoose.model("Archivo", ArchivoSchema);
