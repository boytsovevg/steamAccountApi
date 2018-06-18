import { IGame } from './../interfaces/IGame';
import { Account } from './Account';
import steamService from '../steam/steam.service';
import { IAccountService, ISteamService, IAccount } from '../interfaces';

class AccountService implements IAccountService {

    private steamService: ISteamService;

    constructor() {
        this.steamService = steamService;
    }

    public async getAccountByNameAsync(name: string): Promise<IAccount> {

        const accountId = await this.steamService.getAccountIdByNameAsync(name);
        const accountInfo = await this.steamService.getAccountAsync(accountId);

        if (!accountInfo) {
            return null;
        }

        return Account.fromJson(accountInfo);
    }

    public async getAccountGamesAsync(id: string): Promise<IGame[]> {

        const games = await this.steamService.getAccountGamesAsync(id);

        if (!games) {
            return [];
        }

        return games;
    }
}

export default new AccountService();