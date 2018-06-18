import { IAvatar, IGame } from '.';

export interface IAccount {
    id: number;
    realName: string;
    nickname: string;
    lastLogOff: Date | string;
    profileUrl: string;
    avatar: IAvatar;
    clanId: number;
    games?: Array<IGame>;
}