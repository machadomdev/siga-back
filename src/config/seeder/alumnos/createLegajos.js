const Legajo = require("../../../models/Legajo");
const colors = require("colors/safe");

exports.createLegajos = async (
    alumno1,
    alumno2,
    alumno3,
    alumno4,
    alumno5,
    alumno6,
    alumno7,
    alumno8,
    alumno9,
    alumno10,
    alumno11,
    alumno12,
    alumno13,
    alumno14,
    alumno15,
    alumno16,
    alumno17,
    alumno18,
    alumno19,
    alumno20,
    alumno21,
    personaMadre1, 
    personaMadre2, 
    personaMadre3, 
    personaMadre4, 
    personaMadre5, 
    personaMadre6, 
    personaMadre7, 
    personaMadre8, 
    personaMadre9, 
    personaMadre10, 
    personaMadre11, 
    personaMadre12, 
    personaMadre13, 
    personaMadre14, 
    personaMadre15, 
    personaMadre16,
    personaPadre1, 
    personaPadre2, 
    personaPadre3, 
    personaPadre4, 
    personaPadre5, 
    personaPadre6, 
    personaPadre7, 
    personaPadre8, 
    personaPadre9, 
    personaPadre10, 
    personaPadre11, 
    personaPadre12, 
    personaPadre13, 
    personaPadre14, 
    personaPadre15, 
    personaPadre16,
    autoridadTutor1,
    autoridadTutor2,
    autoridadTutor3,
    autoridadTutor4, 
    autoridadTutor5, 
    autoridadTutor6, 
    autoridadTutor7, 
    autoridadTutor8, 
    autoridadTutor9, 
    autoridadTutor10, 
    autoridadTutor11, 
    autoridadTutor12, 
    autoridadTutor13, 
    autoridadTutor14, 
    autoridadTutor15, 
    autoridadTutor16,
    curso1A,
    curso1B,
    curso1C,
    curso1D,
    curso2A,
    curso2B,
    curso2C,
    curso2D
    ) => {
    console.log(colors.cyan("Legajos"));

    await Legajo({
    alumno: alumno1._id,
    padre: personaPadre1._id,
    madre: personaMadre1._id,
    tutor: autoridadTutor1._id,
    archivado: false,
    curso: curso1A._id,
    }).save()

    await Legajo({
    alumno: alumno2._id,
    padre: personaPadre1._id,
    madre: personaMadre1._id,
    tutor: autoridadTutor1._id,
    archivado: false,
    curso: curso1A._id,
    }).save()

    await Legajo({
    alumno: alumno3._id,
    padre: personaPadre1._id,
    madre: personaMadre1._id,
    tutor: autoridadTutor1._id,
    archivado: false,
    curso: curso1A._id,
    }).save()

    await Legajo({
    alumno: alumno4._id,
    padre: personaPadre2._id,
    madre: personaMadre2._id,
    tutor: autoridadTutor2._id,
    archivado: false,
    curso: curso1A._id,
    }).save()

    await Legajo({
    alumno: alumno5._id,
    padre: personaPadre3._id,
    madre: personaMadre3._id,
    tutor: autoridadTutor3._id,
    archivado: false,
    curso: curso1A._id,
    }).save()

    await Legajo({
    alumno: alumno6._id,
    padre: personaPadre3._id,
    madre: personaMadre3._id,
    tutor: autoridadTutor3._id,
    archivado: false,
    curso: curso1A._id,
    }).save()

    await Legajo({
    alumno: alumno7._id,
    padre: personaPadre4._id,
    madre: personaMadre4._id,
    tutor: autoridadTutor4._id,
    archivado: false,
    curso: curso1A._id,
    }).save()

    await Legajo({
        alumno: alumno8._id,
        padre: personaPadre5._id,
        madre: personaMadre5._id,
        tutor: autoridadTutor5._id,
        archivado: false,
        curso: curso1A._id,
    }).save()

    
    await Legajo({
        alumno: alumno9._id,
        padre: personaPadre6._id,
        madre: personaMadre6._id,
        tutor: autoridadTutor6._id,
        archivado: false,
        curso: curso1A._id,
    }).save()

    
    await Legajo({
        alumno: alumno10._id,
        padre: personaPadre7._id,
        madre: personaMadre7._id,
        tutor: autoridadTutor7._id,
        archivado: false,
        curso: curso1A._id,
    }).save()

    
    await Legajo({
        alumno: alumno11._id,
        padre: personaPadre8._id,
        madre: personaMadre8._id,
        tutor: autoridadTutor8._id,
        archivado: false,
        curso: curso2B._id,
    }).save()

    
    await Legajo({
        alumno: alumno12._id,
        padre: personaPadre9._id,
        madre: personaMadre9._id,
        tutor: autoridadTutor9._id,
        archivado: false,
        curso: curso2B._id,
    }).save()

    
    await Legajo({
        alumno: alumno13._id,
        padre: personaPadre9._id,
        madre: personaMadre9._id,
        tutor: autoridadTutor9._id,
        archivado: false,
        curso: curso2B._id,
    }).save()

    
    await Legajo({
        alumno: alumno14._id,
        padre: personaPadre10._id,
        madre: personaMadre10._id,
        tutor: autoridadTutor10._id,
        archivado: false,
        curso: curso2B._id,
    }).save()

    
    await Legajo({
        alumno: alumno15._id,
        padre: personaPadre11._id,
        madre: personaMadre11._id,
        tutor: autoridadTutor11._id,
        archivado: false,
        curso: curso2B._id,
    }).save()

    
    await Legajo({
        alumno: alumno16._id,
        padre: personaPadre12._id,
        madre: personaMadre12._id,
        tutor: autoridadTutor12._id,
        archivado: false,
        curso: curso2B._id,
    }).save()

    
    await Legajo({
        alumno: alumno17._id,
        padre: personaPadre13._id,
        madre: personaMadre13._id,
        tutor: autoridadTutor13._id,
        archivado: false,
        curso: curso2B._id,
    }).save()

    
    await Legajo({
        alumno: alumno18._id,
        padre: personaPadre13._id,
        madre: personaMadre13._id,
        tutor: autoridadTutor13._id,
        archivado: false,
        curso: curso2B._id,
    }).save()

    
    await Legajo({
        alumno: alumno19._id,
        padre: personaPadre14._id,
        madre: personaMadre14._id,
        tutor: autoridadTutor14._id,
        archivado: false,
        curso: curso2B._id,
    }).save()

    
    await Legajo({
        alumno: alumno20._id,
        padre: personaPadre15._id,
        madre: personaMadre15._id,
        tutor: autoridadTutor15._id,
        archivado: false,
        curso: curso2B._id,
    }).save()

    
    await Legajo({
        alumno: alumno21._id,
        padre: personaPadre16._id,
        madre: personaMadre16._id,
        tutor: autoridadTutor16._id,
        archivado: false,
        curso: curso2B._id,
    }).save()
    
    //Agregar mas con los cursos de 2
    
        return {
            alumno1,
            alumno2,
            alumno3,
            alumno4,
            alumno5,
            alumno6,
            alumno7,
            alumno8
        }
}