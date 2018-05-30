import { IAccount } from '.';
export default interface ISteamService {
    getAccountByNameAsync(name: string): Promise<IAccount>;
}
