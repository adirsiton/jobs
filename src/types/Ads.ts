export interface Ad {
    id: number;
    name: String;
    description: string;
    entryDate: Date;
    seniority: number;
    isDamach: boolean;
    standards: string[];
    role: AdPropertiesData;
    unit: AdPropertiesData;
    branch: AdPropertiesData;
    department: AdPropertiesData;
    location: AdPropertiesData;
    advertiser: Advertieser;
    tag: {
        name: string;
        color: string;
    };
}

export interface AdPropertiesData {
    id: number;
    name: string
}

export interface Advertieser {
    upn: string;
    dispalyName: string;
    contact: string;
}

export interface sqlAd {
    id: number;
    role_id: number;
    unit_id: number;
    branch_id: number;
    department_id: number;
    job_name: string;
    description: string;
    entry_date: string;
    seniority: number;
    is_damach: true
    advertiser_upn: string;
    contact: string;
    base_location_id: number;
    role_name: string;
    unit_name: string;
    department_name: string;
    branch_name: string;
    location: string;
    advertiser: string;
    tag: string;
    tag_color: string;
    standards_array: string[]
}