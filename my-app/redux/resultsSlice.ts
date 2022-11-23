import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { AppState } from './store';

type ResultsState = {
    results: []
}

const initialState: ResultsState = {
    results: []
}

export const resultsSlice = createSlice({
    name: 'results',
    initialState,
    reducers: {
        updateState: (state, action: PayloadAction<[]>) => {
            state.results = action.payload
        }
    }
})

export const { updateState } = resultsSlice.actions
export const selectResults = (state: AppState) => state.results.results
export default resultsSlice.reducer