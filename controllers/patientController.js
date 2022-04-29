const validator = require('fastest-validator');
const v = new validator();
const { Patient } = require('../models');
// const Patient = require('../models/Patient.js')

const getPatients = (async(req, res) => {
    const patients = await Patient.findAll();
    return res.json(patients);
})

const getAnPatient = (async(req, res) => {
    const id = req.params.id;
    const patient = await Patient.findByPk(id);
    return res.json(patient || {});
});

const createDataPatient = (async(req, res) => {
    const schema = {
        name: 'string',
        placeOfBirth: 'string',
        dateOfBirth: 'string',
        noId: 'string',
        gender: 'string',
        address: 'string',
        contact: 'string',
    }

    const validate = v.validate(req.body, schema);
    if (validate.length) {
        return res
            .status(400)
            .json(validate);
    }

    const patient = await Patient.create(req.body);

    res.json(patient);

});

const updateDataPatient = ('/:id', async(req, res) => {
    const id = req.params.id;
    // res.send(id);
    // cek id apakah ada atau tidak
    let patient = await Patient.findByPk(id);
    if (!patient) {
        return res.json({
            message: 'Patient not found'
        });
    }

    const schema = {
        name: 'string|optional',
        placeOfBirth: 'string|optional',
        dateOfBirth: 'string|optional',
        noId: 'string|optional',
        gender: 'string|optional',
        address: 'string|optional',
        contact: 'string|optional',
    }

    const validate = v.validate(req.body, schema);

    if (validate.length) {
        return res
            .status(400)
            .json(validate);
    }

    patient = await patient.update(req.body);

    res.json(patient);
})

const deleteDataPatient = ('/:id', async(req, res) => {
    const id = req.params.id;

    const patient = await Patient.findByPk(id);
    if (!patient) {
        return res.json({
            message: 'Patient not found'
        });
    }

    await patient.destroy();
    res.json({
        message: 'Data deleted'
    });

});

module.exports = {
    getPatients,
    getAnPatient,
    createDataPatient,
    updateDataPatient,
    deleteDataPatient
}