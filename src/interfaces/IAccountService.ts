import { IAccount } from '.';

export interface IAccountService {

    getAccountByNameAsync(name: string): Promise<IAccount>;
 }
