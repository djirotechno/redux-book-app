import {ADD_BOOK,DELETE_BOOK,DELETE_ALL} from '../constants'

 


export const addBook = data =>{

    return{
        type:ADD_BOOK,
        payload:data
    }
}



export const deleteBook = id =>{

    return{
        type:DELETE_BOOK,
        payload:id
    }
}


export const deleteAll = ()=>{
    return{
        type:DELETE_ALL

    }
}