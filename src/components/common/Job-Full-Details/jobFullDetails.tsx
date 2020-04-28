import * as React from 'react';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import Typography from '@material-ui/core/Typography';
import { WithStyles, withStyles } from '@material-ui/core/styles';
import { Advertisement } from '../../../types/Advertisements';
import SaveJobButton from '../Job/saveJobButton';
import JobTitle from '../Job/jobTitle';
import styles from '../Job/jobStyles';


interface JobFullDetailsData {
    isOpen: boolean;
    setIsOpen: (shouldOpen: boolean) => void;
    ad: Advertisement;
    isFavorite: boolean;
    isRamadView: boolean;
    onSave: () => void;
}

type JobFullDetailsProps = JobFullDetailsData & WithStyles<typeof styles>;

const JobFullDetails: React.FC<JobFullDetailsProps> = (props): JSX.Element => {
    const {classes, isOpen, setIsOpen, ad, isRamadView, isFavorite, onSave} = props;

    const handleClose = (): void => {
        setIsOpen(false);
    };

    const renderDialogTitle = (): JSX.Element => {
        return (
            <MuiDialogTitle disableTypography className={classes.dialogHeader}>
                <JobTitle ad={ad} showLocation={false} />
            </MuiDialogTitle>
        );
    };

    const renderDialogContent = (): JSX.Element => {
        return (
            <MuiDialogContent>
                <span>{ad.description}</span>
            </MuiDialogContent>
        );
    }

    const renderDialogBottomActions = (): JSX.Element => {
        return (
            <MuiDialogActions className={classes.dialogActions}>
                <SaveJobButton isFavorite={isFavorite} handleClick={onSave}/>
            </MuiDialogActions>
        );
    }

    return (
        <Dialog
            className={classes.dialog}
            open={isOpen}
            onClose={handleClose}
            fullWidth={true}
            maxWidth="sm"
        >
            {renderDialogTitle()}
            {renderDialogContent()}
            {!isRamadView && renderDialogBottomActions()}
        </Dialog>
    );
};

export default withStyles(styles)(JobFullDetails);