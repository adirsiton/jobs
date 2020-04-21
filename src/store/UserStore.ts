import CookieUtils from 'js-cookie';

export class UserStore {
    // Get the user info via cookie
    private user = JSON.parse(CookieUtils.get('user') || '{}');    
    
    get upn():string {
        return this.user.upn;
    }

    get displayName(): string {
        return this.user.name
    }

    get isRamad(): boolean {
        return this.user.ramad;
    }
}

const userStore = new UserStore();
export default userStore;