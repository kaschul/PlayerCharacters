import dotenv from 'dotenv'
import connectDB from './config/db.js'
import pcs from './data/pcs.js'
import npcs from './data/npcs.js'
import partyplayers from './data/partyplayers.js'
import PCs from './models/pcModel.js'
import NPCs from './models/npcModel.js'
import PartyPlayers from './models/userModel.js'

dotenv.config()
connectDB()

const importData = async () => {
  try{
    await PCs.deleteMany()
    await NPCs.deleteMany()
    await PartyPlayers.deleteMany()

    const createdUsers = await PartyPlayers.insertMany(partyplayers)
    const adminUser = createdUsers[0]._id

    const samplePCs = pcs.map((p) => {
      return {...p, user: adminUser}
    })
    const sampleNPCs = npcs.map((p) => {
      return {...p, user: adminUser}
    })

    await PCs.insertMany(samplePCs)
    await NPCs.insertMany(sampleNPCs)
    console.log('Data is imported!')
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
    await PartyPlayers.deleteMany()

    console.log('Data is destroyed!')
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