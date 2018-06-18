import { ISteamService, IAccount } from '../interfaces';
import * as http from 'axios';

const API_KEY = '7D5F2FA02FF09ACA687DE979BE355B30';

class SteamService implements ISteamService {

    private http: any;
    private baseUrl = 'https://api.steampowered.com';

    constructor() {
        this.http = http;
    }

    public async getAccountIdByNameAsync(name: string): Promise<string> {
        const response = await this.http.get(`${this.baseUrl}/ISteamUser/ResolveVanityURL/v1/?key=${API_KEY}&vanityurl=${name}`);
        return response.data.response.steamid;
    }

    public async getAccountAsync(accountId: string): Promise<IAccount> {
        const response = await this.http.get(`${this.baseUrl}/ISteamUser/GetPlayerSummaries/v2/?key=${API_KEY}&steamids=${accountId}`);

        return response.data.response.players[0];
    }

    public async getAccountGamesAsync(accountId: string): Promise<any[]> {
        const response = await this.http
            .get(`${this.baseUrl}/IPlayerService/GetOwnedGames/v1/?key=${API_KEY}&steamid=${accountId}&include_appinfo=1`);

        return response.data.response.games;
    }


}

export default new SteamService();
