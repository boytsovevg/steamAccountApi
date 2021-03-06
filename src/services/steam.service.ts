import * as http from 'axios';
import { IAccountData, IGame, IGameInfo, IGameDetailsData } from '../interfaces';
import { ISteamService } from './interfaces';

const API_KEY = '7D5F2FA02FF09ACA687DE979BE355B30';

class SteamService implements ISteamService {

    private http: any;
    private baseUrl = 'https://api.steampowered.com';

    constructor() {
        this.http = http;
    }

    public async getAccountIdByNameAsync(name: string): Promise<string> {
        let response;

        try {
            response =
                await this.http.get(`${this.baseUrl}/ISteamUser/ResolveVanityURL/v1/?key=${API_KEY}&vanityurl=${name}`);
        } catch (error) {
            throw new Error('steamService.getAccountIdByNameAsync ' + error);
        }

        return response.data.response.steamid;
    }

    public async getAccountAsync(accountId: string): Promise<IAccountData> {
        let response;

        try {
            response =
                await this.http.get(`${this.baseUrl}/ISteamUser/GetPlayerSummaries/v2/?key=${API_KEY}&steamids=${accountId}`);
        } catch (error) {
            throw new Error('steamService.getAccountAsync ' + error);
        }

        return response.data.response.players[0];
    }

    public async getAccountGamesAsync(accountId: string): Promise<IGame[]> {
        let response;

        try {
            response =
                await this.http.get(`${this.baseUrl}/IPlayerService/GetOwnedGames/v1/?key=${API_KEY}&steamid=${accountId}&include_appinfo=1`);
        } catch (error) {
            throw new Error('steamService.getAccountGamesAsync ' + error);
        }

        return response.data.response.games;
    }

    public async getGameInfoAsync(id: string): Promise<IGameInfo> {
        let response;

        try {
            response = await this.http.get(`${this.baseUrl}/ISteamUserStats/GetSchemaForGame/v2/?key=${API_KEY}&appid=${id}`);
        } catch (error) {
            throw new Error('steamService.getGameInfoAsync ' + error);
        }

        return response.data.game;
    }

    public async getGameDetailsAsync(id: string): Promise<IGameDetailsData> {
        const url = 'http://steamspy.com/api.php?request=appdetails';

        let response;

        try {
            response = await this.http.get(`${url}&appid=${id}`);
        } catch (error) {
            throw new Error('steamService.getGameDetailsAsync' + error);
        }

        return response.data;
    }
}

export const steamService = new SteamService();
