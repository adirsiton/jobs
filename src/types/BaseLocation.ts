// Todo, Add in DB these relation: BaseLocation (Inserts might miss that? Check tomorrow)

// Do we need to specify all locations per unit? If MVP or not mvp... Most likely not mvp so nvm...

export enum BaseLocation {
    NO_BASE_LOCATION = '',
    SHALISHOOT = 'שלישות',
    ZTRIFIN = 'צריפין'
};

class BaseLocations {   
    getAllBaseLocations = (): BaseLocation[] => {
        return Object.values(BaseLocation)
            .filter(baseLocation => baseLocation !== BaseLocation.NO_BASE_LOCATION)
            .sort();
    }
}

export const BaseLocationManager = new BaseLocations();
