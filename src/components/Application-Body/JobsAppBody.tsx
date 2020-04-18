import * as React from 'react';
import { useState, useEffect } from 'react';

import { observer, inject } from 'mobx-react';

import makeStyles from '@material-ui/core/styles/makeStyles';

import { JobsStore } from '../../store/JobsStore';
import JobsList from './JobsList/jobsList';
import Header from './header/Header';
import { Advertisement } from '../../types/Advertisements';

const styles = makeStyles({
    appBodyContent: {
        paddingLeft: '3vw',
        paddingRight: '2vw',
        paddingTop: '2vh',
        display: "flex",
        flexDirection: "column"
    }
});

interface JobsAppBodyOwnProps {
    jobsStore?: JobsStore;
}

const JobsAppBody: React.FC<JobsAppBodyOwnProps> = (props): JSX.Element => {
    const classes = styles({});
    const jobsStore = props.jobsStore!;

    const [searchValue, setSearchValue] = useState<string>('');

    useEffect(() => {
        jobsStore.loadAdvertisements();
    }, []);

    const onSearchValueChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setSearchValue(event.target.value);
    }

    const getFilteredAds = (): Advertisement[] => {
        const ads = jobsStore.advertisements;

        return ads.filter(ad => (
                ad.name.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1 ||
                ad.tag.name.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1
            )
        );
    }

    return (
        <div className={classes.appBodyContent}>
            <Header 
                searchValue={searchValue} 
                onSearchValueChange={onSearchValueChange}
                fetchAllAdsAfterPost={() => {jobsStore.loadAdvertisements()}} />
            <JobsList ads={jobsStore.advertisements} isFiltered={searchValue !== '' && jobsStore.advertisements.length !== 0}/>
        </div>
    );
}

export default inject('jobsStore')(observer(JobsAppBody));
