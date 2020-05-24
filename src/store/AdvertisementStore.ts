import { observable, decorate, action, computed } from 'mobx';

import { Advertisement } from '../types/Advertisements';
import { getAllAds, toggleIsClose, getAllRoles } from '../server/ads';
import { RootStore } from './RootStore';
import { Role } from '../types/Role';

export class AdsStore {
    private rootStore: RootStore;
    private ads = observable.box<Advertisement[]>([]);
    private isLoadingAds = observable.box<boolean>(false);    
    private activeFilterRoles = observable.box<string[]>([]);
    private allRoles = observable.box<Role[]>([]);

    constructor (rootStore: RootStore) {
        this.rootStore = rootStore;
    }

    get advertisements() {
        return this.ads.get();
    }

    get isLoading() {
        return this.isLoadingAds.get();
    }

    get getActiveFilterRoles() {
        return this.activeFilterRoles.get();
    }

    get getAllRoles() {
        return this.allRoles.get();
    }

    loadAdvertisements = async () => {
        // Fetch data from server
        this.isLoadingAds.set(true);
        const ads: Advertisement[] = await getAllAds();
        this.ads.set(ads);
        this.isLoadingAds.set(false);
    }

    toggleIsClose = async (adId: number, isClose: boolean) => {
        try {
            await toggleIsClose(adId, isClose);
            await this.loadAdvertisements();
            await this.rootStore.userStore.loadRamadAds();
        } catch (error) {
            console.log('got error, toggleIsClose function ', error);
        }
    }

    loadAllRoles = async () => {
        const allRoles: Role[] = await getAllRoles();
        this.allRoles.set(allRoles);
    };

    setActiveFilerRoles = (activeFilterRoles: string[]) => {
        this.activeFilterRoles.set(activeFilterRoles);
    };
}

decorate(AdsStore, {
    advertisements: computed,
    isLoading: computed,
    loadAdvertisements: action,
    toggleIsClose: action,
    setActiveFilerRoles: action
});
