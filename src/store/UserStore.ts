import CookieUtils from 'js-cookie';

import Swal from 'sweetalert2';
import { observable, decorate, action, computed } from 'mobx';

import { fetchFavoriteAds, unsetFavoriteAd, setFavoriteAd, fetchRamadAds, saveUserResume } from '../server/user';
import { User, RamadAd, UserResume } from '../types/User';
import { RootStore } from './RootStore';

export class UserStore {
    private rootStore: RootStore;
    private loggedUser: User = JSON.parse(CookieUtils.get('user') || '{}');
    private favoriteAds = observable.box<number[]>([]);
    private ramadAds = observable.box<RamadAd[]>([]);

    constructor (rootStore: RootStore) {
        this.rootStore= rootStore;
    }
    
    get getUser(): User {
        return {
            isRamad: false,
            name: 'michael',
            upn: 'michael',
            userInitials: 'm'
        }
        // return this.loggedUser;
    }

    get getFavoriteAds() {
        return this.favoriteAds.get();
    }

    get getRamadAds() {
        return this.ramadAds.get();
    }

    get getUserInitials() {
        const splitName: string[] = this.loggedUser.name.split(' ');
        return splitName.map((n) => n[0]).join(' ');
    }

    loadFavoriteAds = async () => {
        // Fetch data from server
        const newFavoriteAds: number[] = await fetchFavoriteAds();
        this.favoriteAds.set(newFavoriteAds);
    };

    loadRamadAds = async () => {
        // Fetch data from server
        const newRamadAds: RamadAd[] = await fetchRamadAds();
        this.ramadAds.set(newRamadAds);
    };

    toggleFavoriteAd = async (adId: number, isFavorite: boolean) => {
        try {
            isFavorite ? await setFavoriteAd(adId) : await unsetFavoriteAd(adId); // TODO: merge these 2 functions
            this.loadFavoriteAds();
        } catch (error) {
            console.log('an error occured while trying to toggle favorite ad', error);
        }
    };

    saveUserResume = async (resume: UserResume) => {
        const response: Response = await saveUserResume(resume);

        response.status === 200
            ? Swal.fire('מעולה!', 'הרזומה שלך נשמר בהצלחה', 'success')
            : Swal.fire('אופס...', 'לא הצלחנו לשמור את הרזומה שלך', 'error');
    };
}

decorate(UserStore, {
    getUser: computed,
    getUserInitials: computed,
    getRamadAds: computed,
    loadRamadAds: action,
    loadFavoriteAds: action,
    toggleFavoriteAd: action
});
