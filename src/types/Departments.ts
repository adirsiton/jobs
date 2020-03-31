export type Unit = string;
export type Branch = string;
export type Department = string;

interface DepartmentsData {
    [key: string]: {
        [key: string]: Department[]
    }
};

const DEPARTMENTS_DATA: DepartmentsData = {
    'מצפ"ן': {
        "פסגות ושילוביות": [
            "DEVOPS",
            "קישוריות ואש",
            "ספקטרום",
            "הנדסת השילוביות",
            'ל"א'
        ],
        "אבן מתגלגלת": [
            "אבן החכמים",
            "גלובוס",
            "מעברים"
        ]
    },
    'ממר"מ': {
        "ענן מבצעי": [
            "Platforms", "Big Data", "cto"
        ],
        'מרחב התומכ"ל': [
            'מימ"ד',
            "רשתות"
        ]
    }
};

interface StringToStringMapper {
    [key: string]: string;
}

interface DepartmentDataInfo {
    unit: Unit;
    branch: Branch;
    department: Department;
}

export type DepartmentData = DepartmentDataInfo & StringToStringMapper;

const DEPARTMENT_TO_DISPLAY: StringToStringMapper = {
    unit: "יחידה",
    branch: "ענף",
    department: "מדור" 
};

class Departments {   
    getAllUnits = (): Unit[] => {
        return Object.keys(DEPARTMENTS_DATA).sort();
    }

    getBranchesOfUnit = (unit: Unit): Branch[] => {        
        if (!unit)
            return [];
        return Object.keys((DEPARTMENTS_DATA[unit])).sort();
    }

    getDepartmentsOfBranch = (unit: Unit, branch: Branch): Department[] => {
        if (!unit || !branch)
            return [];
        return DEPARTMENTS_DATA[unit][branch].sort();
    }

    getDepartmentFields = (): string[] => {
        return Object.keys(DEPARTMENT_TO_DISPLAY);
    }

    getDepartmentFieldDisplay = (field: string): string => {
        return DEPARTMENT_TO_DISPLAY[field];
    }

    getDepartmentFieldOptions = (department: DepartmentData, field: string): string[] => {
        switch (field) {
            case 'unit':
                return this.getAllUnits();
            case 'branch':
                return this.getBranchesOfUnit(department.unit);
            case 'department':
                return this.getDepartmentsOfBranch(department.unit, department.branch)
            default:
                throw new Error("Field type not handled!");
        }
    }

    getSelectToolTip = (isDisabled: boolean, field: string): string => {
        if (!isDisabled)
            return "";

        const higherField: string = (() => { 
            switch (field) {
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

    updateDepartment = (department: DepartmentData, field: string, value: string): DepartmentData => {
        let updatedDepartment: DepartmentData = department;

        switch (field) {
            case 'unit': /* fall through */
                updatedDepartment = {
                    ...updatedDepartment,
                    branch: '',
                    department: ''
                };
                break;
            case 'branch':
                updatedDepartment = {
                    ...updatedDepartment,
                    department: ''
                };
                break;
            case 'department':
                break;
            default:
                throw new Error("Field type not handled!");
        }

        updatedDepartment = {...updatedDepartment,
            [field]: value
        }

        return updatedDepartment;
    }
}

export const DepartmentsManager = new Departments();
