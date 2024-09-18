import { createSlice } from "@reduxjs/toolkit";


const bookSlice = createSlice({
    name:"books",
    initialState:[],
    reducers:{
        addBook:(state,action)=>{
            if(state.length>=1){
                const id = state[state.length-1].id+1
                state.push(action.payload)
                state[state.length-1].id = id
            }else{
                state.push(action.payload)
                state[0].id = 1
            }
        },
        deleteBook:(state,action)=>{
            return state.filter(item=>item.id != action.payload.id)
        }
    }
})

export default bookSlice.reducer
export const {addBook,deleteBook} = bookSlice.actions