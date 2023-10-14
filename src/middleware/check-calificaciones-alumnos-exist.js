const responseService = require("../services/responseService");

const Alumno = require("../models/Alumno");

module.exports = async function (req, res, next) {
  const { calificaciones } = req.body;

  try {
    const alumnosNotExist = [];
    for (let index = 0; index < calificaciones.length; index++) {
      const element = calificaciones[index];
      const alumnoExist = await Alumno.findById({ _id: element.alumno });
      if (!alumnoExist) {
        alumnosNotExist.push(element.alumno);
      }
    }

    if (alumnosNotExist.length) {
        throw new Error( `Los siguientes IDS: ${alumnosNotExist} no pertenecen a alumnos registrados en nuestra base de datos.`)
    }
    next();
  } catch (error) {
    res
      .status(400)
      .json(
        responseService.crearBadResponse(
          error.message
        )
      );
  }
  
};
