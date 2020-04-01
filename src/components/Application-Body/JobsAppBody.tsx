import * as React from 'react';
import { useState } from 'react';

import Button from '@material-ui/core/Button';
import makeStyles from '@material-ui/core/styles/makeStyles';

import PostNewJob from './PostNewJob/PostNewJob';

const dialogThemeColor = "rgb(89,89,89)";
const styles = makeStyles({
    appBodyContent: {
        paddingLeft: '2vw',
        paddingRight: '2vw',
        paddingTop: '2vh',
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
        float: "left"
    }
});

const JobsAppBody: React.FC<{}> = (): JSX.Element => {
  const classes = styles({});
  const [openAddDialog, setOpenAddDialog] = useState<boolean>(true/*false*/); // TODO: Change to false when done, comfortable for develop of feature to be true

  return (
    <div className={classes.appBodyContent}>
        <Button
            className={classes.addNewPostButton}
            variant="contained"
            onClick={() => setOpenAddDialog(true)}>
                + פרסום תפקיד חדש
        </Button>
        { openAddDialog && <PostNewJob closeDialog={() => setOpenAddDialog(false)} /> }
    </div>
  );
}

export default JobsAppBody;
