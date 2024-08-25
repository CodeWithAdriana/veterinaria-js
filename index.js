const operaciones = require('./operaciones');

const args = process.argv.slice(2);
const operacion = args[0];

if (operacion === 'registrar') {
    const nombre = args[1];
    const edad = args[2];
    const animal = args[3];
    const color = args[4];
    const enfermedad = args[5];

    operaciones.registrar(nombre, edad, animal, color, enfermedad);
    console.log('Cita registrada con éxito.');
} else if (operacion === 'leer') {
    const citas = operaciones.leer();
    console.log('Citas registradas:', citas);
} else {
    console.log('Operación no reconocida. Usa "registrar" o "leer".');
}
