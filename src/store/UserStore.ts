import CookieUtils from 'js-cookie';
// import cookie from 'js-cookie';

import { decorate, action, computed } from 'mobx';

import { unsetFavoriteAd, setFavoriteAd } from '../server/user';
import { User } from '../types/User';
import { RootStore } from './RootStore';

export class UserStore {
    private rootStore: RootStore;
    constructor(rootStore: RootStore) {
        this.rootStore = rootStore
    }
    private loggedUser: User = JSON.parse(CookieUtils.get('user') || '{}');    

    get getUser() {
        console.log(this.loggedUser)
        return this.loggedUser;
    }

    unsetFavoriteAd = async (adId: number) => {
        await unsetFavoriteAd(adId);
        const newUser: User = {
            ...this.getUser,
            favoriteAds: this.getUser.favoriteAds.filter(favAd => favAd!==adId)
        };
        this.loggedUser = newUser;
    }

    setFavoriteAd = async (adId: number) => {
        await setFavoriteAd(adId);
        const newUser: User = {
            ...this.getUser,
            favoriteAds: this.getUser.favoriteAds.concat(adId)
        };
        this.loggedUser = newUser;
    }
}

decorate(UserStore, {
    getUser: computed,
    // isLoading: computed,
    // loadUserDetails: action,
    unsetFavoriteAd: action,
    setFavoriteAd: action
});
// from the master
// import CookieUtils from 'js-cookie';

// interface User {
//     upn: string;
//     displayName: string;
//     isRamad: boolean;
// }

// export class UserStore {
//     // Get the user info via cookie
//     private loggedUser = JSON.parse(CookieUtils.get('user') || '{}');    
    
//     get user(): User {
//         return this.loggedUser;
//     }
// }

// const userStore = new UserStore();
// export default userStore;
