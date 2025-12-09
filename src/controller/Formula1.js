const { findAllPilotos, PilotoExistsById, PilotoExistsByName, modifyPiloto, addPiloto, removePiloto, findPiloto} = require('../service/Formula1');

const getPilotos = (async (req, res) => {

    const Pilotos = await findAllPilotos();

    res.status(200).json(Pilotos);
});

const getPiloto = (async (req, res) => {
    const id = req.params.id;

    if (! await PilotoExistsById(id)) {
        return res.status(404).json({
            code: 404,
            title: 'not-found',
            message: 'El piloto no existe'
        });
    }

    const piloto = await findPiloto(id);

    res.status(200).json(piloto);
});

const postPiloto = (async (req, res) => {
    const name = req.body.name;

    if (await PilotoExistsByName(name)) {
        return res.status(409).json({
            code: 409,
            title: 'conflict',
            message: 'ya existe un piloto con ese nombre'
        });
    }
    
   
    const equipo = req.body.equipo;
    const fecha_nacimiento = req.body.fecha_nacimiento;
    const nº_victorias = req.body.nº_victorias;
    const mejor_tiempo = req.body.mejor_tiempo;
    const campeonatos = req.body.campeonatos;
    const numero_campeonatos = req.body.numero_campeonatos;
    const comparte_equipo= req.body.comparte_equipo;

    
    const newPiloto = await addPiloto(name, equipo, fecha_nacimiento, nº_victorias, mejor_tiempo, campeonatos, numero_campeonatos,comparte_equipo);
   
    res.status(201).json(newPiloto);
});

const putPiloto = (async (req, res) => {
    const id = req.params.id;
    
    if (!await PilotoExistsById(id)) {
        return res.status(404).json({
            code: 404,
            title: 'not-found',
            message: 'el piloto no existe'
        });
    }
   
    const name = req.body.name;
    const equipo = req.body.equipo;
    const fecha_nacimiento = req.body.fecha_nacimiento;
    const nº_victorias = req.body.nº_victorias;
    const mejor_tiempo = req.body.mejor_tiempo;
    const campeonatos = req.body.campeonatos;
    const numero_campeonatos = req.body.numero_campeonatos;
    const comparte_equipo= req.body.comparte_equipo;

    await modifyPiloto(id, name, equipo, fecha_nacimiento, nº_victorias, mejor_tiempo, campeonatos, numero_campeonatos, comparte_equipo);

    res.status(204).end();
});

const deletePiloto = (async (req, res) => {
    const id = req.params.id;
    
    if (!await PilotoExistsById(id)) {
        return res.status(404).json({
            code: 404,
            title: 'not-found',
            message: 'el piloto no existe'
        });
    }
    await removePiloto(id);
    
    res.status(204).end();
});

module.exports = {
    getPilotos,
    getPiloto,
    postPiloto,
    putPiloto,
    deletePiloto
}