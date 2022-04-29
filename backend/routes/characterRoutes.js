import express from 'express'
import getPCs, { getPCById } from '../controllers/pcController.js'
import getNPCs, { getNPCById } from '../controllers/npcController.js'

const router = express.Router()

// @desc    Fetch all player characters
// @route   GET /api/pcs
// @access  Public
router.get('/pcs', getPCs)

// @desc    Fetch single player character by id
// @route   GET /api/pcs/:id
// @access  Public
router.get('/pcs/:id', getPCById)

// @desc    Fetch all NPCs
// @route   GET /api/npcs
// @access  Public
router.get('/npcs', getNPCs)

// @desc    Fetch single NPC by id
// @route   GET /api/npcs/:id
// @access  Public
router.get('/npcs/:id', getNPCById)

export default router