import * as React from 'react';

import { withStyles, WithStyles } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew';
import Avatar from '@material-ui/core/Avatar';
import Tooltip from '@material-ui/core/Tooltip';

import { User } from '../../types/userTypes';
import styles from './JobsAppBarStyle';
import FavoriteList from './favorite-list/FavoriteList';
import { Advertisement } from '../../types/Advertisements';

interface AppBarDataProps extends WithStyles<typeof styles> {
    user: User;
}

const JobsAppBar: React.FC<AppBarDataProps> = (props): JSX.Element => {
    const { user, classes } = props;

    // For now I used a stupid function, just to get a different color   
    const userHaveFavorites = (): boolean => {
        return Math.random() >= 0.5;
    }

    const exampleAd: any = {"id":1,"role_id":1,"tag_id":4,"unit_id":1,"branch_id":1,"department_id":1,"job_name":"מנהל מוצר מעגל האש","description":"מנהל מוצר האש, אחראי על כלל ייצוג תהליך מעגל האש במערכת ועבודה רב\"ז.","entry_date":"2020-08-31T21:00:00.000Z","seniority":2,"is_damach":true,"advertiser_upn":"s8182384","contact":"פלאפון 0527777780","base_location_id":1,"role_name":"תוכניתן","unit_name":"מצפ\"ן","department_name":"DEVOPS","branch_name":"פסגות שילוביות","location":"של\"ר","advertiser":"מיכאל הופמן","tag":"PM","tag_color":"#FF0066","standards_array":["סרן","רס\"ן"]};

    const getUserDetails = (): JSX.Element => {
        return (
            <div className={classes.userDetails}>
                <Tooltip placement="right-end" title="המועדפים שלי" aria-label="my favorites">
                    <FavoriteList ads={[exampleAd]}/>
                </Tooltip>
                <Avatar className={classes.avatar}>
                    {user.userInitials}
                </Avatar>
            </div>
        );
    }

    const getLogo = (): JSX.Element => {
        return (
            <div className={classes.logoContainer}>
                <AccessibilityNewIcon className={classes.logoIcon}/>
                <Typography variant="subtitle1" className={classes.logoTitle}>
                    Jobs
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
