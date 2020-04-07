
import { SelectChooseOption, NO_SELECTED_OPTION } from "./ChooseOption";

// Do we need to specify all locations per unit? If MVP or not mvp... Most likely not mvp so nvm...

export interface BaseLocation extends SelectChooseOption {};

export const NO_BASE_LOCATION: BaseLocation = {
    id: NO_SELECTED_OPTION,
    name: ''
}
