
import { User, UserSql } from '../types/User';

export async function fetchUserDetails(): Promise<User> {
    const user: UserSql[] = await fetch('/user').then(response => {
        return response.json();
    }).then(data => {
        return data;
    });

    const { upn, name, favorite_ads } = user[0];
    return {
        upn,
        name,
        favoriteAds: favorite_ads
    };
}