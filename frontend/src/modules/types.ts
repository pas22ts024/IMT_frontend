import {AppDispatch, RootState} from "store/store.ts";

export interface AsyncThunkConfig {
    state: RootState;
    dispatch: AppDispatch;
}

export type T_ImtsFilters = {
    date_formation_start: string
    date_formation_end: string
    status: number
    owner: string
}

export type T_CartDataResponse = {
    categorys_count: number,
    draft_imt: number
}

export type T_CategoryUpdateValue = {
    category_id: number,
    weight: number
    height: number
}

export enum E_ImtStatus {
    Draft=1,
    InWork,
    Completed,
    Rejected,
    Deleted
}
