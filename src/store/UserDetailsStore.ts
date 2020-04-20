import { observable, decorate, action, computed } from 'mobx';
import { User } from '../types/User';
import { fetchUserDetails } from '../server/user';
import { RootStore } from './RootStore';

export class UserDetailsStore {
    private rootStore: RootStore;
    constructor(rootStore: RootStore) {
        this.rootStore = rootStore
    }
    private userDetails = observable.box<User>();
    private isLoadingUserDetails = observable.box<boolean>(false);

    get getUserDetails() {
        return this.userDetails.get();
    }

    get isLoading () {
        return this.isLoadingUserDetails.get();
    }

    loadUserDetails = async () => {
        // Fetch data from server
        this.isLoadingUserDetails.set(true);
        const userDetails: User = await fetchUserDetails();
        this.userDetails.set(userDetails);
        this.isLoadingUserDetails.set(false);
    }
}

decorate(UserDetailsStore, {
    getUserDetails: computed,
    isLoading: computed,
    loadUserDetails: action
});