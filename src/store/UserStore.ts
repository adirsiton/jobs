import { observable, decorate, action, computed } from 'mobx';
import { User } from '../types/User';
import { fetchUserDetails, unsetFavoriteAd, setFavoriteAd } from '../server/user';
import { RootStore } from './RootStore';

export class UserStore {
    private rootStore: RootStore;
    constructor(rootStore: RootStore) {
        this.rootStore = rootStore
    }
    private user = observable.box<User>();
    private isLoadingUserDetails = observable.box<boolean>(false);

    get getUser() {
        return this.user.get();
    }

    get isLoading () {
        return this.isLoadingUserDetails.get();
    }

    loadUserDetails = async () => {
        // Fetch data from server
        this.isLoadingUserDetails.set(true);
        const user: User = await fetchUserDetails();
        this.user.set(user);
        this.isLoadingUserDetails.set(false);
    }

    unsetFavoriteAd = async (adId: number) => {
        await unsetFavoriteAd(adId);
        this.loadUserDetails();
    }

    setFavoriteAd = async (adId: number) => {
        await setFavoriteAd(adId);
        this.loadUserDetails();
    }
}

decorate(UserStore, {
    getUser: computed,
    isLoading: computed,
    loadUserDetails: action,
    unsetFavoriteAd: action,
    setFavoriteAd: action
});