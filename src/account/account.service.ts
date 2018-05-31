import { Account } from './Account';
import steamService from '../steam/steam.service';
import { IAccountService, ISteamService, IAccount } from '../interfaces';

class AccountService implements IAccountService {

    private steamService: ISteamService;

    constructor() {
        this.steamService = steamService;
    }

    public async getAccountByNameAsync(name: string): Promise<IAccount> {
        const accountInfo = await this.steamService.getAccountByNameAsync(name);

        if (!accountInfo) {
            return null;
        }
        return Account.fromJson(accountInfo);

    }

    private _getAccountGames(accountName: string): any[] {
        return [];
    }
}

export default new AccountService();