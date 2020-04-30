import * as React from 'react';

import Typography from '@material-ui/core/Typography';

import { observer, inject } from 'mobx-react';

import { RamadAd } from '../../../../types/User';
import styles from './jobsListStyle';
import Job from './job';
import { JobsStore } from '../../../../store/JobsStore';


interface JobsListProps {
    ads: RamadAd[];
    jobsStore?: JobsStore;
}

const JobsList: React.FC<JobsListProps> = (props): JSX.Element => {
    const { ads } = props;
    const jobsStore: JobsStore = props.jobsStore!;

    const classes = styles();

    const renderJobs = (): JSX.Element => {
        if (ads.length === 0) {
            return <></>
        } else {
            return <>{ads.map(ad => (
                <Job 
                    key={ad.id} 
                    ad={ad}
                    closeAd={() => jobsStore.closeAd(ad.id)}
                    openAd={() => jobsStore.openAd(ad.id)}
                />
            ))}</>;
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

export default inject('jobsStore')(observer(JobsList));