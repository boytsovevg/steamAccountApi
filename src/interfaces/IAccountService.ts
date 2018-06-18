import { IAccount, IGame } from '../interfaces';

export interface IAccountService {
    getAccountByNameAsync(name: string): Promise<IAccount>;
    getAccountGamesAsync(id: string): Promise<IGame[]>;
}
