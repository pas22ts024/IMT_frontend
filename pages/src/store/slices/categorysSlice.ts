import {createSlice} from "@reduxjs/toolkit";

type T_CategorysSlice = {
    category_name: string
}

const initialState:T_CategorysSlice = {
    category_name: "",
}


const categorysSlice = createSlice({
    name: 'categorys',
    initialState: initialState,
    reducers: {
        updateCategoryName: (state, action) => {
            state.category_name = action.payload
        }
    }
})

export const { updateCategoryName} = categorysSlice.actions;

export default categorysSlice.reducer