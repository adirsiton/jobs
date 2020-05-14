import * as React from 'react';
import { useEffect } from 'react';
import { inject, observer } from 'mobx-react';

import styles from './FavoriteAdsScreenStyle';
import { RootStore } from '../../../../store/RootStore';
import { UserStore } from '../../../../store/UserStore';
import { AdsStore } from '../../../../store/AdvertisementStore';
import { Advertisement } from '../../../../types/Advertisements';
import NoFavoriteAds from './NoFavoriteAds/NoFavoriteAds';
import Job from '../../../Home-Page/JobsList/job';

interface FavoriteAdsProps {
    rootStore?: RootStore;
}

const FavoriteAdsScreen: React.FC<FavoriteAdsProps> = (props): JSX.Element => {
    const classes = styles();

    const { rootStore } = props;

    const userStore: UserStore = rootStore!.userStore;
    const adsStore: AdsStore = rootStore!.adsStore;
    const favoriteAds: Advertisement[] = adsStore.advertisements
        .filter(advertisement => userStore.getFavoriteAds.includes(advertisement.id));

    useEffect(() => {
        rootStore!.adsStore.loadAdvertisements();
        rootStore!.userStore.loadFavoriteAds();
    }, [rootStore]);

    return (
        <>
            {
                favoriteAds.length > 0 ? 
                <>
                    <div className={classes.favoriteTitle}>
                        תפקידים שהתעניית בהם
                    </div>
                    <div className={classes.adList}>
                        {favoriteAds.map(favoriteAd => (
                            <Job
                                ad={favoriteAd}
                                isFavorite={true}
                                toggleFavoriteAd={(isFavorite) =>
                                    userStore.toggleFavoriteAd(favoriteAd.id, isFavorite)}
                            />
                        ))}
                    </div>
                </> :
                <NoFavoriteAds/>
            }
        </>
    );
}

export default inject('rootStore')(observer(FavoriteAdsScreen));