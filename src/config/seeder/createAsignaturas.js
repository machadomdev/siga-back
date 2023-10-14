const Asignatura = require("../../models/Asignatura");
const colors = require("colors/safe");
exports.createAsignaturas = async (autoridadProfesor1, autoridadProfesor2, curso1A, curso1B, curso1C, curso1D, curso2A, curso2B, curso2C, curso2D ) => {
    console.log(colors.cyan("Asignaturas"));

    // Asignaturas Profesor 1
    
    const arrayNombreMateriasProfesor1 = ["Matematica", "Lengua"];
  
    const arrayCursosProfesor1 = [ 
      {profesor:autoridadProfesor1 ,curso:curso1B},
      {profesor:autoridadProfesor1 ,curso:curso1A},
      {profesor:autoridadProfesor1 ,curso:curso1C},
      {profesor:autoridadProfesor1 ,curso:curso1D},
      {profesor:autoridadProfesor1 ,curso:curso2A},
      {profesor:autoridadProfesor1 ,curso:curso2B},
      {profesor:autoridadProfesor1 ,curso:curso2C},
      {profesor:autoridadProfesor1 ,curso:curso2D},
    ];
  

    for (let index = 0; index < arrayNombreMateriasProfesor1.length; index++) {
      // nombre de la materia
      const materia = arrayNombreMateriasProfesor1[index];
      // sagundo array
      for (let index = 0; index < arrayCursosProfesor1.length; index++) { 
        // objeto curso
        const curso = arrayCursosProfesor1[index].curso;
        // objeto profesor
        const profesor = arrayCursosProfesor1[index].profesor;
        await Asignatura({
          nombre: materia,
          curso: curso._id,
          profesor: profesor._id 
        }).save();
      }
    }

    // Asignaturas Profesor 2

    const arrayNombreMateriasProfesor2 = ["Química", "Física"];

    const arrayCursosProfesor2 = [ 
      {profesor:autoridadProfesor2 ,curso:curso1A},
      {profesor:autoridadProfesor2 ,curso:curso1B},
      {profesor:autoridadProfesor2 ,curso:curso1C},
      {profesor:autoridadProfesor2 ,curso:curso1D},
      {profesor:autoridadProfesor2 ,curso:curso2A},
      {profesor:autoridadProfesor2 ,curso:curso2B},
      {profesor:autoridadProfesor2 ,curso:curso2C},
      {profesor:autoridadProfesor2 ,curso:curso2D},
    ];
    
    for (let index = 0; index < arrayNombreMateriasProfesor2.length; index++) {
      // nombre de la materia
      const materia = arrayNombreMateriasProfesor2[index];
      // sagundo array
      for (let index = 0; index < arrayCursosProfesor2.length; index++) { 
        // objeto curso
        const curso = arrayCursosProfesor2[index].curso;
        // objeto profesor
        const profesor = arrayCursosProfesor2[index].profesor;
        await Asignatura({
          nombre: materia,
          curso: curso._id,
          profesor: profesor._id 
        }).save();
      }
    }
}
