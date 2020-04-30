import * as React from 'react';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Typography from '@material-ui/core/Typography';
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAlt';

import styles from './closeJobDialogStyle';

interface CloseJobDialog {
    closeDialog: () => void;
    closeAd: () => void;
}

const CloseJobDialog: React.FC<CloseJobDialog> = (props): JSX.Element => {
    const { closeDialog, closeAd } = props;
    const classes = styles();

    return (
        <Dialog
            open={true}
            onClose={closeDialog}
        >
            <DialogContent className={classes.dialogContent}>
                <SentimentSatisfiedAltIcon className={classes.icon} />
                <Typography variant="h5" className={classes.dialogTitleText}>
                    אפשר להגיד בשעה טובה?
                </Typography>
                <Typography variant="subtitle1" className={classes.dialogText}>
                    אנחנו ממליצים לך לסגור תפקיד רק אם הוא אויש או כשהוא כבר לא רלוונטי,
                    מרגע סגירת התפקיד לא נפרסם אותו להתעניינות יותר בג'ובניק
                </Typography>
            </DialogContent>
            <DialogActions className={classes.dialogActions}>
                <Button className={classes.cancelButton} onClick={closeDialog}>
                    ביטול
                </Button>
                <Button 
                    className={classes.confirmButton}
                    variant='outlined' 
                    // onClick={closeDialog} //TODO call thecloseAd function
                    onClick={closeAd} //TODO call thecloseAd function
                    autoFocus
                >
                    אחלה, סגרו לי
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default CloseJobDialog;