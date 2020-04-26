import { RamadAds } from "../types/User";

export async function fetchFavoriteAds(): Promise<number[]> {
    const favoriteAds: number[] = await fetch(`/user/favorite`).then(response => {
        return response.json();
    }).then(data => {
        return data;
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
        console.log(response)
        // Need to think how to determine if the action succeeded
        return response.status === 200;
    });

    return answer;
};

export async function fetchRamadAds(): Promise<RamadAds[]> {
    const ramadAds: RamadAds[] = [
        {
            id: 1,
            name: 'דרוש רשץ דחוף',
            role: {id:1, name: 'רש"צ', color: 'red', initials: 'TL'},
            candidate: [ {
                name: 'אדיר סיטון',
                phoneNumber: '052-4231561',
                upn: 's8232392' 
            }, {
                name: 'מיכאל הופמן',
                phoneNumber: '052-4243361',
                upn: 's8189435'                 
            } ] 
        }, {
            id: 2,
            name: 'מנהל מוצר תותח',
            role: {id:1, name: 'מנהל מוצר', color: 'red', initials: 'TL'},
            candidate: [ {
                name: 'אדיר סיטון',
                phoneNumber: '052-4231561',
                upn: 's8232392' 
            }, {
                name: 'מיכאל הופמן',
                phoneNumber: '052-4243361',
                upn: 's8189435'                 
            }, {
                name: 'אאאאאבבבבבגגגגגדדדדד הההההווווו',
                phoneNumber: '054-3592234',
                upn: 's7464334'                 
            } ] 
        }
    ]

    return ramadAds;
};