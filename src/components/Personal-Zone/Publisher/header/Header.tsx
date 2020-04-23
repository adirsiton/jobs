import * as React from 'react';
import { useState, useEffect, useRef } from 'react';

import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

import styles from './HeaderStyle';
import NewJobButton from '../new-job/new-job-button/NewJobButton';

interface HeaderOwnProps {
    withAddButton: boolean;
}

const Header: React.FC<HeaderOwnProps> = (props): JSX.Element => {
    const classes = styles({});
    const { withAddButton } = props;

    const headerTitle = (): JSX.Element => {
        const FIRST_NAME = 'נוי'; // TODO: Extract from mobx, the logged user's first name

        return (
            <div className={classes.headerTitle}>
                <Avatar className={classes.avatar}>
                    א י
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

export default Header;