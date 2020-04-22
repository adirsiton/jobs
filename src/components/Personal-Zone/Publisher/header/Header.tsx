import * as React from 'react';

import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

import styles from './HeaderStyle';

const Header: React.FC = (): JSX.Element => {
    const classes = styles({});

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
        </div>
    );
}

export default Header;