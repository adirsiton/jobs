import { observable, decorate, action, computed } from 'mobx';
import { Advertisement } from '../types/Advertisements';
import { getAllAds } from '../server/ads';
import { RootStore } from './RootStore';

export class JobsStore {
    
    private rootStore: RootStore;
    constructor(rootStore: RootStore) {
        this.rootStore = rootStore
    }
    
    private ads = observable.box<Advertisement[]>([]);
    private isLoadingAds = observable.box<boolean>(false);

    get advertisements() {
        return this.ads.get();
    }

    get isLoading() {
        return this.isLoadingAds.get();
    }

    loadAdvertisements = async () => {
        // Fetch data from server
        this.isLoadingAds.set(true);
        const ads: Advertisement[] = await getAllAds();
        this.ads.set(ads);
        this.isLoadingAds.set(false);
    }
}

decorate(JobsStore, {
    advertisements: computed,
    isLoading: computed,
    loadAdvertisements: action
});