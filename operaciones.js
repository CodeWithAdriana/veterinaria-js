const fs = require('fs');

const leer = () => {
    const citas = fs.readFileSync('citas.json', 'utf-8');
    return JSON.parse(citas);
};

const registrar = (nombre, edad, animal, color, enfermedad) => {
    const citas = leer(); // Lee las citas existentes
    const nuevaCita = { nombre, edad, animal, color, enfermedad }; // Crea la nueva cita
    citas.push(nuevaCita); // Añade la nueva cita al arreglo de citas
    fs.writeFileSync('citas.json', JSON.stringify(citas, null, 2)); // Guarda las citas actualizadas
};

module.exports = { leer, registrar };
