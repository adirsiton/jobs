import * as React from 'react';
import { useState, useEffect } from 'react';

import { observer, inject } from 'mobx-react';

import makeStyles from '@material-ui/core/styles/makeStyles';

import { JobsStore } from '../../../store/JobsStore';
import JobsList from './JobsList/jobsList';
import Header from './header/Header';
// import { Advertisement } from '../../types/Advertisements';

const styles = makeStyles({
    appBodyContent: {
        paddingLeft: '3vw',
        paddingRight: '2vw',
        paddingTop: '2vh',
        display: "flex",
        flexDirection: "column"
    }
});

interface JobsAppEmployerBodyOwnProps {
    jobsStore?: JobsStore;
}

const JobsAppEmployerBody: React.FC<JobsAppEmployerBodyOwnProps> = (props): JSX.Element => {
    const classes = styles({});
    const jobsStore: JobsStore = props.jobsStore!;

    useEffect(() => {
        jobsStore.loadAdvertisements();
    }, [jobsStore]);

    return (
        <div className={classes.appBodyContent}>
            <Header 
                fetchAllAdsAfterPost={jobsStore.loadAdvertisements} />
            <JobsList ads={jobsStore.advertisements} />
        </div>
    );
}

export default inject('jobsStore')(observer(JobsAppEmployerBody));
