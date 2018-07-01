import { IGame, IGameData } from '../interfaces';

export class Game implements IGame {
    id: number;
    name: string;
    icon: string;
    logo: string;

    constructor(game: IGame) {
        this.id = game.id;
        this.name = game.name;
        this.icon = game.icon;
        this.logo = game.logo;
    }

    public static toViewModel(gameData: IGameData): IGame {
        const steamUrl = `http://media.steampowered.com/steamcommunity/public/images/apps/${gameData.appid}`;

        const placeholder200x100 = 'http://via.placeholder.com/200x100';

        const game = {
            ...gameData,
            id: gameData.appid,
            icon: gameData.img_icon_url && `${steamUrl}/${gameData.img_icon_url}.jpg` || placeholder200x100,
            logo: gameData.img_logo_url && `${steamUrl}/${gameData.img_logo_url}.jpg` || placeholder200x100
        };

        return new Game(game);
    }
}