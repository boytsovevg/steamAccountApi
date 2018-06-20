import { IAvatar, IAccount } from '../interfaces';

export class Account implements IAccount {
    id: number;
    realName: string;
    nickname: string;
    lastLogOff: Date | string;
    profileUrl: string;
    avatar: IAvatar;
    clanId: number;

    constructor(accountJson: any) {
        Object.assign(this, accountJson);
    }

    static fromJson(json: any) {

        const account = {
            id: json.steamid,
            realName: json.realname,
            nickname: json.personaname,
            lastLogOff: json.lastlogoff,
            profileUrl: json.profileurl,
            avatar: Account.makeAvatar(json.avatar, json.avatarmedium, json.avatarfull),
            clanId: json.primaryclanid,
            games: json.games || []
        };

        return new Account(account);
    }

    static makeAvatar(avatar: string, avatarmedium: string, avatarfull: string): IAvatar {
        return {
            full: avatarfull,
            medium: avatarmedium,
            small: avatar
        };
    }
}