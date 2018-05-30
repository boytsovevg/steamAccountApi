import * as express from 'express';
import accountService from './account.service';
import { IAccountService } from './interfaces';

class AccountController {
    private accountService: IAccountService;
    public router = express.Router();

    constructor() {
        this.accountService = accountService;
        this._registerRoutes();
    }

    private _registerRoutes() {

        this.router.get('/getAccountByName', async (req, res) => {
            const account = await this.accountService.getAccountByName(req.body.name);
            return res.status(200).send(account);
        });
    }
}

export default new AccountController().router;
