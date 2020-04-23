import { Standard } from "./Standard";
import { ContactInformation } from "./ContactInformation";
import { BaseLocation } from "./BaseLocation";
import { DepartmentData } from "./Departments";
import { Role } from "./Role";

export interface Advertisement  {
    id: number;
    name: string;
    description: string;
    entryDate: string;
    seniority: number;
    isDamach: boolean;
    standards: string[];
    role: RoleAdPropertiesData;
    unit: AdPropertiesData;
    branch: AdPropertiesData;
    department: AdPropertiesData;
    location: AdPropertiesData;
    advertiser: Advertiser ;
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

interface RoleAdPropertiesData extends AdPropertiesData {
    initials: string;
    color: string;
}

export interface Advertiser {
    upn: string;
    displayName: string;
    contact: string;
}

export interface sqlAd {
    id: number;
    role_id: number;
    role_name: string;
    role_initials: string;
    role_color: string;
    unit_id: number;
    branch_id: number;
    department_id: number;
    job_title: string;
    job_description: string;
    entry_date: string;
    seniority: number;
    is_damach: true;
    advertiser_upn: string;
    contact: string;
    base_location_id: number;
    unit_name: string;
    department_name: string;
    branch_name: string;
    location: string;
    advertiser: string;
    standards_array: string[];
}