import { observable, decorate, action, computed } from 'mobx';
import { User } from '../types/User';
import { fetchUserDetails } from '../server/user';
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
}

decorate(UserStore, {
    getUser: computed,
    isLoading: computed,
    loadUserDetails: action
});