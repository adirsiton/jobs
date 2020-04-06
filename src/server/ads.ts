
import { Advertisement , sqlAd, AdvertisementInsertData } from '../types/Advertisements'

export async function getAllAds(): Promise<Advertisement []> {
    const ads: string = await fetch('/ads').then(response => {
        return response.text();
    }).then(data => {
        return data;
    });

    const jsonAds: sqlAd[] = JSON.parse(ads);

    return jsonAds.map(ad => parseAd(ad));
}

export const addNewAd = async (ad: AdvertisementInsertData): Promise<void> => {
    console.log(ad);
    
    await fetch('/ads', {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(ad),
    });
}

function parseAd(adJson: sqlAd): Advertisement  {
    return {
        id: adJson.id,
        name: adJson.job_name,
        tag: {
            name: adJson.tag,
            color: adJson.tag_color
        },
        description: adJson.description,
        entryDate: new Date(adJson.entry_date),
        seniority: adJson.seniority,
        isDamach: adJson.is_damach,
        standards: adJson.standards_array,
        role: {
            id: adJson.role_id,
            name: adJson.role_name
        },
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
