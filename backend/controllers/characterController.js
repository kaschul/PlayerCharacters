import asyncHandler from 'express-async-handler'
import Characters from '../models/characterModel.js'

// @desc    Fetch all player characters
// @route   GET /api/pcs
// @access  Public
const getCharacters = asyncHandler(async (req, res) => {
  const characters = await Characters.find({})
  res.json(characters)
})

const getCharacterById = asyncHandler(async (req, res) => {
  const character = await Characters.findById(req.params.id)

  if (character){
    res.json(character)
  } else {
    //res.status(404).json({message: 'Character not found'})
    res.status(404)
    throw new Error('Character not found')
  }
})

export {getCharacters, getCharacterById}