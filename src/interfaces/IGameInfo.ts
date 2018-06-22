import { IAchievement } from './IAchievement';
import { IGameStat } from './IGameStat';

export interface IGameInfo {
    gameName: string;
    gameVersion: number;
    availableGameStats: {
        achivements: IAchievement[];
        stats: IGameStat[];
    };
}
