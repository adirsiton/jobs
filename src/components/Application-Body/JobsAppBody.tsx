import * as React from 'react';
import { useEffect } from 'react';

import { observer, inject } from 'mobx-react';

import makeStyles from '@material-ui/core/styles/makeStyles';

import JobsList from './JobsList/jobsList';
import { JobsStore } from '../../store/JobsStore';
import Header from './header/Header';

const styles = makeStyles({
    appBodyContent: {
        paddingLeft: '2vw',
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

    useEffect(() => {
        jobsStore.loadAdvertisements();
    }, []);

    return (
        <div className={classes.appBodyContent}>
            <Header/>
            <JobsList ads={jobsStore.advertisements} />
        </div>
    );
}

export default inject('jobsStore')(observer(JobsAppBody));
