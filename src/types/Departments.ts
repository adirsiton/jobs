// Todo, Add in DB these relations (Unit, Branch, Department)?

import { SelectChooseOption, NO_SELECTED_OPTION } from "./ChooseOption";

export interface Unit extends SelectChooseOption {};

export const NO_UNIT: Unit = {
    id: NO_SELECTED_OPTION,
    name: ''
};

export interface Branch extends SelectChooseOption {
    unit_id: number
};

export const NO_BRANCH: Branch = {
    id: NO_SELECTED_OPTION,
    name: '',
    unit_id: NO_SELECTED_OPTION
};

export interface Department extends SelectChooseOption {
    branch_id: number
};

export const NO_DEPARTMENT: Department = {
    id: NO_SELECTED_OPTION,
    name: '',
    branch_id: NO_SELECTED_OPTION
};

interface DepartmentsData {
    [key: string]: {
        [key: string]: Department[]
    }
};


interface StringToSelectMapper {
    [key: string]: SelectChooseOption;
}

interface DepartmentDataInfo {
    unit: Unit;
    branch: Branch;
    department: Department;
}

export type DepartmentData = DepartmentDataInfo & StringToSelectMapper;

export const EMPTY_DEPARTMENT: DepartmentData = {
    unit: NO_UNIT,
    branch: NO_BRANCH,
    department: NO_DEPARTMENT
}

interface StringToStringMapper {
    [key: string]: string;
}

const DEPARTMENT_TO_DISPLAY: StringToStringMapper = {
    unit: 'יחידה',
    branch: 'ענף',
    department: 'מדור' 
};

class Departments {   
    getAllUnits = (allUnitOptions: Unit[]): Unit[] => {
        return allUnitOptions;
    }

    // TODO: Apply to DB smart select... FIX
    getBranchesOfUnit = (unit: Unit, allBranchOptions: Branch[]): Branch[] => {        
        if (unit.id === NO_UNIT.id)
            return [];

        const branchesOfUnit = allBranchOptions;

        return branchesOfUnit;
    }

    getDepartmentsOfBranch = (unit: Unit, branch: Branch, allDepartmentOptions: Department[]): Department[] => {
        if (unit.id === NO_UNIT.id || branch.id === NO_BRANCH.id)
            return [];
    
        const departmentsOfBranch: Department[] = allDepartmentOptions;

        return departmentsOfBranch;
    }

    getDepartmentFields = (): string[] => {
        return Object.keys(DEPARTMENT_TO_DISPLAY);
    }

    getDepartmentFieldDisplay = (fieldName: string): string => {
        return DEPARTMENT_TO_DISPLAY[fieldName];
    }

    // When selecting unit/branch/department, we need the options. The method returns these options.
    getDepartmentSelectOptions = (allUnitOptions: Unit[], allBranchOptions: Branch[], allDepartmentOptions: Department[], department: DepartmentData, fieldName: string): SelectChooseOption[] => {
        switch (fieldName) {
            case 'unit':
                return this.getAllUnits(allUnitOptions);
            case 'branch':
                return this.getBranchesOfUnit(department.unit, allBranchOptions);
            case 'department':
                return this.getDepartmentsOfBranch(department.unit, department.branch, allDepartmentOptions)
            default:
                throw new Error("Field type not handled!");
        }
    }

    getSelectToolTip = (isDisabled: boolean, fieldName: string): string => {
        if (!isDisabled)
            return "";

        const higherField: string = (() => { 
            switch (fieldName) {
                case 'unit':
                    throw new Error("Higher level of unit is currently not supported");
                case 'branch':
                    return 'unit';
                case 'department':
                    return 'branch';
                default:
                    throw new Error("Field type not handled!");
            }}
        )();

        return `יש לבחור ${this.getDepartmentFieldDisplay(higherField)} קודם`;
    }

    updateDepartment = (allUnitOptions: Unit[], allBranchOptions: Branch[], allDepartmentOptions: Department[], 
                        department: DepartmentData, fieldName: string, selectOptionId: number): DepartmentData => {
        let updatedDepartment: DepartmentData = department;
        let selectChooseOption: SelectChooseOption;

        switch (fieldName) {
            case 'unit': // Changing unit, means no Branch/Department is selected
                updatedDepartment = {
                    ...updatedDepartment,
                    branch: NO_BRANCH,
                    department: NO_DEPARTMENT
                };
                selectChooseOption = allUnitOptions.find(unitOption => unitOption.id === selectOptionId)!;
                break;
            case 'branch': // Changing branch, means no Department is selected
                updatedDepartment = {
                    ...updatedDepartment,
                    department: NO_DEPARTMENT
                };
                selectChooseOption = allBranchOptions.find(branchOption => branchOption.id === selectOptionId)!;
                break;
            case 'department':
                selectChooseOption = allDepartmentOptions.find(departmentOption => departmentOption.id === selectOptionId)!;
                break;
            default:
                throw new Error("Field type not handled!");
        }

        updatedDepartment = {...updatedDepartment,
            [fieldName]: selectChooseOption
        }

        return updatedDepartment;
    }

    isUnitSelected = (department: DepartmentData): boolean => {
        return department.unit.id !== NO_UNIT.id;
    }

    
    isBranchSelected = (department: DepartmentData): boolean => {
        return department.branch.id !== NO_BRANCH.id;
    }

    isDepartmentSelected = (department: DepartmentData): boolean => {
        // Most inner select check. So if it selected, then all outer selects are elected too.
        return department.department.id !== NO_DEPARTMENT.id;
    }
}

export const DepartmentsManager = new Departments();
