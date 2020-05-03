import { RoleAdPropertiesData } from './Advertisements';
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date';

export interface User {
    upn: string;
    name: string;
    userInitials: string;
    isRamad: boolean;
}

export interface RamadAd {
    id: number;
    name: string;
    role: RoleAdPropertiesData;
    candidates: Candidate[];
    isClosed: boolean;
}

export interface Candidate {
    upn: string;
    name: string;
    phoneNumber: string;
}

export interface RamadAdSQL  {
    ramad_ad: RamadAd
}

export interface Job {
    id: number;
    startDate: MaterialUiPickersDate;
    endDate: MaterialUiPickersDate;
    unitId: number;
    branchId: number;
    departmentId: number;
    jobName: string;
}

export const defaultJob: Job = {
    id: 0,
    startDate: null,
    endDate: null,
    unitId: -1,
    branchId: -1,
    departmentId: -1,
    jobName: ""
}