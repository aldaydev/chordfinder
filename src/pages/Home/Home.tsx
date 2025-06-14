import './Home.css';
import { getChordById, getChordList } from "@/api/chordsApi";
import Spinner from '@/components/Spinner/Spinner';
import { ChordParams } from '@/types/types';
import { setQueryString } from '@/utils/setQueryString';
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from 'react';

export default function Home() {

    const [formValues, setFormValues] = useState<ChordParams>({
        note: "a",
        type: null,
        page: null,
        limit: null
    });

    const queryString = setQueryString(formValues);

    console.log('Query string from component', queryString);

    const {data, isLoading, error} = useQuery({
        queryFn: () => getChordList(queryString),
        queryKey: ["chordList", queryString],
    })

    return (
        <>
            <header className='home__header'>
                <h1 className='homeHeader__title'>CHORDS FINDER</h1>
                <section className='homeHeader__content'>
                    <h4 className='homeHeader__description'>
                        An easy way to search chords filtering them by note or type. You can get a unique chord if note and type filters are selected. If not, you will get chord lists. Here you can watch an example of a chord image and name. Enjoy!
                    </h4>
                    {/* {
                        data &&
                        <article className='homeHeader__chordContainer'>
                            <p className='homeHeader__chordName'>{data.name.eng}</p>
                            <img 
                                src={data.images.pos1}
                                alt={`Image of ${data.name.eng}`}
                                className='homeHeader__chordImage'
                            />
                        </article>
                        
                    }
                    {
                        isLoading && 
                        <Spinner customClass={'homeChord'}/>
                    } */}
                </section>
                
                
            </header>
        </>
    )
}
