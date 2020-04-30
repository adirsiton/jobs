import { observable, decorate, action, computed } from 'mobx';
import { Advertisement } from '../types/Advertisements';
import { getAllAds, closeAd, openAd } from '../server/ads';

export class JobsStore {
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

    closeAd = async (adId: number) => {
        try {
            await closeAd(adId);
            const newAds = this.ads.get().filter(ad => ad.id !== adId); // rather then load this.loadAdvertisements
            this.ads.set(newAds);
            // todo load ramad ads or update

        } catch (error) {
            console.log('got error, closeAd function ', error);
        }
    }

    openAd = async (adId: number) => {
        try {
            await openAd(adId);
            await this.loadAdvertisements();
            // todo load ramad ads or update
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