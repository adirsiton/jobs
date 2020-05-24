import { AdsStore } from './AdvertisementStore';
import { UserStore } from './UserStore';

export class RootStore {
    adsStore: AdsStore;
    userStore: UserStore;
    constructor() {
        this.adsStore = new AdsStore(this);
        this.userStore = new UserStore(this);
    }
}

const rootStore = new RootStore();
export default rootStore; 