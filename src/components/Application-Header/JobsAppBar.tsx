import * as React from 'react';

import { inject } from 'mobx-react';

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
import { UserStore } from '../../store/UserStore';

interface AppBarDataProps extends WithStyles<typeof styles> {
    userStore?: UserStore;
}

const JobsAppBar: React.FC<AppBarDataProps> = (props): JSX.Element => {
    const { classes } = props;
    const userStore: UserStore = props.userStore!;

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
                <Avatar className={classes.avatar}>
                    {userStore.displayName.substring(0,1)}
                </Avatar>
            </div>
        );
    }

    const getLogo = (): JSX.Element => {
        return (
            <div className={classes.logoContainer}>
                <img src={jobsLogo} alt="jobs_logo"/>
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

export default inject('userStore')(withStyles(styles)(JobsAppBar));