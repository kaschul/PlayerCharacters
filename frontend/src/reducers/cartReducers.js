import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_SAVE_SENDTOEMAIL
} from '../constants/cartConstants'

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch(action.type){
    case CART_ADD_ITEM:
      const item = action.payload
      const existItem = state.cartItems.find(((x) => x.pc === item.pc) || ((x) => x.npc === item.npc))

      if (existItem){
        return{
          ...state
        }
      } else {
        return{
          ...state,
          cartItems: [...state.cartItems, item]
        }
      }
    case CART_REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter((x) => x.pc !== action.payload)
      }
    default:
      return state
  }
}