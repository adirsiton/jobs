import { SelectChooseOption, NO_SELECTED_OPTION } from './ChooseOption';

export interface Role extends SelectChooseOption {
    initials?: string;
    color?: string;
}

export const NO_ROLE: Role = {
    id: NO_SELECTED_OPTION,
    name: '',
};
