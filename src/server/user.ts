
import { User } from '../types/User';

export async function fetchUserDetails(): Promise<User> {
    // const userDetails: User = await fetch('/user/details').then(response => {
    //     return response.json();
    // }).then(data => {
    //     return data;
    // });
    await new Promise(resolve => setTimeout(resolve, 3000));

    return {
        upn: 's8182384',
        name: 'מיכאל הופמן',
        favoriteAds: [1, 3]
    };
}