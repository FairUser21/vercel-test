import axios from 'axios'
import { API } from '../Helpers/Constants'
import { getOneUserAction, getUsersAction, getUserToEditAction, clearUserToEditAction } from '../Store/UserReducer'


const toastSettings = {
    position: 'top-right',
    autoclose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined
}


export const createUser = (newUser, toast) => {
    return async (dispatch) => {
        try{
            const response = await axios.post(`${API}/contact/`, newUser)
            dispatch(getUsers())
            toast.success('Successfully added...', toastSettings)
        }catch(e){
            toast.error('Oops!', toastSettings)
        }
    }
}


export const getUsers = () => {
    return async (dispatch) => {
        try {
            const response = await axios(`${API}/contact/`)
            dispatch(getUsersAction(response.data))
        }catch(e){
            console.log(e);
        }
    }
}


export const deleteUser = (id, toast) => {
    return async(dispatch) => {
        try{
            const response = await axios.delete(`${API}/contact/${id}`)
            dispatch(getUsers())
            toast.success('User successfully deleted!')
        }catch{

        }
    }
}



export const getOneUser = (id) => {
    return async (dispatch) => {
        try{
            const response = await axios(`${API}/contact/${id}`)
            dispatch(getOneUserAction(response.data))
        }catch(e){
            console.log(e);
        }
    }
}


export const getUserToEdit = (id) => {
    return async (dispatch) => {
        try {
            const response = await axios(`${API}/contact/${id}`)
            dispatch(getUserToEditAction(response.data))

        }catch(e){
            console.log(e)
        }
    }
}

export const saveEditedUser = (editedUser, toast) => {
    return async (dispatch) => {
        try{
            const response = await axios.put(`${API}/contact/${editedUser.id}`, editedUser)
            dispatch(getUsers())
            toast.success('change success!', toastSettings)
        }catch(e){
            console.log(e)
        }
    }
}


export const clearUserToEdit = () => {
    return async (dispatch) => {
        try{
            dispatch(clearUserToEditAction)
        }catch(e){
            console.log(e);
        }
    }
    
}