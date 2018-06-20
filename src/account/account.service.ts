import steamService from '../steam/steam.service';

import { Account } from './Account';
import { IAccount, IGame } from '../interfaces';

import { IAccountService } from './IAccountService';
import { ISteamService } from './../steam/ISteamService';


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