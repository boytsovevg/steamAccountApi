import { steamService } from './steam.service';
import { ISteamService, IAccountService } from './interfaces';

import { IAccountData, IGame } from '../interfaces';

class AccountService implements IAccountService {

    private steamService: ISteamService;

    constructor() {
        this.steamService = steamService;
    }

    public async getAccountByNameAsync(name: string): Promise<IAccountData> {

        const accountId = await this.steamService.getAccountIdByNameAsync(name);
        const accountInfo = await this.steamService.getAccountAsync(accountId);

        if (!accountInfo) {
            return null;
        }

        return accountInfo;
    }

    public async getAccountGamesAsync(id: string): Promise<IGame[]> {

        const games = await this.steamService.getAccountGamesAsync(id);

        if (!games) {
            return [];
        }

        return games;
    }
}

export const accountService = new AccountService();