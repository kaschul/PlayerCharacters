import asyncHandler from 'express-async-handler'
import NonPlayerCharacters from '../models/npcModel.js'

// @desc    Fetch all non-player characters
// @route   GET /api/npcs
// @access  Public
const getNPCs = asyncHandler(async (req, res) => {
    const npcs = await NonPlayerCharacters.find({})
    res.json(npcs)
})

const getNPCById = asyncHandler(async (req, res) => {
    const npc = await NonPlayerCharacters.findById(req.params.id)

    if (npc){
        res.json(npc)
    } else {
        //res.status(404).json({message: 'Character not found'})
        res.status(404)
        throw new Error('Character not found')
    }
})

export {getNPCs, getNPCById}