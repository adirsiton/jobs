import * as React from 'react';
import { useState } from 'react';

import Button from '@material-ui/core/Button';
import makeStyles from '@material-ui/core/styles/makeStyles';

import PostNewJob from './PostNewJob/PostNewJob';
import { LIGHT_COLOR_TEXT, NEW_JOB_COLOR } from '../../assets/projectJSS/Colors';
import { Typography } from '@material-ui/core';

const styles = makeStyles({
    appBodyContent: {
        paddingLeft: '3vw',
        paddingRight: '2vw',
        paddingTop: '2vh',
    },
    addNewPostButton: {
        color: `${LIGHT_COLOR_TEXT}`,
        backgroundColor: `${NEW_JOB_COLOR}`,
        "&:hover": {
            backgroundColor: `${NEW_JOB_COLOR}`,
        },
        "&:focus": {
            backgroundColor: `${NEW_JOB_COLOR}`,
        },
        float: "left"
    }
});

const JobsAppBody: React.FC<{}> = (): JSX.Element => {
  const classes = styles({});
  const [openAddDialog, setOpenAddDialog] = useState<boolean>(false);

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
        { openAddDialog && <PostNewJob closeDialog={() => setOpenAddDialog(false)} /> }
    </div>
  );
}

export default JobsAppBody;
