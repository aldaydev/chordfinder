import './SearchForm.css';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from '@/redux/store';
import { updateQueryParam, setSelectedQueryParams } from '@/redux/features/chords/chordParamsSlice';
import { useQuery } from '@tanstack/react-query';
import useNotesOrTypes from '@/hooks/useNotesOrTypes';

export default function SearchForm() {

    //Rescatamos la lista de notas y acordes del custom Hook
    const noteList = useNotesOrTypes('notes');
    const chordTypeList = useNotesOrTypes('chord-types');

    // Inicializamos useDispatch para poder cambiar los queryParams
    const dispatch = useDispatch<AppDispatch>();

    // Función que maneja cambios en "note" y actualiza query params
    const handleSelectedNote = (e: React.ChangeEvent<HTMLSelectElement>) => {
        console.log(e.target.value)
        dispatch(updateQueryParam({ key: 'note', value: e.target.value }))
    }

    // Función que maneja cambios en "chord type" y actualiza query params
    const handleSelectedChordType = (e: React.ChangeEvent<HTMLSelectElement>) => {
        console.log(e.target.value)
        dispatch(updateQueryParam({ key: 'type', value: e.target.value }))
    }

    return (
        <form className='searchForm__form'>
            <select
                onChange={(e) => handleSelectedNote(e)}
                className='searchForm__select'
            >
                <option value={""} className='searchForm__option'>
                    Note
                </option>
                {
                    noteList.data && noteList.data.map(note => (
                        <option
                            key={note._id}
                            value={note._id}
                            className='searchForm__option'
                        >
                            {note.name.eng}
                        </option>
                    ))
                }
            </select>
            
            <select
                onChange={(e) => handleSelectedChordType(e)}
                className='searchForm__select'
            >
                <option value={""} className='searchForm__option'>
                    Chord Type
                </option>
                {
                    chordTypeList.data && chordTypeList.data.map(type => (
                        <option
                            key={type._id}
                            value={type._id}
                            className='searchForm__option'
                        >
                            {type.name.eng}
                        </option>
                    ))
                }
            </select>
        </form>
    )
}
