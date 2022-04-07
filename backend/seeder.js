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

        await PCs.insertMany()
        await NPCs.insertMany()

    } catch (error) {

        console.error(`${error}`)
        process.exit(1)
    }
}

const destroyData = async () => {
    try{
        await PCs.deleteMany()
        await NPCs.deleteMany()

        console.log('Data is destroyed')
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