import { createSlice } from "@reduxjs/toolkit";


const bookSlice = createSlice({
    name:"books",
    initialState:[],
    reducers:{
        addBook:(state,action)=>{
            state.push(action.payload)
        },
        deleteBook:(state,action)=>{
            const index = state.indexOf(action.payload)
            state.splice(index,1)
        }
    }
})

export default bookSlice.reducer
export const {addBook,deleteBook} = bookSlice.actions