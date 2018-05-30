export default interface ISteamService {
    getAccountInfoByNameAsync(name: string): Promise<any>;
}
