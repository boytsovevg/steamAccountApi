import { ISteamService } from '../interfaces';
import * as http from 'axios';

const API_KEY = '7D5F2FA02FF09ACA687DE979BE355B30';

class SteamService implements ISteamService {

    private http: any;
    private baseUrl = 'http://api.steampowered.com';

    constructor() {
        this.http = http;
    }

    public async getAccountInfoByNameAsync(name: string): Promise<any> {
        const steamId = await this._getAccountIdByNameAsync(name);
        const response = await this.http.get(`${this.baseUrl}/ISteamUser/GetPlayerSummaries/v0002/?key=${API_KEY}&steamids=${steamId}`);
        return response.data.response.players[0];
    }

    private async _getAccountIdByNameAsync(name: string): Promise<string> {
        const response = await this.http.get(`${this.baseUrl}/ISteamUser/ResolveVanityURL/v0001/?key=${API_KEY}&vanityurl=${name}`);
        return response.data.response.steamid;
    }
}

export default new SteamService();
