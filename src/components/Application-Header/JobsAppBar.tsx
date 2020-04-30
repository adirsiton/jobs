import * as React from 'react';

import { inject } from 'mobx-react';
import { Link } from 'react-router-dom';

import { withStyles, WithStyles } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

import  jobsLogo from '../../assets/images/jobsLogo.png';
import { UserStore } from '../../store/UserStore';
import FavoriteList from './favorite-list/FavoriteList';
import styles from './JobsAppBarStyle';

interface AppBarDataProps extends WithStyles<typeof styles> {
    userStore?: UserStore;
}

const JobsAppBar: React.FC<AppBarDataProps> = (props): JSX.Element => {
    const { classes } = props;

    const userStore: UserStore = props.userStore!;

    const getUserDetails = (): JSX.Element => {
        return (
            <div className={classes.userDetails}>
                {!userStore.getUser.isRamad && <FavoriteList/>}
                <Link to='/personal'>
                    <Avatar className={classes.avatar}>
                        {userStore.getUserInitials}
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

export default inject('userStore')(withStyles(styles)(JobsAppBar));