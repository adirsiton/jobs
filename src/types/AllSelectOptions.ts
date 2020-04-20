import { Role } from "./Role";
import { Standard } from "./Standard";
import { BaseLocation } from "./BaseLocation";
import { Unit } from "./Departments";

export interface AllSelectOptions {
    roleOptions: Role[];
    standardOptions: Standard[];
    baseLocationOptions: BaseLocation[];
    unitOptions: Unit[];
}