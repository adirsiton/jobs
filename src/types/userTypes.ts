import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date';

export interface User {
    name: string;
    userInitials: string;
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
