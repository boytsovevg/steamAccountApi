import * as express from 'express';
import { Request, Response, Router } from 'express';
import { accountService, steamService, IAccountService, ISteamService } from '../services';

class AccountController {
    private accountService: IAccountService;
    private steamService: ISteamService;
    public router: Router = express.Router();

    constructor() {
        this.accountService = accountService;
        this.steamService = steamService;
        this._registerRoutes();
    }

    private _registerRoutes() {

        this.router.get('/getAccountByName', async (req: Request, res: Response) => {
            const account = await this.accountService.getAccountByNameAsync(req.query.name);
            return res.status(200).send(account);
        });

        this.router.get('/getAccountGames', async (req: Request, res: Response) => {
            const games = await this.accountService.getAccountGamesAsync(req.query.id);

            return res.status(200).send(games);
        });

        this.router.get('/getGameDetails', async (req: Request, res: Response) => {
            const gameDetails = await this.steamService.getGameDetailsAsync(req.query.id);

            return res.status(200).send(gameDetails);
        });
    }
}

export default new AccountController().router;
