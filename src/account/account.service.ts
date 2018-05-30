import { Account } from './Account';
import steamService from '../steam/steam.service';
import { IAccountService, ISteamService } from '../interfaces';

class AccountService implements IAccountService {

    private steamService: ISteamService;

    constructor() {
        this.steamService = steamService;
    }

    public async getAccountByName(name: string): Promise<any> {
        const accountInfo = await this.steamService.getAccountInfoByNameAsync(name);
        return Account.fromJson(accountInfo);
    }

    private _getAccountGames(accountName: string): any[] {
        return [];
    }
}

export default new AccountService();