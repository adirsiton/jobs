import CookieUtils from 'js-cookie';

import { observable, decorate, action, computed } from 'mobx';

import { fetchFavoriteAds, unsetFavoriteAd, setFavoriteAd, fetchRamadAds } from '../server/user';
import { User, RamadAd } from '../types/User';

export class UserStore {


    private loggedUser: User = JSON.parse(CookieUtils.get('user') || '{}');
    private favoriteAds = observable.box<number[]>([]);
    private ramadAds = observable.box<RamadAd[]>([]);

    get getUser() {
        return this.loggedUser;
    }

    get getFavoriteAds () {
        return this.favoriteAds.get()
    }

    get getRamadAds () {
        return this.ramadAds.get();
    }

    get getUserInitials () {
        const splitName: string[] = this.loggedUser.name.split(' ');
        return splitName.map(n=> n[0]).join(' ');
    }

    loadFavoriteAds = async () => {
        // Fetch data from server
        const newFavoriteAds: number[] = await fetchFavoriteAds();
        this.favoriteAds.set(newFavoriteAds);
    }

    loadRamadAds = async () => {
        // Fetch data from server
        const newRamadAds: RamadAd[] = await fetchRamadAds();
        this.ramadAds.set(newRamadAds);
    }

    toggleFavoriteAd = async (adId: number, isFavorite: boolean) => {
        try {
            isFavorite ? await setFavoriteAd(adId) : await unsetFavoriteAd(adId); // TODO: merge these 2 functions
            this.loadFavoriteAds();
        } catch (error) {
            console.log('an error occured while trying to toggle favorite ad', error);
        }
    }
}

decorate(UserStore, {
    getUser: computed,
    getUserInitials: computed,
    getRamadAds: computed,
    loadRamadAds: action,
    loadFavoriteAds: action,
    toggleFavoriteAd: action
});