import express from 'express'
import getCharacters, { getCharacterById } from '../controllers/characterController.js'
import getNPCs, { getNPCById } from '../controllers/npcController.js'

const router = express.Router()

// @desc    Fetch all player characters
// @route   GET /api/characters
// @access  Public
router.get('/characters', getCharacters)

// @desc    Fetch single player character by id
// @route   GET /api/characters/:id
// @access  Public
router.get('/characters/:id', getCharacterById)

// @desc    Fetch all NPCs
// @route   GET /api/npcs
// @access  Public
router.get('/npcs', getNPCs)

// @desc    Fetch single NPC by id
// @route   GET /api/npcs/:id
// @access  Public
router.get('/npcs/:id', getNPCById)

export default router