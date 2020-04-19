import * as React from 'react';

import { observer, inject } from 'mobx-react';

import { withStyles, WithStyles } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import StarIcon from '@material-ui/icons/Star';
import Popover from '@material-ui/core/Popover';
import Divider from '@material-ui/core/Divider';

import FavoriteItem from './FavoriteItem';
import { JobsStore } from '../../../store/JobsStore';
import styles from './FavoriteListStyles';

interface FavoriteListProps extends WithStyles<typeof styles> {
    jobsStore?: JobsStore;
}

const FavoriteList: React.FC<FavoriteListProps> = (props): JSX.Element => {
    const { classes } = props;
    const jobsStore: JobsStore = props.jobsStore!;

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const handleSavedJobsButtonClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
        setAnchorEl(event.currentTarget);
      };
    
      const handleClose = (): void => {
        setAnchorEl(null);
      };

    return (
        <>
            <IconButton className={jobsStore.advertisements.length === 0 ? classes.starIconWhite : classes.starIconYellow}
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
                {jobsStore.advertisements.slice(0,2).map((ad) => (
                    <>
                        <FavoriteItem key={`${ad.id}-favorite`} ad={ad}/>
                        <Divider key={`${ad.id}-favorite-divider`}/>
                    </>
                    )
                )}
            </Popover>
        </>
    );
}

export default withStyles(styles)(inject('jobsStore')(observer(FavoriteList))); 
