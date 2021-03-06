import * as express from 'express';
import { Request, Response, Router } from 'express';

import { accountService, steamService,
    IAccountService, ISteamService } from '../services';

import { Account, Game, GameDetails } from './../models';

class AccountController {
    public router: Router = express.Router();

    private accountService: IAccountService;
    private steamService: ISteamService;

    constructor() {
        this.accountService = accountService;
        this.steamService = steamService;
        this._registerRoutes();
    }

    private static handleError(error: Error, res: Response): void {
        res.statusCode = 500;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(error));
    }

    private _registerRoutes() {

        this.router.get('/getAccountByName', async (req: Request, res: Response) => {
            let accountData;

            try {
                accountData = await this.accountService.getAccountByNameAsync(req.query.name);
            } catch (error) {
                return AccountController.handleError(error, res);
            }

            if (!accountData) {
                return res.status(200).json(null);
            }

            return res.status(200).json(Account.toViewModel(accountData));
        });

        this.router.get('/getAccountGames', async (req: Request, res: Response) => {
            let games;

            try {
                games = await this.accountService.getAccountGamesAsync(req.query.id);
            } catch (error) {
                return AccountController.handleError(error, res);
            }

            return res.status(200).json(games.map(game => Game.toViewModel(game)));
        });

        this.router.get('/getGameInfo', async (req: Request, res: Response) => {
            let gameInfo;

            try {
                gameInfo = await this.steamService.getGameInfoAsync(req.query.id);
            } catch (error) {
                return AccountController.handleError(error, res);
            }

            return res.status(200).json(gameInfo);
        });
    }

}

export const accountController = new AccountController().router;
