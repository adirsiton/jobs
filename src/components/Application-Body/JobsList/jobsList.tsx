import * as React from 'react';
import styles from './jobsListStyle';
import Job from './job';

import { Ad } from '../../../types/Ads';


interface JobsListProps {
    ads: Ad[]

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
