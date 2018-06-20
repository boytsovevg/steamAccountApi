import * as express from 'express';
import { Request, Response, Router } from 'express';

import { accountService, steamService,
    IAccountService, ISteamService } from '../services';

import { Account, GameDetails } from './../models';

class AccountController {
    public router: Router = express.Router();

    private accountService: IAccountService;
    private steamService: ISteamService;

    constructor() {
        this.accountService = accountService;
        this.steamService = steamService;
        this._registerRoutes();
    }

    private _registerRoutes() {

        this.router.get('/getAccountByName', async (req: Request, res: Response) => {
            const accountData = await this.accountService.getAccountByNameAsync(req.query.name);
            return res.status(200).send(Account.toViewModel(accountData));
        });

        this.router.get('/getAccountGames', async (req: Request, res: Response) => {
            const games = await this.accountService.getAccountGamesAsync(req.query.id);

            return res.status(200).send(games);
        });

        this.router.get('/getGameInfo', async (req: Request, res: Response) => {
            const gameInfo = await this.steamService.getGameInfoAsync(req.query.id);

            return res.status(200).send(gameInfo);
        });

        this.router.get('/getGameDetails', async (req: Request, res: Response) => {
            const gameDetailsData = await this.steamService.getGameDetailsAsync(req.query.id);

            return res.status(200).send(GameDetails.toViewModel(gameDetailsData));
        });
    }
}

export default new AccountController().router;
