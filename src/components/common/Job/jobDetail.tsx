import * as React from 'react';

import { WithStyles, withStyles } from '@material-ui/core/styles';

import styles from '../Job/jobStyles';

interface JobDetailData {
    title: string;
    data: any;
}

type JobDetailProps = JobDetailData & WithStyles<typeof styles>;

const JobDetail: React.FC<JobDetailProps> = (props): JSX.Element => {
    const {classes, title, data} = props;

    return (
        <div className={classes.jobDetail}> 
            <span className={classes.jobContentTitle}> {`${title}: `} </span> 
            <span className={classes.jobDetailData}> {data} </span>
        </div>
    );
};

export default withStyles(styles)(JobDetail);