import * as React from 'react';
import { useEffect } from 'react';

import { observer, inject } from 'mobx-react';

import makeStyles from '@material-ui/core/styles/makeStyles';

import { UserStore } from '../../../store/UserStore';
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
    userStore?: UserStore;
}

const JobsAppEmployerBody: React.FC<JobsAppEmployerBodyOwnProps> = (props): JSX.Element => {
    const classes = styles({});
    const userStore: UserStore = props.userStore!;

    useEffect(() => {
        userStore.loadRamadAds();
    }, [userStore]);

    const showEmptyDisplay: boolean = userStore.getRamadAds.length === 0;
    return (
        <div className={classes.appBodyContent}>
            <Header withAddButton={!showEmptyDisplay}/> {/*There are ads, show the addButton*/}
            { showEmptyDisplay
                ? <EmptyPublisherDisplay />
                : <JobsList ads={userStore.getRamadAds} />
            }
        </div>
    );
}

export default inject('userStore')(observer(JobsAppEmployerBody));
