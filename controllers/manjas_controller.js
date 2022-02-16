// @desc    Get all manjas
// @route   GET /api/v1/manjas
// @access  Public
exports.getManjas = (req, res, next) => {
  res.status(200).json({
    msg: "All manjas",
    data: jsonData,
  })
}

// @desc    Get single manja
// @route   GET /api/v1/manjas/:id
// @access  PUBLIC
exports.getManja = (req, res, next) => {
  res.status(200).json({
    msg: "Single manja",
    data: jsonData,
    hello: req.hello,
  })
}

// @desc    Create new manja
// @route   POST /api/v1/manjas/:id
// @access  Private
exports.createManja = (req, res, next) => {
  res.status(200).json({
    msg: "New manja created",
    data: jsonData,
  })
}

// @desc    Update existing manja
// @route   PUT /api/v1/manjas/:id
// @access  Private
exports.updateManja = (req, res, next) => {
  res.status(200).json({
    msg: "Manja Updated",
    data: jsonData,
  })
}

// @desc    Delete existing manja
// @route   DELETE /api/v1/manjas/:id
// @access  Private
exports.deleteManja = (req, res, next) => {
  res.status(200).json({
    msg: "Manja Deleted",
    data: jsonData,
  })
}

