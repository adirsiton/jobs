import { Role } from "./Role";
import { Standard } from "./Standard";
import { BaseLocation } from "./BaseLocation";
import { Unit,Branch, Department } from "./Departments";
import { Qualification } from "./Qualification";

export interface AllSelectOptions {
    roleOptions: Role[];
    standardOptions: Standard[];
    baseLocationOptions: BaseLocation[];
    unitOptions: Unit[];
    branchOptions: Branch[];
    departmentOptions: Department[];
    qualificationOptions: Qualification[];
}