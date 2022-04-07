import axios from 'axios'
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from '../constants/cartConstants'

export const addToCart = (id) => async (dispatch, getState) => {
    const {data} = await axios.get(`/api/characters/${id}`)

    dispatch({
        type: CART_ADD_ITEM,
        payload: {
            character: data._id,
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

    localStorage.setItem('cartItems', JSON.stringify.getState().cart.cartItems)
}