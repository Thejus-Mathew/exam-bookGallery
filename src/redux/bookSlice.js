import { createSlice } from "@reduxjs/toolkit";


const bookSlice = createSlice({
    name:"books",
    initialState:[],
    reducers:{
        addBook:(state,action)=>{
            return state.push(action.payload)
        },
        deleteBook:(state,action)=>{
            return state.filter(item=>item.name!=action.payload)
        }
    }
})

export default bookSlice.reducer
export const {addBook,deleteBook} = bookSlice.actions