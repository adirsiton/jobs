import * as React from 'react';
import { useState, useEffect, useRef } from 'react';

import { inject } from 'mobx-react';

import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

import { UserStore } from '../../../../store/UserStore';
import NewJobButton from '../new-job/new-job-button/NewJobButton';

import styles from './HeaderStyle';

interface HeaderOwnProps {
    withAddButton: boolean;
    userStore?: UserStore;

}

const Header: React.FC<HeaderOwnProps> = (props): JSX.Element => {
    const classes = styles({});
    const { withAddButton } = props;
    const userStore = props.userStore!;
    
    const headerTitle = (): JSX.Element => {
        const FIRST_NAME = userStore.getUser.name;

        return (
            <div className={classes.headerTitle}>
                <Avatar className={classes.avatar}>
                    {userStore.getUserInitials}
                </Avatar>
                <div>
                    <Typography variant='h6' className={classes.headerTitleName}>
                        היי {FIRST_NAME}!
                    </Typography>
                    <Typography variant='h6'>
                        הגעת לאזור האישי שלך בג'ובניק
                    </Typography>
                </div>
            </div>
        );
    }

    return (
        <div className={classes.root}>           
            {headerTitle()}
            {withAddButton && <NewJobButton />}
        </div>
    );
}

export default inject('userStore')(Header);