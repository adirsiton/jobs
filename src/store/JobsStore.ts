import { observable, decorate, action, computed } from 'mobx';
import { Advertisement } from '../types/Advertisements';
import { getAllAds } from '../server/ads';

export class JobsStore {
    private ads = observable.box<Advertisement[]>([]);
    private isLoadingAds = observable.box<boolean>(false);

    get advertisements() {
        return this.ads.get();
    }

    get isLoading () {
        return this.isLoadingAds.get();
    }

    loadAdvertisements = () => {
        // Fetch data from server
        this.isLoadingAds.set(true);
        getAllAds().then(data => {
            this.ads.set(data);
            this.isLoadingAds.set(false);
        });
    }
}
decorate(JobsStore, {
    advertisements: computed,
    isLoading: computed,
    loadAdvertisements: action
});

const jobsStore = new JobsStore();
export default jobsStore;