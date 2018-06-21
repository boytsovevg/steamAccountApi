export interface IGameDetails {
    id: number;
    name: string;
    developer: string;
    publisher: string;
    price: string;
    discount: string;
    languages: string[];
    genres: string[];
    tags: string[];
    hasMultiplayer: boolean;
}
