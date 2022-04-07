import axios from 'axios'
import { PC_LIST_REQUEST, PC_LIST_SUCCESS, PC_LIST_FAIL,
    PC_DETAIL_REQUEST, PC_DETAIL_SUCCESS, PC_DETAIL_FAIL,
    NPC_LIST_REQUEST, NPC_LIST_SUCCESS, NPC_LIST_FAIL,
    NPC_DETAIL_REQUEST, NPC_DETAIL_SUCCESS, NPC_DETAIL_FAIL } from '../constants/characterConstants'



export const listCharacters = () => async (dispatch) => {
    try{
        dispatch({
            type: PC_LIST_REQUEST
        });

        const {data} = await axios.get('/api/characters')

        dispatch({
            type: PC_LIST_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: PC_LIST_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })
    }
}

export const listCharacterDetails = (id) => async (dispatch) => {
    try{
        dispatch({
            type: PC_DETAIL_REQUEST
        });

        const {data} = await axios.get(`/api/characters/${id}`)

        dispatch({
            type: PC_DETAIL_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: PC_DETAIL_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })
    }
}

export const listNPCs = () => async (dispatch) => {
    try{
        dispatch({
            type: NPC_LIST_REQUEST
        });

        const {data} = await axios.get('/api/npcs')

        dispatch({
            type: NPC_LIST_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: NPC_LIST_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })
    }
}

export const listNPCDetails = (id) => async (dispatch) => {
    try{
        dispatch({
            type: NPC_DETAIL_REQUEST
        });

        const {data} = await axios.get(`/api/npcs/${id}`)

        dispatch({
            type: NPC_DETAIL_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: NPC_DETAIL_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })
    }
}