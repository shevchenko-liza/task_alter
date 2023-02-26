import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import _keyBy from 'lodash/keyBy'

type ID = number | `${number}`

export interface Posts {
    id: ID
    body: string

}

interface CatalogState {
    list: Posts[],
    table: {
        [id in ID]: Posts
    }
}

export const catalogSlice = createSlice({
    name: 'catalog',
    initialState: {
        list: [],
        table: {}
    }as CatalogState,
    
    reducers: {
        setList(state, action: PayloadAction<Posts[]>) {
            state.list = action.payload
        },
        unset(state, action: PayloadAction<ID>) {
            delete state.list[action.payload]
        },
    }
})

interface State {
    [catalogSlice.name]: CatalogState
}

export const CATALOG = (state: State) => state[catalogSlice.name].list
export const CATALOG_TABLE = (state: State) => state[catalogSlice.name].table
