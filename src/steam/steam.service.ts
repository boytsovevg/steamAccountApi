import { ISteamService, IAccount } from '../interfaces';
import * as http from 'axios';

const API_KEY = '7D5F2FA02FF09ACA687DE979BE355B30';

class SteamService implements ISteamService {

    private http: any;
    private baseUrl = 'http://api.steampowered.com';

    constructor() {
        this.http = http;
    }

    public async getAccountByNameAsync(name: string): Promise<IAccount> {
        const steamId = await this._getAccountIdByNameAsync(name);
        const games = await this.getAccountGames(steamId);
        const response = await this.http.get(`${this.baseUrl}/ISteamUser/GetPlayerSummaries/v0002/?key=${API_KEY}&steamids=${steamId}`);
        return response.data.response.players[0];
    }

    public async getAccountGames(accountId: number): Promise<any[]> {
        const response = await this.http.get(`${this.baseUrl}/IPlayerService/GetOwnedGames/v0001/?key=${API_KEY}&steamid=${accountId}`);
        return response.data.response.games;
    }

    private async _getAccountIdByNameAsync(name: string): Promise<number> {
        const response = await this.http.get(`${this.baseUrl}/ISteamUser/ResolveVanityURL/v0001/?key=${API_KEY}&vanityurl=${name}`);
        return parseInt(response.data.response.steamid);
    }
}

export default new SteamService();
