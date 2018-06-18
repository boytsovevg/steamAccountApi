import { IAccount, IGame } from '../interfaces';

export interface ISteamService {
    getAccountIdByNameAsync(name: string): Promise<string>;
    getAccountAsync(name: string): Promise<IAccount>;
    getAccountGamesAsync(accountId: string): Promise<IGame[]>;
}
