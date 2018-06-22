import { IAccountData, IGame, IGameDetailsData, IGameInfo } from '../../interfaces';

export interface ISteamService {
    getAccountIdByNameAsync(name: string): Promise<string>;
    getAccountAsync(name: string): Promise<IAccountData>;
    getAccountGamesAsync(accountId: string): Promise<IGame[]>;
    getGameInfoAsync(id: string): Promise<IGameInfo>;
    getGameDetailsAsync(id: string): Promise<IGameDetailsData>;
}
