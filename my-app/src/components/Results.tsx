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
        <div>
            {
                results.map((item)=>(
                    <div key={item.id}>
                        <h1>{item.original_title}</h1>
                    </div>
                ))
            }
        </div>
    )
}
