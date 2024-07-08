import Card from "./Card";

type MediaType = 'movie' | 'tv';

type MediaResult = {
    backdrop_path?: string;
    id: number;
    title?: string;
    name?: string;
    original_title?: string;
    original_name?: string;
    overview: string;
    poster_path?: string;
    media_type: MediaType;
    adult: boolean;
    original_language: string;
    genre_ids: number[];
    popularity: number;
    release_date?: string;
    first_air_date?: string;
    video?: boolean;
    vote_average: number;
    vote_count: number;
    origin_country?: string[];
}

type ResultsProps = {
    results: MediaResult[]
}

export default function Results({results}: ResultsProps) {
    return (
        <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl mx-auto py-4">
            {
                results.map((result)=>(
                    <Card key={result.id} result={result}/>
                ))
            }
        </div>
    )
}
