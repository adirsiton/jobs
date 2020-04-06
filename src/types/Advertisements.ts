import { Standard } from "./Standard";
import { ContactInformation } from "./ContactInformation";
import { BaseLocation } from "./BaseLocation";
import { DepartmentData } from "./Departments";
import { Role } from "./Role";

export interface Advertisement  {
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
    advertiser: Advertiser ;
    tag: {
        name: string;
        color: string;
    };
}

export interface AdvertisementInsertData {
    baseLocation: BaseLocation;
    departmentData: DepartmentData;
    jobNickname: string;
    role: Role;
    standards: Standard[];
    entryDate: string; // Empty means Immediately, format: MM/YY (No need for days atm)
    yearsInSeniority: number;
    shouldHaveDamach: boolean;
    jobDescription: string;
    contactInformation: ContactInformation;
}

export interface AdPropertiesData {
    id: number;
    name: string
}

export interface Advertiser {
    upn: string;
    displayName: string;
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
    is_damach: true;
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
    standards_array: string[];
}