import { isAxiosError } from "axios";
import chordsApi from "./axiosConfig";
import type { Chord } from "@/types/types";

export async function getChordById ( chordId: string ) {
    try {
        const {data} = await chordsApi.get<Chord>(`/chords/${chordId}`);
        return data;
    } catch (error) {
        console.log(error);
    }
}