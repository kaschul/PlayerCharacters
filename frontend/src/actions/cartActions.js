import axios from 'axios'
import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_SAVE_SENDTOEMAIL
} from '../constants/cartConstants'

export const addPCToCart = (id) => async (dispatch, getState) => {
  const {data} = await axios.get(`/api/pcs/${id}`)
  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      pc: data._id,
      name: data.name,
      image: data.image
    }
  })
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

export const addNPCToCart = (id) => async (dispatch, getState) => {
  const {data} = await axios.get(`/api/npcs/${id}`)
  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      npc: data._id,
      name: data.name,
      image: data.image
    }
  })
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: CART_REMOVE_ITEM,
    payload: id
  })
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

export const saveSendToEmail = (data) => (dispatch) => {
  dispatch({
    type: CART_SAVE_SENDTOEMAIL,
    payload: data
  })
  localStorage.setItem('sendtoemail',JSON.stringify(data))
}