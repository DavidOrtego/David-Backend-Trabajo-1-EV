const db = require('../configuration/database.js').db;

const findAllPilotos = (async () => {
    return await db('Pilotos').select('*');
});

const findPiloto = (async(id) => {
    return await db('Pilotos').select('*').where({id: id}).first();
});

const addPiloto = (async(name, equipo, fecha_nacimiento, nº_victorias, mejor_tiempo, campeonatos, numero_campeonatos,comparte_equipo) => {
    return await db('Pilotos').insert({
        name: name,
        equipo: equipo,
        fecha_nacimiento: fecha_nacimiento,
        nº_victorias: nº_victorias,
        mejor_tiempo: mejor_tiempo,
        campeonatos: campeonatos,
        numero_campeonatos: numero_campeonatos,
        comparte_equipo: comparte_equipo
    });
});

const modifyPiloto = (async(id, name, equipo, fecha_nacimiento, nº_victorias, mejor_tiempo, campeonatos, numero_campeonatos, comparte_equipo) => {
    await db('Pilotos').where({id: id}).update({
        name: name,
        equipo: equipo,
        fecha_nacimiento: fecha_nacimiento,
        nº_victorias: nº_victorias,
        mejor_tiempo: mejor_tiempo,
        campeonatos: campeonatos,
        numero_campeonatos: numero_campeonatos,
        comparte_equipo: comparte_equipo
    });
});

const removePiloto = (async(id) => {
    await db('Pilotos').where({id: id}).del();
});

const PilotoExistsById = (async(id) => {
    const city = await db('Pilotos').select('*').where({id: id}).first();
    return city != null;
});

const PilotoExistsByName = (async(name) => {
    const city = await db('Pilotos').select('*').where({name: name}).first();
    if (city === undefined) {
        return false;
    } else {
        return true;
    }
});



module.exports = {
    findAllPilotos,
    findPiloto,
    addPiloto,
    modifyPiloto,
    removePiloto,
    PilotoExistsById,
    PilotoExistsByName
}