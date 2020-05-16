import { observable, decorate, action, computed } from 'mobx';

import { Advertisement } from '../types/Advertisements';
import { getAllAds, getAllRoles } from '../server/ads';
import { Role } from '../types/Role';

export class AdsStore {
    private ads = observable.box<Advertisement[]>([]);
    private isLoadingAds = observable.box<boolean>(false);
    private activeFilterRoles = observable.box<string[]>([]);
    private allRoles = observable.box<Role[]>([]);

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
    };

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
    setActiveFilerRoles: action,
});
