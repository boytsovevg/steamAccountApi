import { IAccount, IGame, IGameInfo } from '../interfaces';

export interface ISteamService {
    getAccountIdByNameAsync(name: string): Promise<string>;
    getAccountAsync(name: string): Promise<IAccount>;
    getAccountGamesAsync(accountId: string): Promise<IGame[]>;
    getGameInfo(id: string): Promise<IGameInfo>;
}
