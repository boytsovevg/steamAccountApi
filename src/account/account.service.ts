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
        const games = await this.steamService.getAccountGamesAsync(accountId);

        if (!accountInfo) {
            return null;
        }
        accountInfo.games = games;

        return Account.fromJson(accountInfo);
    }
}

export default new AccountService();