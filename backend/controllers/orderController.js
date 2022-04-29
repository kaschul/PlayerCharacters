import asyncHandler from 'express-async-handler'
import PlayerOrders from '../models/orderModel.js'

// @desc    Create new order
// @route   POST  /api/playerorders
// @access  Private
const addOrderItems = asyncHandler(async (req, res) => {
  const {
    orderItems,
    emailAddress
  } = req.body
    
  if (!orderItems || orderItems.length === 0) {
    res.status(400)
    throw new Error('Your party is empty')
  } else {
    const order = new PlayerOrders ({
      user: req.user._id,
      orderItems
    })

    const createdOrder = await order.save()
    return res.status(201).json(createdOrder)
  }
})

// @desc    Get order by ID
// @route   GET  /api/playerorders/:id
// @access  Private
const getOrderById = asyncHandler(async (req, res) => {
  const order = await PlayerOrders.findById(req.params.id).populate(
    'user',
    'name email'
  )

  if (order) {
    return res.json(order)
  } else {
    res.status(404)
    throw new Error('Order not found')
  }
})

// @desc    Get logged in user orders
// @route   GET  /api/playerorders/myorders
// @access  Private
const getMyOrders = asyncHandler(async (req, res) => {
    const playerorders = await PlayerOrders.find({ user: req.user._id })
    return res.json(playerorders)
})

export { addOrderItems, getOrderById, getMyOrders }