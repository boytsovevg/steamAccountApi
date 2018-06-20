import { IAccountData, IGame } from '../../interfaces';

export interface IAccountService {
    getAccountByNameAsync(name: string): Promise<IAccountData>;
    getAccountGamesAsync(id: string): Promise<IGame[]>;
}
