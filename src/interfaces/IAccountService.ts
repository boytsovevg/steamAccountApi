import { IAccount } from '.';

export default interface IAccountService {

    getAccountByNameAsync(name: string): Promise<IAccount>;
 }
