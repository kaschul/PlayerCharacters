import {
  PC_LIST_REQUEST,
  PC_LIST_SUCCESS,
  PC_LIST_FAIL,
  PC_DETAIL_REQUEST,
  PC_DETAIL_SUCCESS,
  PC_DETAIL_FAIL,
  NPC_LIST_REQUEST,
  NPC_LIST_SUCCESS,
  NPC_LIST_FAIL,
  NPC_DETAIL_REQUEST,
  NPC_DETAIL_SUCCESS,
  NPC_DETAIL_FAIL
} from '../constants/characterConstants'

export const characterListReducer = (state = { characters: [] }, action) => {
  switch (action.type) {
    case PC_LIST_REQUEST:
      return { loading: true, characters: [] }
    case PC_LIST_SUCCESS:
      return { loading: false, characters: action.payload }
    case PC_LIST_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const characterDetailReducer = (state = { character: {} }, action ) => {
  switch (action.type) {
    case PC_DETAIL_REQUEST:
      return { loading: true, ...state }
    case PC_DETAIL_SUCCESS:
      return { loading: false, character: action.payload }
    case PC_DETAIL_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const npcListReducer = (state = { npcs: [] }, action) => {
  switch (action.type) {
    case NPC_LIST_REQUEST:
      return { loading: true, npcs: [] }
    case NPC_LIST_SUCCESS:
      return { loading: false, npcs: action.payload }
    case NPC_LIST_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const npcDetailReducer = (state = { npc: {} }, action ) => {
  switch (action.type) {
    case NPC_DETAIL_REQUEST:
      return { loading: true, ...state }
    case NPC_DETAIL_SUCCESS:
      return { loading: false, npc: action.payload }
    case NPC_DETAIL_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}