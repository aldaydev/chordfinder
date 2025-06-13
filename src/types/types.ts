export type LangText = {
    eng: string;
    spa: string;
}

export type Chord = {
    name: LangText;
    images: {
        pos1: string;
    };
    _id: string;
    notes: LangText[];
    note: {
        name: LangText;
        type: string;
    };
    type: {
        name: LangText;
        description: LangText;
        intervals: string[];
    };
};
