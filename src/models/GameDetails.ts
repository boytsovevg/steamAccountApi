import { IGameDetails, IGameDetailsData } from './../interfaces';

export class GameDetails implements IGameDetails {

    public appid: string;
    public name: string;
    public developer: string;
    public publisher: string;
    public price: string;
    public discount: string;
    public languages: string[];
    public genres: string[];
    public tags: string[];

    constructor(details: IGameDetails) {
        this.appid = details.appid;
        this.name = details.name;
        this.developer = details.developer;
        this.publisher = details.publisher;
        this.price = details.price;
        this.discount = details.discount;
        this.languages = details.languages;
        this.genres = details.genres;
        this.tags = details.tags;
    }

    static toViewModel(details: IGameDetailsData): IGameDetails {

        const gameDetails = {
            ...details,
            appid: String(details.appid),
            genres: details.genre.split(', ') as string[],
            languages: details.languages.split(', ') as string[],
            tags: Object.keys(details.tags) as string[]
        };

        return new GameDetails(gameDetails);
    }
}