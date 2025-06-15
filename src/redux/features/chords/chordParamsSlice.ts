import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { ChordParams } from "@/types/types";

// Creamos un tipo para el estado de este slice
type ChordParamsState = {
    selectedQueryParams: ChordParams;
};

type ChordParamsKey = keyof ChordParams;

type UpdateChordParamPayload<K extends ChordParamsKey> = {
    key: K;
    value: ChordParams[K];
};

// Este es el estado inicial que tendrá Redux cuando se monte la app
const initialState: ChordParamsState = {
    selectedQueryParams: {
        note: "",
        type: "",
        page: 0,
        limit: 0,
    },
};

// Creamos el slice de Redux: nombre + estado inicial + reducers
const chordSlice = createSlice({
    name: "chordParams", // nombre del slice (útil para debug o combinar reducers)
    initialState, // el estado por defecto
    reducers: {
        // Acción para reemplazar todos los query params
        setSelectedQueryParams(state, action: PayloadAction<ChordParams>) {
            state.selectedQueryParams = action.payload;
        },

        // Acción para actualizar solo una clave del objeto, por ejemplo 'note'
        updateQueryParam<K extends ChordParamsKey>(
            state: ChordParamsState,
            action: PayloadAction<UpdateChordParamPayload<K>>) {
            state.selectedQueryParams[action.payload.key] =
                action.payload.value;
        },
        resetQueryParams: () => initialState
    },
});

// Exportamos las acciones para usarlas desde los componentes
export const { setSelectedQueryParams, updateQueryParam, resetQueryParams } = chordSlice.actions;

// Exportamos el reducer para conectarlo al store más adelante
export default chordSlice.reducer;
