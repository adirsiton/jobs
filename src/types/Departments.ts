// Todo, Add in DB these relations (Unit, Branch, Department)?

export enum Unit {
    NO_UNIT = '',
    MAZPEN = 'מצפ"ן',
    MAMRAM = 'ממר"מ'
};

export enum Branch {
    NO_BRANCH = '',
    PSAGOT_SHILUVIUT = 'פסגות ושילוביות',
    AVEN_MITGALGELET = 'אבן מתגלגלת',
    ANAN_MIVZTAI = 'ענן מבצעי',
    MERHAV_HATOMCAL = 'מרחב התומכ"ל'
};

export enum Department {
    NO_DEPARTMENT = '',
    DEVOPS = 'DEVOPS',
    KISHURIUT_AND_FIRE = 'קישוריות ואש',
    SPECTRUM = 'ספקטרום',
    HANDASAT_SHILUVIUT = 'הנדסת השילוביות',
    LA = 'ל"א',
    AVEN_AHAHAMIM = 'אבן החכמים',
    GLOBUS = 'גלובוס',
    MAAVARIM = 'מעברים',
    PLATFORMS = 'Platforms',
    BIG_DATA = 'Big Data',
    CTO = 'Cto',
    MEMAD = 'מימ"ד',
    RESHATOT = 'רשתות'
};

interface DepartmentsData {
    [key: string]: {
        [key: string]: Department[]
    }
};

const DEPARTMENTS_DATA: DepartmentsData = {
    [Unit.MAZPEN]: {
        [Branch.PSAGOT_SHILUVIUT]: [
            Department.DEVOPS,
            Department.KISHURIUT_AND_FIRE,
            Department.SPECTRUM,
            Department.HANDASAT_SHILUVIUT,
            Department.LA
        ],
        [Branch.AVEN_MITGALGELET]: [
            Department.AVEN_AHAHAMIM,
            Department.GLOBUS,
            Department.MAAVARIM
        ]
    },
    [Unit.MAMRAM]: {
        [Branch.ANAN_MIVZTAI]: [
            Department.PLATFORMS,
            Department.BIG_DATA,
            Department.CTO
        ],
        [Branch.MERHAV_HATOMCAL]: [
            Department.MEMAD,
            Department.RESHATOT
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

export const EMPTY_DEPARTMENT: DepartmentData = {
    unit: Unit.NO_UNIT,
    branch: Branch.NO_BRANCH,
    department: Department.NO_DEPARTMENT
}

const DEPARTMENT_TO_DISPLAY: StringToStringMapper = {
    unit: 'יחידה',
    branch: 'ענף',
    department: 'מדור' 
};

class Departments {   
    getAllUnits = (): Unit[] => {
        const units: string[] = Object.keys(DEPARTMENTS_DATA);

        return Object.values(Unit)
            .filter(unit => units.includes(unit))
            .sort();
    }

    getBranchesOfUnit = (unit: Unit): Branch[] => {        
        if (!unit)
            return [];

        const branchesOfUnit: string[] = Object.keys((DEPARTMENTS_DATA[unit]));
        
        return Object.values(Branch)
            .filter(branch => branchesOfUnit.includes(branch))
            .sort();
    }

    getDepartmentsOfBranch = (unit: Unit, branch: Branch): Department[] => {
        if (!unit || !branch)
            return [];

        const departmentsOfBranch: Department[] = DEPARTMENTS_DATA[unit][branch];
    
        return departmentsOfBranch.sort();
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
                    branch: Branch.NO_BRANCH,
                    department: Department.NO_DEPARTMENT
                };
                break;
            case 'branch':
                updatedDepartment = {
                    ...updatedDepartment,
                    department: Department.NO_DEPARTMENT
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

    isDepartmentSelected = (department: DepartmentData): boolean => {
        // Most inner select check. So if it selected, then all outer selects are elected too.
        return department.department !== Department.NO_DEPARTMENT;
    }
}

export const DepartmentsManager = new Departments();
