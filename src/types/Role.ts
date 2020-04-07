import { SelectChooseOption, NO_SELECTED_OPTION } from "./ChooseOption";

export interface Role extends SelectChooseOption {};

export const NO_ROLE: Role = {
    id: NO_SELECTED_OPTION,
    name: ''
}