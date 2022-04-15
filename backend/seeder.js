import dotenv from 'dotenv'
import characters from './data/characters.js'
import npcs from './data/npcs.js'
import PCs from './models/characterModel.js'
import NPCs from './models/npcModel.js'
import connectDB from './config/db.js'

dotenv.config()
connectDB()

const importData = async () => {
    try{
        await PCs.deleteMany()
        await NPCs.deleteMany()

        const createdPC = await PCs.insertMany(characters)
        const createdNPC = await NPCs.insertMany(npcs)
        const firstCharacter = createdPC[0]._id
        const firstNPC = createdNPC[0]._id

        const samplePCs = characters.map((p) => {
            return {...p, character: firstCharacter}
        })
        const sampleNPCs = npcs.map((p) => {
            return {...p, npc: firstNPC}
        })

        await PCs.insertMany(samplePCs)
        await NPCs.insertMany(sampleNPCs)
        console.log('Characters are added!')
        process.exit()

    } catch (error) {

        console.error(`${error}`)
        process.exit(1)
    }
}

const destroyData = async () => {
    try{
        await PCs.deleteMany()
        await NPCs.deleteMany()

        console.log('Characters are deleted!')
        process.exit()

    } catch (error) {

        console.error(`${error}`)
        process.exit(1)
    }
}

if (process.argv[2] === '-d'){
    destroyData()
} else {
    importData()
}