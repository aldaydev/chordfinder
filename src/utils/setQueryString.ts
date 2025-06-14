import type { ChordParams } from "@/types/types";

export const setQueryString = (queries : ChordParams) => {
    const queriesArr = Object.entries(queries);

    const setString = queriesArr.reduce<string>((acc, curr) => {
        if(curr[1]){
            acc += `${curr[0]}=${curr[1]}&`
        }
        return acc;
    }, "?")

    console.log('QUERY FROM FUNCTION', setString);

    return setString.slice(0, -1);
}