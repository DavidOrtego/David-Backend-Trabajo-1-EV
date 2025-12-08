const express = require('express');
const router = express.Router();

const { getPilotos, getPiloto, postPiloto, putPiloto, deletePiloto } = require('../controller/Formula1');

router.get('/Pilotos', getPilotos);
router.get('/Pilotos/:id',getPiloto);
router.post('/Pilotos', postPiloto);
router.put('/Pilotos/:id', putPiloto);
router.delete('/Pilotos/:id', deletePiloto);

module.exports = router;
