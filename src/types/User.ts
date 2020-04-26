import { RoleAdPropertiesData } from './Advertisements';
export interface User {
    upn: string;
    name: string;
    isRamad: boolean;
}

export interface RamadAds {
    id: number;
    name: string;
    role: RoleAdPropertiesData;
    candidate: Condidate[];
}

export interface Condidate {
    upn: string;
    name: string;
    phoneNumber: string;
}