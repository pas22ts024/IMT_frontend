import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AsyncThunkConfig} from "modules/types"
import {api} from "modules/api.ts";
import {Category, Categorys} from "src/api/Api.ts";

type T_CategorysSlice = {
    category_name: string
    category: Category | null;
    categorys: Categorys[]
}

const initialState:T_CategorysSlice = {
    category_name: "",
    category: null,
    categorys: []
}

export const fetchCategorys = createAsyncThunk<Categorys[], void, AsyncThunkConfig>(
    "fetch_categorys",
    async function(_, thunkAPI) {
        const state = thunkAPI.getState();
        const response = await api.categorys.categorysList({
            category_name: state.categorys.category_name
        })

        return response.data
    }
)

export const fetchCategory = createAsyncThunk<Category, string, AsyncThunkConfig>(
    "fetch_category",
    async function(id) {
        const response = await api.categorys.categorysRead(id)
        return response.data
    }
)


export const addCategoryToImt = createAsyncThunk<void, number, AsyncThunkConfig>(
    "categorys/add_category_to_imt",
    async function(category_id) {
        await api.categorys.categorysAddToImtCreate(category_id.toString())
    }
)

const categorysSlice = createSlice({
    name: 'categorys',
    initialState: initialState,
    reducers: {
        updateCategoryName: (state, action: PayloadAction<string>) => {
            state.category_name = action.payload
        },
        removeSelectedCategory: (state) => {
            state.category = null
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCategorys.fulfilled, (state, action: PayloadAction<Categorys[]>) => {
            state.categorys = action.payload
        });
        builder.addCase(fetchCategory.fulfilled, (state, action: PayloadAction<Category>) => {
            state.category = action.payload
        });
    }
})

export const { updateCategoryName, removeSelectedCategory} = categorysSlice.actions;

export default categorysSlice.reducer
