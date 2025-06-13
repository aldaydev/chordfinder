import { getChordById } from "@/api/chordsApi";
import { useQuery } from "@tanstack/react-query";

export default function Home() {

    const {data, isLoading, error} = useQuery({
        queryFn: () => getChordById('c_major'),
        queryKey: ["homeChord"],
    })

    console.log(data?.images.pos1);

    return (
        <>
            <header>
                Home
                {
                    data && 
                    <img src={data.images.pos1}/>
                }
                
            </header>
        </>
    )
}
