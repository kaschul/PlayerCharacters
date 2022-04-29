import asyncHandler from 'express-async-handler'
import PCs from '../models/pcModel.js'

// @desc    Fetch all player characters
// @route   GET /api/pcs
// @access  Public
const getPCs = asyncHandler(async (req, res) => {
  const pcs = await PCs.find({})
  res.json(characters)
})

const getPCById = asyncHandler(async (req, res) => {
  const pc = await PCs.findById(req.params.id)

  if (pc){
    res.json(pc)
  } else {
    //res.status(404).json({message: 'Character not found'})
    res.status(404)
    throw new Error('Character not found')
  }
})

export { getPCs, getPCById }