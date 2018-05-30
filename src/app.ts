import * as express from 'express';
import * as bodyParser from 'body-parser';
import accountController from './account/account.controller';

class App {
    public express;

    constructor() {
        this.express = express();
        this.express.use(bodyParser.urlencoded({ extended: true }));
        this.express.use(bodyParser.json());
        this._mountRoutes();
    }

    private _mountRoutes(): any {
        this.express.use('/api/account', accountController);
    }

}

export default new App().express;
