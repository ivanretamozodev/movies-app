import { Movie } from './movie';

export interface Tv extends Movie {
    name: string;
}

export interface TvDto {
    page: number;
    results: Tv[];
    total_results: number;
    total_pages: number;
}

export interface TvShowVideoDto {
    id: number;
    results: TvShowVideo[];
}

export interface TvShowVideo {
    site: string;
    key: string;
}

export interface TvShowImages {
    backdrops: {
        file_path: string;
    }[];
}

export interface TvShowCredits {
    cast: {
        name: string;
        profile_path: string;
    }[];
}
