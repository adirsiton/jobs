import * as React from 'react';
import { useEffect } from 'react'

import { observer, inject } from 'mobx-react';

import { withStyles, WithStyles } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Tooltip from '@material-ui/core/Tooltip';

import { User } from '../../types/User';
import  jobsLogo from '../../assets/images/jobsLogo.png';
import { UserDetailsStore } from '../../store/UserDetailsStore';
import FavoriteList from './favorite-list/FavoriteList';
import styles from './JobsAppBarStyle';

interface AppBarDataProps extends WithStyles<typeof styles> {
    userDetailsStore?: UserDetailsStore;
}

const JobsAppBar: React.FC<AppBarDataProps> = (props): JSX.Element => {
    const { classes } = props;

    const userDetailsStore: UserDetailsStore = props.userDetailsStore!;
    const myUser: User = userDetailsStore.getUserDetails;

    useEffect(() => {
        userDetailsStore.loadUserDetails();
    }, []);

    const getUserInitials = (name: string): string => {
        const splitName: string[] = name.split(' ');
        return splitName.map(n=> n[0]).join(' '); 
    }

    const getUserDetails = (): JSX.Element | void  => {
        if (userDetailsStore.isLoading || myUser === undefined) {
            return;
        }
        return (
            <div className={classes.userDetails}>
                <Tooltip placement="right" title="ג'ובים ששמרתי" aria-label="my favorites">
                    <FavoriteList/>
                </Tooltip>
                <Avatar className={classes.avatar}>
                    {getUserInitials(myUser.name)}
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

export default withStyles(styles)(inject('userDetailsStore')(observer(JobsAppBar)));