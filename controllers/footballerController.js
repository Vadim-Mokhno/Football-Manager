const asyncHandler = require('express-async-handler');
const Footballer = require('../model/Footballer');

//@desc Get all footballers
//@route GET /api/footballers
//@access piblic
const getFootballers = asyncHandler(async (req, res) => {
  const footballers = await Footballer.find();
  res.status(200).json(footballers);
});

//@desc Get a specific footballer
//@route GET /api/footballers/:id
//@access piblic
const getFootballer = asyncHandler(async (req, res) => {
  const footballer = await Footballer.findById(req.params.id);
  if (!footballer) {
    res.status(404);
    throw Error('Footballer not found');
  }
  res.status(200).json(footballer);
});

//@desc Create a footballer
//@route POST /api/footballers
//@access piblic
const createFootballer = asyncHandler(async (req, res) => {
  const { fullname, height, citizenship, position, foot, price, image } =
    req.body;
  if (
    !fullname ||
    !height ||
    !citizenship ||
    !position ||
    !foot ||
    !price ||
    !image
  ) {
    res.status(400);
    throw new Error('All the fields are mandatory!');
  }
  const footballer = await Footballer.create({
    fullname,
    height,
    citizenship,
    position,
    foot,
    price,
    image,
  });
  res.status(201).json(footballer);
});

//@desc Update a specific footballer
//@route PUT /api/footballers/:id
//@access piblic
const updateFootballer = asyncHandler(async (req, res) => {
  const footballer = await Footballer.findById(req.params.id);
  if (!footballer) {
    res.status(404);
    throw Error('Footballer not found');
  }
  const updatedFootballer = await Footballer.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.status(200).json(footballer);
});

//@desc Delete a specific footballer
//@route DELETE /api/footballers/:id
//@access piblic
const deleteFootballer = asyncHandler(async (req, res) => {
  const footballer = await Footballer.findById(req.params.id);
  if (!footballer) {
    res.status(404);
    throw Error('Footballer not found');
  }
  await Footballer.deleteOne({ _id: req.params.id });
  res.status(200).json(footballer);
});

module.exports = {
  getFootballers,
  getFootballer,
  createFootballer,
  updateFootballer,
  deleteFootballer,
};
