// ---------- NOTE AND CHORD TYPE ----------

export type Note = {
    name: LangText,
    _id: string,
    type: string
}

export type ChordType = {
    name: LangText,
    description: LangText,
    _id: string,
    intervals: string[];
}

// ---------- NOTE AND CHORD LIST TYPES ----------

export type NoteList = Note[];
export type ChordTypeList = ChordType[];

// ---------- LANG TEXT ----------

export type LangText = {
    eng: string;
    spa: string;
}

// ---------- CHORD AND CHORD LIST ----------

export type Chord = {
    name: LangText;
    images: {
        pos1: string;
    };
    _id: string;
    notes: LangText[];
    note: Omit<Note, "_id">;
    type: Omit<ChordType, "_id">;
};

export type ChordList = {
    count: number,
    currentPage: number,
    totalPagés: number,
    limit: number,
    data: Chord[]
}

export type ChordParams = {
    note: string,
    type: string,
    page: number,
    limit: string | number
}


