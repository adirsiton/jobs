export interface User {
    upn: string;
    name: string;
    favoriteAds: number[];
}

export interface UserSql { 
    upn: string;
    name: string;
    favorite_ads: number[];    
}