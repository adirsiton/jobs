import * as React from 'react';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Typography from '@material-ui/core/Typography';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';

import styles from './FilterAdsDialogStyle';
import { DialogTitle } from '@material-ui/core';

interface FilterAdsDialog {
    setOpenFilterAdDialog: (openFilterAadDialog: boolean) => void;
}

const FilterAdsDialog: React.FC<FilterAdsDialog> = (props): JSX.Element => {
    const { setOpenFilterAdDialog } = props;
    const classes = styles();

    return (
        <Dialog
            open={true}
            fullWidth={true}
            maxWidth={'lg'}
            classes={{ scrollPaper: classes.scrollPaper }}
            BackdropProps={{ classes: { root: classes.dialog } }}
            onClose={() => setOpenFilterAdDialog(false)}
        >
            <DialogTitle className={classes.dialogTitleContainer}>
                <FontAwesomeIcon icon={faFilter} />
                <span className={classes.dialogTitle}>תראה לי ג'ובים לפי....</span>
            </DialogTitle>
            <DialogContent className={classes.dialogContent}>
                <Typography variant="h6" className={classes.dialogTitleText}>
                    מקצוע
                </Typography>
            </DialogContent>
            <DialogActions className={classes.dialogActions}>
                <FormGroup row className={classes.filterIconsRow}>
                    <FormControlLabel control={<Checkbox classes={{ root: classes.checkBox }} />} label="תוכניתן" />
                    <FormControlLabel control={<Checkbox classes={{ root: classes.checkBox }} />} label="ראש צוות" />
                    <FormControlLabel control={<Checkbox classes={{ root: classes.checkBox }} />} label="מנהל מוצר" />
                    <FormControlLabel control={<Checkbox classes={{ root: classes.checkBox }} />} label="מנהל פרוייקט" />
                    <FormControlLabel control={<Checkbox classes={{ root: classes.checkBox }} />} label="ארכיטקט" />
                </FormGroup>
            </DialogActions>
        </Dialog>
    );
};

export default FilterAdsDialog;
