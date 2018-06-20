export interface IGameDetailsData {
    appid: number;
    name: string;
    developer: string;
    publisher: string;
    price: string;
    discount: string;
    languages: string;
    genre: string;
    tags: Record<string, number>;
}
