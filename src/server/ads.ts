
import { Advertisement , sqlAd, AdvertisementInsertData } from '../types/Advertisements';
import { AllSelectOptions } from '../types/AllSelectOptions';
import { Branch, Department } from '../types/Departments';

export async function getAllAds(): Promise<Advertisement []> {
    const ads: sqlAd[] = await fetch('/ads').then(response => {
        return response.json();
    }).then(data => {
        return data;
    });

    return ads.map(ad => parseAd(ad));
}

export const getAllSelectOptions = async (): Promise<AllSelectOptions> => {    
    const response: Response = await fetch('/ads/options', {
        method: 'GET'
    });

    const allSelectOptions = await response.json();

    return allSelectOptions;
}

export const getBranchesOfUnit = async (unitId: number): Promise<Branch[]> => {    
    const response: Response = await fetch(`/ads/branches/${unitId}`, {
        method: 'GET'
    });

    const branchesOfUnit = await response.json();

    return branchesOfUnit;
}

export const getDepartmentsOfBranch = async (branchId: number): Promise<Department[]> => {    
    const response: Response = await fetch(`/ads/departments/${branchId}`, {
        method: 'GET'
    });

    const departmentsOfBranch = await response.json();

    return departmentsOfBranch;
}

export const addNewAd = async (ad: AdvertisementInsertData): Promise<void> => {    
    await fetch('/ads', {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(ad),
    });
}

function parseAd(adJson: sqlAd): Advertisement {
    return {
        id: adJson.id,
        name: adJson.job_title,
        role: {
            id: adJson.role_id,
            name: adJson.role_name,
            initials: adJson.role_initials,
            color: adJson.role_color
        },
        description: adJson.job_description,
        entryDate: adJson.entry_date,
        seniority: adJson.seniority,
        isDamach: adJson.is_damach,
        standards: adJson.standards_array,
        unit: {
            id: adJson.unit_id,
            name: adJson.unit_name
        },
        branch: {
            id: adJson.branch_id,
            name: adJson.branch_name
        },
        department: {
            id: adJson.department_id,
            name: adJson.department_name
        },
        location: {
            id: adJson.base_location_id,
            name: adJson.location
        },
        advertiser: {
            upn: adJson.advertiser_upn,
            displayName: adJson.advertiser,
            contact: adJson.contact
        }
    };
}

export async function closeAd(adId: number): Promise<boolean> {
    const answer = await fetch(`/ads/close/${adId}`, {
        method: 'POST'
    }).then(response => {
        return response.json();
    });

    console.log(answer)

    return true; // //is_close: true
};

export async function openAd(adId: number): Promise<boolean> {
    const answer = await fetch(`/ads/open/${adId}`, {
        method: 'POST'
    }).then(response => {
        return response.json();
    });

    console.log(answer)

    return false; //is_close: false
};