import * as React from 'react';
import styles from './jobsListStyle';
import Job from './job';

import { Advertisement  } from '../../../types/Advertisements';


interface JobsListProps {
    ads: Advertisement []

}

const JobsList: React.FC<JobsListProps> = (props): JSX.Element => {
    const { ads } = props;
    const classes = styles();

    return (
        <div className={classes.jobsList}>
            {ads.map(ad => <Job key={ad.id} ad={ad} />)}
        </div>
    );
}

export default JobsList;
