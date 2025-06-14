import { configureStore } from "@reduxjs/toolkit";
import ChordReducer from './features/chords/chordParamsSlice';

export const store = configureStore({
    reducer: {
        chordParams: ChordReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

