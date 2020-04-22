import CookieUtils from 'js-cookie';

interface User {
    upn: string;
    displayName: string;
    isRamad: boolean;
}

export class UserStore {
    // Get the user info via cookie
    private loggedUser = JSON.parse(CookieUtils.get('user') || '{}');    
    
    get user(): User {
        return this.loggedUser;
    }
}

const userStore = new UserStore();
export default userStore;