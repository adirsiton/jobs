import * as React from 'react';

import { Link } from 'react-router-dom';

import { withStyles, WithStyles } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Tooltip from '@material-ui/core/Tooltip';

import { User } from '../../types/userTypes';
import  jobsLogo from '../../assets/images/jobsLogo.png';
import FavoriteList from './favorite-list/FavoriteList';
import styles from './JobsAppBarStyle';

interface AppBarDataProps extends WithStyles<typeof styles> {
    user: User;
}

const JobsAppBar: React.FC<AppBarDataProps> = (props): JSX.Element => {
    const { user, classes } = props;

    // For now I used a stupid function, just to get a different color   
    const userHaveFavorites = (): boolean => {
        return Math.random() >= 0.5;
    }

    const getUserDetails = (): JSX.Element => {
        return (
            <div className={classes.userDetails}>
                <Tooltip placement="right" title="ג'ובים ששמרתי" aria-label="my favorites">
                    <FavoriteList/>
                </Tooltip>
                <Link to='/personal'>
                    <Avatar className={classes.avatar}>
                        {user.userInitials}
                    </Avatar>
                </Link>
            </div>
        );
    }

    const getLogo = (): JSX.Element => {
        return (
            <div className={classes.logoContainer}>
                <Link to='/'  >
                    <img src={jobsLogo} alt="jobs_logo"/>
                </Link>
                <Typography variant="h3" className={classes.logoSystemName}>
                    ג'ובניק
                </Typography>
                <Typography variant="h6" className={classes.logoSubTitle}>
                    מוצא לך את הג'וב הבא
                </Typography>
            </div>
        );
    }
    
    return (
        <AppBar className={classes.root} position="static">
            <Toolbar className={classes.toolbar}>
                {getLogo()}
                {getUserDetails()}
            </Toolbar> 
        </AppBar>
    );
}

export default withStyles(styles)(JobsAppBar);
