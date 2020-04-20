import * as React from 'react';

import { observer, inject } from 'mobx-react';

import { withStyles, WithStyles } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import StarIcon from '@material-ui/icons/Star';
import Popover from '@material-ui/core/Popover';
import Divider from '@material-ui/core/Divider';

import { Advertisement } from '../../../types/Advertisements';
import { RootStore } from '../../../store/RootStore';
import FavoriteItem from './FavoriteItem';
import styles from './FavoriteListStyles';

interface FavoriteListProps extends WithStyles<typeof styles> {
    rootStore?: RootStore;
}

const FavoriteList: React.FC<FavoriteListProps> = (props): JSX.Element => {
    const { classes } = props;
    const rootStore: RootStore = props.rootStore!;
    const userFavoriteAdsIds: number[] = rootStore.userStore.getUser.favoriteAds!;
    const allAd: Advertisement[] = rootStore.jobsStore.advertisements;

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const handleSavedJobsButtonClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
        if (userFavoriteAdsIds.length > 0) {
            setAnchorEl(event.currentTarget);
        }
    };
    
    const handleClose = (): void => {
        setAnchorEl(null);
    };

    const getIconColor = (): string => {
        return userFavoriteAdsIds.length > 0 ? classes.starIconYellow : classes.starIconWhite;
    }

    const displayFavoriteItems = (): JSX.Element[] => {
        return userFavoriteAdsIds.map(favorId => {
            const favorAd = allAd.find(ad => ad.id === favorId);
            if (typeof favorAd === "undefined") { return <></>; }
            return (
                <div key={`${favorAd!.id}-favorite-div`}>
                    <FavoriteItem key={`${favorAd!.id}-favorite`} ad={favorAd}/>
                    <Divider key={`${favorAd.id}-favorite-divider`}/>
                </div>
            );
        })
    }

    return (
        <>
            <IconButton className={getIconColor()}
                onClick={handleSavedJobsButtonClick} 
                aria-label="my favorites" component="span">
                <StarIcon className={classes.starIcon} />
            </IconButton>
            <Popover
                open={Boolean(anchorEl)}
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                  }}
                onClose={handleClose}
            >
                {displayFavoriteItems()}
            </Popover>
        </>
    );
}

export default withStyles(styles)(inject('rootStore')(observer(FavoriteList))); 
