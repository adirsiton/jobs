import * as React from 'react';

import { withStyles, WithStyles } from '@material-ui/core';
import Menu from '@material-ui/core/Menu';
import IconButton from '@material-ui/core/IconButton';
import StarIcon from '@material-ui/icons/Star';

import styles from './FavoriteListStyles';
import { Advertisement } from '../../../types/Advertisements';
import FavoriteItem from './FavoriteItem';

interface FavoriteListProps extends WithStyles<typeof styles> {
    ads: Advertisement[];
}

const FavoriteList: React.FC<FavoriteListProps> = (props): JSX.Element => {
    const { ads, classes } = props;

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
      };
    
      const handleClose = () => {
        setAnchorEl(null);
      };

    return (
        <>
            <IconButton className={ads.length !== 0 ? classes.starIconWhite : classes.starIconYellow}
                onClick={handleClick} 
                aria-label="my favorites" component="span">
                <StarIcon />
            </IconButton>
            <Menu
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                {ads.map((ad) => <FavoriteItem ad={ad}/>)}
            </Menu>
        </>
    );
}

export default withStyles(styles)(FavoriteList); 
