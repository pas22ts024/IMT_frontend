import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {DEFAULT_DATE_FORMATION_END, DEFAULT_DATE_FORMATION_START} from "modules/consts.ts";
import {api} from "modules/api.ts";
import {AsyncThunkConfig, E_ImtStatus, T_CartDataResponse, T_CategoryUpdateValue} from "modules/types"
import {Imt, Imts, CategoryItem} from "src/api/Api.ts";
import {T_ImtsFilters} from "modules/types.ts";

type T_ImtsSlice = {
    draft_imt_id: number,
    categorys_count: number ,
    imt: Imt | null,
    imts: Imts[],
    filters: T_ImtsFilters
}

const initialState:T_ImtsSlice = {
    draft_imt_id: 0,
    categorys_count: 0,
    imt: null,
    imts: [],
    filters: {
        status: 0,
        date_formation_start: DEFAULT_DATE_FORMATION_START,
        date_formation_end: DEFAULT_DATE_FORMATION_END,
        owner: ""
    }
}

export const fetchCartData = createAsyncThunk<T_CartDataResponse, void, AsyncThunkConfig>(
    "imts/cart",
    async function() {
        const response = await api.imts.imtsCartList()
        return response.data
    }
)

export const fetchImt = createAsyncThunk<Imt, string, AsyncThunkConfig>(
    "imts/imt",
    async function(imt_id) {
        const response = await api.imts.imtsRead(imt_id)
        return response.data
    }
)

export const fetchImts = createAsyncThunk<Imts[], void, AsyncThunkConfig>(
    "imts/imts",
    async function(_, thunkAPI) {
        const state = thunkAPI.getState()

        const response = await api.imts.imtsList({
            status: state.imts.filters.status,
            date_formation_start: state.imts.filters.date_formation_start,
            date_formation_end: state.imts.filters.date_formation_end
        })

        return response.data.filter(imt => imt.owner?.includes(state.imts.filters.owner))
    }
)

export const removeCategoryFromDraftImt = createAsyncThunk<CategoryItem[] | null, number, AsyncThunkConfig>(
    "imts/remove_category",
    async function(category_id, thunkAPI) {
        const state = thunkAPI.getState()
        if (state.imts.imt) {
            const response = await api.imts.imtsDeleteCategoryDelete(state.imts.imt.id.toString(), category_id.toString())
            return response.data
        }

        return null
    }
)

export const deleteDraftImt = createAsyncThunk<void, void, AsyncThunkConfig>(
    "imts/delete_draft_imt",
    async function(_, {getState}) {
        const state = getState()
        if (state.imts.imt) {
            await api.imts.imtsDeleteDelete(state.imts.imt.id.toString())
        }
    }
)

export const sendDraftImt = createAsyncThunk<void, void, AsyncThunkConfig>(
    "imts/send_draft_imt",
    async function(_, {getState}) {
        const state = getState()
        if (state.imts.imt) {
            await api.imts.imtsUpdateStatusUserUpdate(state.imts.imt.id.toString())
        }
    }
)

export const updateImt = createAsyncThunk<void, Partial<Imt>, AsyncThunkConfig>(
    "imts/update_imt",
    async function(data, {getState}) {
        const state = getState()
        if (state.imts.imt) {
            await api.imts.imtsUpdateUpdate(state.imts.imt.id.toString(), data as Imt)
        }
    }
)

export const updateCategoryValue = createAsyncThunk<void, T_CategoryUpdateValue, AsyncThunkConfig>(
    "imts/update_mm_value",
    async function({category_id, weight, height},thunkAPI) {
        const state = thunkAPI.getState()
        if (state.imts.imt) {
            await api.imts.imtsUpdateCategoryUpdate(state.imts.imt.id.toString(), category_id.toString(), {weight, height})
        }
    }
)

export const acceptImt = createAsyncThunk<void, string, AsyncThunkConfig>(
    "imts/accept_imt",
    async function(imt_id, thunkAPI) {
        await api.imts.imtsUpdateStatusAdminUpdate(imt_id, {status: E_ImtStatus.Completed})
        thunkAPI.dispatch(fetchImts())
    }
)

export const rejectImt = createAsyncThunk<void, string, AsyncThunkConfig>(
    "imts/accept_imt",
    async function(imt_id, thunkAPI) {
        await api.imts.imtsUpdateStatusAdminUpdate(imt_id, {status: E_ImtStatus.Rejected})
        thunkAPI.dispatch(fetchImts())
    }
)

const imtsSlice = createSlice({
    name: 'imts',
    initialState: initialState,
    reducers: {
        removeImt: (state) => {
            state.imt = null
        },
        updateFilters: (state, action) => {
            state.filters = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCartData.fulfilled, (state, action: PayloadAction<T_CartDataResponse>) => {
            state.draft_imt_id = action.payload.draft_imt
            state.categorys_count = action.payload.categorys_count
        });
        builder.addCase(fetchImt.fulfilled, (state, action: PayloadAction<Imt>) => {
            state.imt = action.payload
        });
        builder.addCase(fetchImts.fulfilled, (state, action: PayloadAction<Imt[]>) => {
            state.imts = action.payload
        });
        builder.addCase(removeCategoryFromDraftImt.rejected, (state) => {
            state.imt = null
        });
        builder.addCase(removeCategoryFromDraftImt.fulfilled, (state, action: PayloadAction<CategoryItem[] | null>) => {
            if (state.imt && action.payload) {
                state.imt.categorys = action.payload
            }
        });
        builder.addCase(sendDraftImt.fulfilled, (state:T_ImtsSlice) => {
            state.imt = null
        });
    }
})

export const { removeImt, updateFilters } = imtsSlice.actions;

export default imtsSlice.reducer
