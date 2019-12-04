import * as types from './../types'

const initialState = {
    isLoading: false,
    isError: false,
    isSuccess: false,
    todo: [],
    editTodo:[],
    addTodo:[],
    deleteTodo:[]
};

export default function reducerRoom(state = initialState, action) {
    switch (action.type) {
        // GET Todo
        case `${types.GET_TODO}_PENDING`:
            return {
                ...state,
                isLoading: true
            }
        case `${types.GET_TODO}_FULFILLED`:
            return {
                ...state,
                isLoading: false,
                isSuccess: true,
                todo: action.payload.data
            }
        case `${types.GET_TODO}_REJECTED`:
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        
        // Add Todo
        case `${types.ADD_TODO}_PENDING`:
            return {
                ...state,
                isLoading: true
            }
        case `${types.ADD_TODO}_FULFILLED`:
            return {
                ...state,
                isLoading: false,
                isSuccess: true,
                addTodo: action.payload.data
            }
        case `${types.ADD_TODO}_REJECTED`:
            return {
                ...state,
                isLoading: false,
                isError: true
            }

        // Update Todo
        case `${types.UPDATE_TODO}_PENDING`:
            return {
                ...state,
                isLoading: true
            }
        case `${types.UPDATE_TODO}_FULFILLED`:
            return {
                ...state,
                isLoading: false,
                isSuccess: true,
                editTodo: action.payload.data
            }
        case `${types.UPDATE_TODO}_REJECTED`:
            return {
                ...state,
                isLoading: false,
                isError: true
            }

        // Delete Todo
        case `${types.DELETE_TODO}_PENDING`:
            return {
                ...state,
                isLoading:true
            }
        case `${types.DELETE_TODO}_FULFILLED`:
            return {
                ...state,
                isLoading: false,
                isSuccess: true,
                deleteTodo: action.payload.data
            }
        case `${types.DELETE_TODO}_REJECTED`:
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        default:
            return state
    }
}