import * as React from 'react';
import { useState, useEffect } from 'react';
import { withStyles, WithStyles } from '@material-ui/core';

import styles from './jobsListStyle';

interface JobsListProps extends WithStyles<typeof styles> {
    ads: any

}

const JobsList: React.FC<JobsListProps> = (props): JSX.Element => {
    const { ads, classes } = props;
    useEffect(() => {

    }, []);




    return (
        <div>
            {ads}
        </div>
    );
}

export default withStyles(styles)(JobsList);
