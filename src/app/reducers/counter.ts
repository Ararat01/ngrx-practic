import { createAction, createReducer, on } from "@ngrx/store";


export const increase =createAction('[COUNTER] increase')
export const decrease =createAction('[COUNTER] decrease')
export const clear =createAction('[COUNTER] clear')


export interface counterState {
    count: number;
}

export const initState: counterState = {
    count: 0
}

export const counterReducer = createReducer(
    initState,
    on(increase, state => ({
        ...state,
        count: state.count + 1
    })),
    on(decrease, state => ({
        ...state,
        count: state.count - 1
    })),
    on(clear, state => ({
        ...state,
        count: 0
    }))
)