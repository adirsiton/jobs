import * as React from 'react';
import { useState, useEffect } from 'react';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';

import PostNewJob from './PostNewJob/PostNewJob';
import { LIGHT_COLOR_TEXT, NEW_JOB_COLOR } from '../../assets/projectJSS/Colors';
import JobsList from './JobsList/jobsList';

import { getAllAds, getAllSelectOptions } from '../../server/ads';
import { Advertisement } from '../../types/Advertisements';
import { AllSelectOptions } from '../../types/AllSelectOptions';

const styles = makeStyles({
    appBodyContent: {
        paddingLeft: '3vw',
        paddingRight: '2vw',
        paddingTop: '2vh',
        display: "flex",
        flexDirection: "column"
    },
    addNewPostButton: {
        color: LIGHT_COLOR_TEXT,
        backgroundColor: NEW_JOB_COLOR,
        "&:hover": {
            backgroundColor: NEW_JOB_COLOR,
        },
        "&:focus": {
            backgroundColor: NEW_JOB_COLOR,
        },
        alignSelf: "flex-end"
    }
});

const JobsAppBody: React.FC<{}> = (): JSX.Element => {
  const classes = styles({});
  const [ads, setAds] = useState<Advertisement[]>([]);
  const [openAddDialog, setOpenAddDialog] = useState<boolean>(false);
  const [allSelectOptions, setAllSelectOptions] = useState<AllSelectOptions | null>(null);

  const fetchAllAds = () => {
    getAllAds().then(data => setAds(data));
  }

  useEffect(() => {
      fetchAllAds();
  }, []);

  useEffect(() => {
      if (openAddDialog) {
          getAllSelectOptions()
            .then(allSelectOptions => setAllSelectOptions(allSelectOptions));
      }
  }, [openAddDialog]);

  return (
    <div className={classes.appBodyContent}>
        <Button
            className={classes.addNewPostButton}
            variant="contained"
            onClick={() => setOpenAddDialog(true)}
        >
            <Typography
                variant='h5'
            >
                + פרסום תפקיד חדש
            </Typography>
        </Button>
        <JobsList ads={ads} />
        { allSelectOptions && console.log(allSelectOptions)}
        { openAddDialog && allSelectOptions && <PostNewJob 
            allSelectOptions={allSelectOptions}
            fetchAfterAdd={fetchAllAds}
            closeDialog={() => setOpenAddDialog(false)} /> }
    </div>
  );
}

export default JobsAppBody;
