const express = require("express");
const router = express.Router();
const authController = require("../../controllers/authController");

router.post("/", authController.autenticarUsuario);

router.get("/", authController.usuarioAutenticado);

router.post("/resetpassword", authController.resetPassword);

router.post("/forgotpassword", authController.forgotPassword);

module.exports = router;
