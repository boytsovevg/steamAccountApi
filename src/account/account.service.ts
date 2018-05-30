import { IAccountService } from './interfaces';

class AccountService implements IAccountService {

    public getAccountByName(name: string): any {
        throw new Error('Method not implemented.');
    }

    private _getAccountGames(accountName: string): any[] {
        return [];
    }
}

export default new AccountService();