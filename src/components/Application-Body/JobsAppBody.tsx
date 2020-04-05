import * as React from 'react';
import { useState, useEffect } from 'react';

import Button from '@material-ui/core/Button';
import makeStyles from '@material-ui/core/styles/makeStyles';

import PostNewJob from './PostNewJob/PostNewJob';
import JobsList from './JobsList/jobsList';

import { getAllAds } from '../../server/ads';

const dialogThemeColor = "rgb(89,89,89)";
const styles = makeStyles({
    appBodyContent: {
        paddingLeft: '2vw',
        paddingRight: '2vw',
        paddingTop: '2vh',
        display: "flex",
        flexDirection: "column"
    },
    addNewPostButton: {
        color: "white",
        backgroundColor: `${dialogThemeColor}`,
        "&:hover": {
            backgroundColor: `${dialogThemeColor}`,
        },
        "&:focus": {
            backgroundColor: `${dialogThemeColor}`,
        },
        alignSelf: "flex-end"
    }
});

const JobsAppBody: React.FC<{}> = (): JSX.Element => {
    const classes = styles({});
    const [ads, setAds] = useState<any>([]);
    const [openAddDialog, setOpenAddDialog] = useState<boolean>(false);

    useEffect(() => {
        getAllAds().then(data =>
            setAds(data)
        );
    }, []);

    return (
        <div className={classes.appBodyContent}>
            <Button
                className={classes.addNewPostButton}
                variant="contained"
                onClick={() => setOpenAddDialog(true)}>
                + פרסום תפקיד חדש
            </Button>
            <JobsList ads={ads} />
            {openAddDialog && <PostNewJob closeDialog={() => setOpenAddDialog(false)} />}
        </div>
    );
}

export default JobsAppBody;
