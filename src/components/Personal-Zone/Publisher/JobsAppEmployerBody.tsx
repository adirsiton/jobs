import * as React from 'react';
import { useState, useEffect } from 'react';

import { observer, inject } from 'mobx-react';

import makeStyles from '@material-ui/core/styles/makeStyles';

import { JobsStore } from '../../../store/JobsStore';
import JobsList from './JobsList/jobsList';
import Header from './header/Header';
import EmptyPublisherDisplay from './empty-display/EmptyDisplay';

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
    const hasResume = false; // later use from server

    useEffect(() => {
        jobsStore.loadAdvertisements();
    }, [jobsStore]);

    return (
        <div className={classes.appBodyContent}>
            <Header 
                fetchAllAdsAfterPost={jobsStore.loadAdvertisements} />
            { hasResume 
                ? <JobsList ads={jobsStore.advertisements} />
                : <EmptyPublisherDisplay />
            }
        </div>
    );
}

export default inject('jobsStore')(observer(JobsAppEmployerBody));
