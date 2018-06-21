import * as express from 'express';
import { Request, Response, Router } from 'express';

import { steamService, ISteamService } from '../services';
import { GameDetails } from '../models';

class GamesController {

    public router: Router = express.Router();

    private steamService: ISteamService;

    constructor() {
        this.steamService = steamService;
        this._registerRoutes();
    }

    private static handleError(error: Error, res: Response): void {
        res.statusCode = 500;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(error));
    }

    private _registerRoutes() {

        this.router.get('/getGameDetails', async (req: Request, res: Response) => {
            let gameDetailsData;

            try {
                gameDetailsData = await this.steamService.getGameDetailsAsync(req.query.id);
            } catch (error) {
                return GamesController.handleError(error, res);
            }

            return res.status(200).json(GameDetails.toViewModel(gameDetailsData));
        });
    }

}

export const gamesController = new GamesController().router;
