import { IAvatar } from '.';

export default interface IAccount {
    id: number;
    realName: string;
    nickname: string;
    lastLogOff: Date | string;
    profileUrl: string;
    avatar: IAvatar;
    clanId: number;
}