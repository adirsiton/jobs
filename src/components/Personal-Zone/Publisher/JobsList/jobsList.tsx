import * as React from 'react';

import Typography from '@material-ui/core/Typography';

import { RamadAd } from '../../../../types/User';
import styles from './jobsListStyle';
import Job from './job';


interface JobsListProps {
    ads: RamadAd[];
}

const JobsList: React.FC<JobsListProps> = (props): JSX.Element => {
    const { ads } = props;
    const classes = styles();

    const renderJobs = (): JSX.Element => {
        if (ads.length === 0) {
            return <></>
        } else {
            return <>{ads.map(ad => <Job key={ad.id} ad={ad} />)}</>;
        }
    }

    return (
        <>
            <Typography
                    variant='h4'
                    className={classes.jobsHeaderTitle}>
                    התעניינו בתפקידים שלך
            </Typography>
            <div className={classes.jobsList}>
                {renderJobs()}
            </div>
        </>
    );
}

export default JobsList;
