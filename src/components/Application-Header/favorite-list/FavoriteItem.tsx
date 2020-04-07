import * as React from 'react';

import { withStyles, WithStyles } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';

import styles from './FavoriteListStyles';
import { Advertisement } from '../../../types/Advertisements';
import classes from '*.module.css';

interface FavoriteItemProps extends WithStyles<typeof styles> {
    ad: Advertisement; 
}

const FavoriteItem: React.SFC<FavoriteItemProps> = (props): JSX.Element => {
    const { ad, classes } = props;

    return (
        <MenuItem>
            <div>
                <span className={classes.favoriteTitle}>{ad.name}</span>
            </div>
        </MenuItem>
    );
}

export default withStyles(styles)(FavoriteItem); 
