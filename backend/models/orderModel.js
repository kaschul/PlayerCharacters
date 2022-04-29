import mongoose from 'mongoose'

const orderSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'PartyUsers',
  },

  orderItems: [{
    name: { 
      type: String, 
      required: true
    },
    image: {
      type: String,
      required: true
    },
    pcs: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      default: null,
      ref: 'PCs'
    },
    npcs: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      default: null,
      ref: 'NPCs'
    }
  }],

  sendToEmail: {
    type: String,
    required: true
  }
})

const PlayerOrders = mongoose.model('PlayerOrders', orderSchema)
export default PlayerOrders