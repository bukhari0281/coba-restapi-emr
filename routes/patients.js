const express = require('express');
const router = express.Router();

const {
    getPatients,
    getAnPatient,
    createDataPatient,
    updateDataPatient,
    deleteDataPatient
} = require('../controllers/patientController')

router.get('/data', getPatients)
router.get('/data/:id', getAnPatient)
router.post('/data/', createDataPatient)
router.put('/data/:id', updateDataPatient)
router.delete('/data/:id', deleteDataPatient)

module.exports = router;