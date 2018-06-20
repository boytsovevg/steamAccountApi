import { IAvatar, IAccount } from '../interfaces';
import { IAccountData } from '../interfaces/IAccount.data';

export class Account implements IAccount {
    id: number;
    realName: string;
    nickname: string;
    lastLogOff: Date | string;
    profileUrl: string;
    avatar: IAvatar;
    clanId: number;

    constructor(account: any) {
        this.id = account.id;
        this.realName = account.realName;
        this.nickname = account.nickname;
        this.lastLogOff = account.lastLogOff;
        this.profileUrl = account.profileUrl;
        this.avatar = account.avatar;
        this.clanId = account.clanId;
    }

    static toViewModel(accountData: IAccountData) {

        const account = {
            id: accountData.steamid,
            realName: accountData.realname,
            nickname: accountData.personaname,
            lastLogOff: accountData.lastlogoff,
            profileUrl: accountData.profileurl,
            avatar: Account.makeAvatar(accountData.avatar, accountData.avatarmedium, accountData.avatarfull),
            clanId: accountData.primaryclanid,
        };

        return new Account(account);
    }

    private static makeAvatar(avatar: string, avatarmedium: string, avatarfull: string): IAvatar {
        return {
            full: avatarfull,
            medium: avatarmedium,
            small: avatar
        };
    }
}