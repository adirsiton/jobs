import * as React from 'react';
import { useState, useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';

import styles from './UserResumeStyle';
import NoResume from './NoResume'


const UserResume: React.FC<{}> = (): JSX.Element => {
    const classes = styles();

    return (
        <div className={classes.container}>
            <div className={classes.introduction}>
                <Avatar className={classes.avatar}>
                    {'יפ'}
                </Avatar> 
                <div className={classes.introductionContent}>
                    <span className={classes.headline}> היי יובל!</span>
                    <span> הגעת לאזור האישי שלך בג'ובניק</span>
                </div>
            </div>
           <NoResume />
        </div>
    );
}

export default UserResume;