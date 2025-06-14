import { getNoteOrTypeList } from "@/api/chordsApi";
import { useQuery } from "@tanstack/react-query";

export default function useNotesOrTypes(type: string) {

    const { data, isLoading, error } = useQuery({
        queryFn: () => getNoteOrTypeList(type),
        queryKey: [type, type],
    })

    return {data, isLoading, error}
}
