const Patient = require('../models/Patient');
const asyncHandler = require('../middleware/asyncHandler');

// @desc    Get all patients
// @route   GET /api/patients
// @access  Public
const getPatients = asyncHandler(async (req, res) => {
  const patients = await Patient.find({ isDeleted: false });
  res.json(patients);
});

// @desc    Get patient by ID
// @route   GET /api/patients/:id
// @access  Public
const getPatientById = asyncHandler(async (req, res) => {
  const patient = await Patient.findOne({ _id: req.params.id, isDeleted: false });
  if (patient) {
    res.json(patient);
  } else {
    res.status(404);
    throw new Error('Patient not found');
  }
});

// @desc    Create a new patient
// @route   POST /api/patients
// @access  Public
const createPatient = asyncHandler(async (req, res) => {
  const { name, age, gender, phoneNumber } = req.body;

  const patient = await Patient.create({
    name,
    age,
    gender,
    phoneNumber,
  });
  
  res.status(201).json(patient);
});

// @desc    Update a patient
// @route   PUT /api/patients/:id
// @access  Public
const updatePatient = asyncHandler(async (req, res) => {
  const patient = await Patient.findOne({ _id: req.params.id, isDeleted: false });

  if (patient) {
    patient.name = req.body.name !== undefined ? req.body.name : patient.name;
    patient.age = req.body.age !== undefined ? req.body.age : patient.age;
    patient.gender = req.body.gender !== undefined ? req.body.gender : patient.gender;
    patient.phoneNumber = req.body.phoneNumber !== undefined ? req.body.phoneNumber : patient.phoneNumber;

    const updatedPatient = await patient.save();
    res.json(updatedPatient);
  } else {
    res.status(404);
    throw new Error('Patient not found');
  }
});

// @desc    Delete a patient
// @route   DELETE /api/patients/:id
// @access  Public
const deletePatient = asyncHandler(async (req, res) => {
  const patient = await Patient.findById(req.params.id);

  if (patient) {
    patient.isDeleted = true;
    await patient.save();
    res.json({ message: 'Patient removed' });
  } else {
    res.status(404);
    throw new Error('Patient not found');
  }
});

module.exports = {
  getPatients,
  getPatientById,
  createPatient,
  updatePatient,
  deletePatient,
};
