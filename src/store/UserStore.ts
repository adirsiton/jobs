import CookieUtils from 'js-cookie';

import { observable, decorate, action, computed } from 'mobx';

import { getFavoriteAds, unsetFavoriteAd, setFavoriteAd } from '../server/user';
import { User } from '../types/User';

export class UserStore {


    private loggedUser: User = JSON.parse(CookieUtils.get('user') || '{}');
    private favoriteAds = observable.box<number[]>([]);

    get getUser() {
        return this.loggedUser;
    }

    get getFavoriteAds () {
        return this.favoriteAds.get()
    }

    get getUserInitials () {
        const splitName: string[] = this.loggedUser.name.split(' ');
        return splitName.map(n=> n[0]).join(' ');
    }

    loadfavoriteAds = async () => {
        // Fetch data from server
        const newFavoriteAds: number[] = await getFavoriteAds();
        this.favoriteAds.set(newFavoriteAds);
    }

    unsetFavoriteAd = async (adId: number) => {
        try {
            await unsetFavoriteAd(adId);
            this.loadfavoriteAds();
        } catch (error) {
            console.log('got error, unset function', error);
        }
    }

    setFavoriteAd = async (adId: number) => {
        try {
            await setFavoriteAd(adId);
            this.loadfavoriteAds();
        } catch (error) {
            console.log('got error, set function', error);
        }
    }
}

decorate(UserStore, {
    getUser: computed,
    getUserInitials: computed,
    loadfavoriteAds: action,
    unsetFavoriteAd: action,
    setFavoriteAd: action
});