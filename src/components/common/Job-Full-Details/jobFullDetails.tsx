import * as React from 'react';

import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogContentText from '@material-ui/core/DialogContentText';
import MuiDialogActions from '@material-ui/core/DialogActions';
import { WithStyles, withStyles } from '@material-ui/core/styles';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';

import { Advertisement } from '../../../types/Advertisements';
import SaveJobButton from '../Job/saveJobButton';
import JobTitle from '../Job/jobTitle';
import JobDetail from '../Job/jobDetail';
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
                <MuiDialogContentText>
                    <span className={classes.dialogContentText}>{ad.description}</span>
                </MuiDialogContentText>
                <div className={classes.dialogDetails}>
                    <div className={classes.dialogDetailColumn}>
                        <JobDetail title="תקן" data={ad.standards.join('/')} />
                        <JobDetail title="כניסה לתפקיד" data={ad.entryDate ? ad.entryDate : 'מיידי'} />
                    </div>
                    <div className={classes.dialogDetailColumn}>
                        <JobDetail title="ותק דרוש" data={ad.seniority} />
                        <JobDetail 
                            title={`מוכר לדמ"ח`} 
                            data={
                                ad.isDamach 
                                    ? <CheckIcon className={classes.isDamachIcon} /> 
                                    : <CloseIcon className={classes.isntDamachIcon} />
                                }
                        />
                    </div>
                </div>
                <JobDetail title="מפרסם" data={`${ad.advertiser.displayName} - ${ad.advertiser.contact}`} />
            </MuiDialogContent>
        );
    }

    const renderDialogBottomActions = (): JSX.Element => {
        return (
            <MuiDialogActions className={classes.dialogActions}>
                <SaveJobButton width='100%' isFavorite={isFavorite} handleClick={onSave}/>
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