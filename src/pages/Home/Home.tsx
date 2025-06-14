import './Home.css';
import { getChordById, getChordList } from "@/api/chordsApi";
import Spinner from '@/components/Spinner/Spinner';
import type { ChordParams } from '@/types/types';
import { setQueryString } from '@/utils/setQueryString';
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from '@/redux/store';
import { updateQueryParam, setSelectedQueryParams } from '@/redux/features/chords/chordParamsSlice';
import SearchForm from './components/SearchForm/SearchForm';

export default function Home() {

    const dispatch = useDispatch<AppDispatch>();
    const queryParams = useSelector((state: RootState) => state.chordParams.selectedQueryParams);

    // console.log('QUERY PARAMS FROM REDUX', queryParams);

    // useEffect(() => {
    //     dispatch(setSelectedQueryParams({
    //         note: 'a',
    //         type: 'major',
    //         page: 2,
    //         limit: 10
    //     }))
    // }, [])

    // const [selectedQueryParams, setSelectedQueryParams] = useState<ChordParams>({
    //     note: "a",
    //     type: null,
    //     page: null,
    //     limit: null
    // });

    // const queryString = setQueryString(selectedQueryParams);

    // console.log('Query string from component', queryString);

    // const {data, isLoading, error} = useQuery({
    //     queryFn: () => getChordList(queryString),
    //     queryKey: ["chordList", queryString],
    // })

    return (
        <>
            <h1 className='homeHeader__title'>FIND CHORDS</h1>
            <SearchForm/>
        </>
    )
}
