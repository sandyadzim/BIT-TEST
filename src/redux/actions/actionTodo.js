import * as types from '../types'
import axios from 'axios'
import {url} from '../host'

export const handleGetTodo = () => ({
    type: types.GET_TODO,
    payload: axios({
        method: 'GET',
        url: `${url}/todo`
    })
})

export const handleAddTodo = (title, category) => ({
    type: types.ADD_TODO,
    payload: axios({
        method: 'POST',
        url: `${url}/todo`,
        data:{
            title: title,
            category: category
        }
    })
})

export const handleUpdateTodo = (id, title, category) => ({
    type: types.UPDATE_TODO,
    payload: axios({
        method: 'PUT',
        url: `${url}/todo/${id}`,
        data:{
            title: title,
            category: category
        }
    })
})

export const handleDeleteTodo = (id) => ({
    type: types.DELETE_TODO,
    payload: axios({
        method: 'DELETE',
        url: `${url}/todo/${id}`
    })
})