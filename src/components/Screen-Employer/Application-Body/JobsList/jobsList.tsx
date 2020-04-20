import * as React from 'react';

import styles from './jobsListStyle';
import Job from './job';
import { Advertisement } from '../../../../types/Advertisements';


interface JobsListProps {
    ads: Advertisement[];
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
        <div className={classes.jobsList}>
            {renderJobs()}
        </div>
    );
}

export default JobsList;
