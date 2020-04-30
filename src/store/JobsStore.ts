import { observable, decorate, action, computed } from 'mobx';

import { Advertisement } from '../types/Advertisements';
import { getAllAds, closeAd, openAd } from '../server/ads';
import { RootStore } from './RootStore';

export class JobsStore {
    private rootStore: RootStore;
    private ads = observable.box<Advertisement[]>([]);
    private isLoadingAds = observable.box<boolean>(false);
    
    constructor (rootStore: RootStore) {
        this.rootStore= rootStore;
    }
    
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

    closeAd = async (adId: number) => {
        try {
            await closeAd(adId);
            const newAds = this.ads.get().filter(ad => ad.id !== adId); // rather than load this.loadAdvertisements
            this.ads.set(newAds);
            await this.rootStore.userStore.loadRamadAds();
        } catch (error) {
            console.log('got error, closeAd function ', error);
        }
    }

    openAd = async (adId: number) => {
        try {
            await openAd(adId);
            await this.loadAdvertisements();
            await this.rootStore.userStore.loadRamadAds();
        } catch (error) {
            console.log('got error, openAd function ', error);
        }
    }
}

decorate(JobsStore, {
    advertisements: computed,
    isLoading: computed,
    loadAdvertisements: action,
    closeAd: action,
    openAd: action
});