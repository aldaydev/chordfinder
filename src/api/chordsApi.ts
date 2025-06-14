import { isAxiosError } from "axios";
import chordsApi from "./axiosConfig";
import type { Chord, ChordList, ChordParams, ChordTypeList, NoteList } from "@/types/types";

export async function getChordById ( chordId: string ) {
    try {
        const {data} = await chordsApi.get<Chord>(`/chords/${chordId}`);
        return data;
    } catch (error) {
        console.log(error);
    }
}

export async function getChordList ( queryString : string ) {
    try {
        const {data} = await chordsApi.get<ChordList>(`/chords${queryString}`);
        console.log(data);
        return data;
    } catch (error) {
        if(isAxiosError(error)){
            console.log(error.response?.data.message);
        }
        
    }
    
}

export async function getNoteOrTypeList (type: string) {
    try {
        const {data} = await chordsApi.get<NoteList | ChordTypeList >(`/${type}`);
        console.log(data);
        return data;
    } catch (error) {
        if(isAxiosError(error)){
            console.log(error.response?.data.message);
        }
    }
}