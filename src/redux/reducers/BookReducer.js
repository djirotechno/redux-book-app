import  {v4 as uuidv4}  from 'uuid'
import {ADD_BOOK,DELETE_BOOK,DELETE_ALL} from '../constants'


const initialstate = {

    books:[]
}

const helperAddData = action =>{

    return{
        id:uuidv4(),
        title:action.payload.title,
        author:action.payload.author,
    }
}

const removeDataById = (state,id) =>{
    const datafilter = state.filter(book => book.id !==id)
    return datafilter
}

export const BookReducer = (state = initialstate.books,action)=>{

if(localStorage.getItem('booksData')){
    state = JSON.parse(localStorage.getItem('booksData'))
}
    switch (action.type) {
        case ADD_BOOK:
                state = [...state,helperAddData(action)]
                localStorage.setItem('booksData',JSON.stringify(state))
                return state
        
        case DELETE_BOOK:
                state = removeDataById(state,action.payload)
                localStorage.setItem('booksData',JSON.stringify(state))
                return state

        case DELETE_ALL:
              state = []
              localStorage.setItem('booksData',JSON.stringify(state))
                return state
        default: return state
    }
}