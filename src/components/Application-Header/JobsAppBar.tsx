import * as React from 'react';
import { inject } from 'mobx-react';
import { Link } from 'react-router-dom';

import { withStyles, WithStyles } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Tooltip from '@material-ui/core/Tooltip';

import { UserStore } from '../../store/UserStore';
import jobsLogo from '../../assets/images/jobsLogo.png';
import { User } from '../../types/userTypes';
import styles from './JobsAppBarStyle';
import FavoriteList from './favorite-list/FavoriteList';

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
                    <FavoriteList />
                </Tooltip>
                {/* <Avatar className={classes.avatar} component={Link} to={'/user'}>
                    {user.userInitials}
                </Avatar> */}

                <Avatar className={classes.avatar} component={Link} to={'/personal'}>
                    לל{/*TODO: user.userInitials*/}
                </Avatar>

            </div>
        );
    }

    const getLogo = (): JSX.Element => {
        return (
            <Link to='/' className={classes.logoContainer}>
                <img src={jobsLogo} alt="jobs_logo" />
                <Typography variant="h3" className={classes.logoSystemName}>
                    ג'ובניק
                </Typography>
                <Typography variant="h6" className={classes.logoSubTitle}>
                    מוצא לך את הג'וב הבא
                </Typography>
            </Link>
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