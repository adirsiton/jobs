import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import { observer, inject } from 'mobx-react';
import { RamadAd } from '../../../../types/User';
import styles from './jobsListStyle';
import Job from './job';
import { AdsStore } from '../../../../store/AdvertisementStore';

interface JobsListProps {
    ads: RamadAd[];
    adsStore?: AdsStore;
}

const JobsList: React.FC<JobsListProps> = (props): JSX.Element => {
    const { ads } = props;
    const adsStore: AdsStore = props.adsStore!;

    const classes = styles();

    const renderJobs = (): JSX.Element => {
        if (ads.length === 0) {
            return <></>
        } else {
            return <>{ads.map(ad => (
                <Job 
                    key={ad.id} 
                    ad={ad}
                    toggleIsClose={adsStore.toggleIsClose}
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

export default inject('adsStore')(observer(JobsList));