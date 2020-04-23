import CookieUtils from 'js-cookie';

import { observable, decorate, action, computed } from 'mobx';

import { unsetFavoriteAd, setFavoriteAd } from '../server/user';
import { User } from '../types/User';
import { RootStore } from './RootStore';

export class UserStore {
    private rootStore: RootStore;
    constructor(rootStore: RootStore) {
        this.rootStore = rootStore
    }

    private loggedUser = observable.box<User>(JSON.parse(CookieUtils.get('user') || '{}'));

    get getUser() {
        return this.loggedUser.get();
    }

    unsetFavoriteAd = async (adId: number) => {
        try {
            const boolAnswer: boolean = await unsetFavoriteAd(adId);
            const newUser: User = {
                ...this.getUser,
                favoriteAds: this.getUser.favoriteAds.filter(favAd => favAd!==adId)
            };
            console.log('new user, unset', newUser, boolAnswer);
            this.loggedUser.set(newUser);
        } catch (error) {
            console.log('got error, unset function', error);
        }
    }

    setFavoriteAd = async (adId: number) => {
        try {
            const boolAnswer: boolean = await setFavoriteAd(adId);
            const newUser: User = {
                ...this.getUser,
                favoriteAds: this.getUser.favoriteAds.concat(adId)
            };
            console.log('new user, set', newUser, boolAnswer);
            this.loggedUser.set(newUser);
        } catch (error) {
            console.log('got error, set function', error);
        }
        
    }
}

decorate(UserStore, {
    getUser: computed,
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
