import CookieUtils from 'js-cookie';

import { observable, decorate, action, computed } from 'mobx';

import { unsetFavoriteAd, setFavoriteAd } from '../server/user';
import { User } from '../types/User';

export class UserStore {
    private loggedUser = observable.box<User>(JSON.parse(CookieUtils.get('user') || '{}'));

    get getUser() {
        return this.loggedUser.get();
    }

    get getUserInitials () {
        const splitName: string[] = this.loggedUser.get().name.split(' ');
        return splitName.map(n=> n[0]).join(' ');
    }

    unsetFavoriteAd = async (adId: number) => {
        try {
            await unsetFavoriteAd(adId);
            const newUser: User = {
                ...this.getUser,
                favoriteAds: this.getUser.favoriteAds.filter(favAd => favAd!==adId)
            };
            this.loggedUser.set(newUser);
        } catch (error) {
            console.log('got error, unset function', error);
        }
    }

    setFavoriteAd = async (adId: number) => {
        try {
            await setFavoriteAd(adId);
            const newUser: User = {
                ...this.getUser,
                favoriteAds: this.getUser.favoriteAds.concat(adId)
            };
            this.loggedUser.set(newUser);
        } catch (error) {
            console.log('got error, set function', error);
        }
    }
}

decorate(UserStore, {
    getUser: computed,
    getUserInitials: computed,
    unsetFavoriteAd: action,
    setFavoriteAd: action
});