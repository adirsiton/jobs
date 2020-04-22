
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
};

export async function unsetFavoriteAd(adId: number): Promise<boolean> {
    const answer = await fetch(`/user/favorite/${adId}`, {
        method: 'DELETE'
    }).then(response => {
        // Need to think how to determine if the action succeeded
        return response.status === 200;
    });

    return answer;
};

export async function setFavoriteAd(adId: number): Promise<boolean> {
    const answer = await fetch(`/user/favorite/${adId}`, {
        method: 'POST'
    }).then(response => {
        // Need to think how to determine if the action succeeded
        return response.status === 200;
    });

    return answer;
};