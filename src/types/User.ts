export interface User {
    upn: string;
    name: string;
    favoriteAds: number[];
    isRamad: boolean;
}

export interface UserSql { 
    upn: string;
    name: string;
    favorite_ads: number[];  
}