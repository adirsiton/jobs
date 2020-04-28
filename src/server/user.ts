import { RamadAd, RamadAdsSQL } from "../types/User";

export async function fetchFavoriteAds(): Promise<number[]> {
    const favoriteAds: number[] = await fetch(`/user/favorite`).then(response => {
        return response.json();
    });

    return favoriteAds;
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

export async function fetchRamadAds(): Promise<RamadAd[]> {
    const ramadAdsSQL: RamadAdsSQL[] = await fetch('/user/ramad-ads', {
        method: 'GET'
    }).then(response => {
        return response.json();
    });
    const allRamadAds = ramadAdsSQL.map((ad: RamadAdsSQL) => ad.ramad_ad);

    return allRamadAds;
};