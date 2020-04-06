import * as React from 'react';
import { useState, useEffect } from 'react';

import makeStyles from '@material-ui/core/styles/makeStyles';

import JobsList from './JobsList/jobsList';

import { getAllAds } from '../../server/ads';
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

const JobsAppBody: React.FC<{}> = (): JSX.Element => {
    const classes = styles({});
    const [ads, setAds] = useState<any>([]);
    

    useEffect(() => {
        getAllAds().then(data =>
            setAds(data)
        );
    }, []);

    return (
        <div className={classes.appBodyContent}>
            <Header/>
            <JobsList ads={ads} />
        </div>
    );
}

export default JobsAppBody;
