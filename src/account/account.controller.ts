import * as express from 'express';
import { Request, Response, Router } from 'express';
import accountService from './account.service';
import { IAccountService } from '../interfaces';

class AccountController {
    private accountService: IAccountService;
    public router: Router = express.Router();

    constructor() {
        this.accountService = accountService;
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
    }
}

export default new AccountController().router;
