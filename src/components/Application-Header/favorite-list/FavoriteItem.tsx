import * as React from 'react';

import { withStyles, WithStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';

import { Advertisement } from '../../../types/Advertisements';
import styles from './FavoriteListStyles';

interface FavoriteItemProps extends WithStyles<typeof styles> {
    ad: Advertisement; 
}

const FavoriteItem: React.SFC<FavoriteItemProps> = (props): JSX.Element => {
    const { ad, classes } = props;

    return (
        <div className={classes.favoriteRoot}>
            <div className={classes.favoriteContent}>
                <div className={classes.favoriteHeader}>
                    <span className={classes.favoriteTitle} title={"" + ad.name}>{ad.name}</span>
                    <Typography className={classes.favoriteTag} style={{ backgroundColor: ad.role.color }}>
                        {ad.role.initials} 
                    </Typography>
                </div>
                <div className={classes.favoriteSecondaryTitle}>
                    <span> {`${ad.unit.name}/${ad.branch.name}/${ad.department.name}`}</span>
                </div>
            </div>
            <Button className={classes.favoriteViewButton} startIcon={<VisibilityOutlinedIcon className={classes.viewIcon} />}> צפייה  </Button>
        </div>
    );
}

export default withStyles(styles)(FavoriteItem); 
