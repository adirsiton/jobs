import React from 'react';
import { useState, useEffect } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

import { getAllSelectOptions } from '../../../server/ads';
import { AllSelectOptions } from '../../../types/AllSelectOptions';
import ProgressBar from './ProgressBar/ProgressBar';
import styles from './ResumeDialogStyle';

interface AddResumeDialogProps {
    isOpen: boolean;
    closeDialog: () => void;
}

const AddResumeDialog: React.FC<AddResumeDialogProps> = (props): JSX.Element => {
    const { isOpen, closeDialog } = props;
    const [allSelectOptions, setAllSelectOptions] = useState<AllSelectOptions | null>(null);

    const classes = styles();

    useEffect(() => {
        getAllSelectOptions()
            .then(allSelectOptions => setAllSelectOptions(allSelectOptions));
    }, []);

    return (
        <Dialog
            classes={{ paperFullWidth: classes.dialog }}
            fullWidth={true}
            open={isOpen}
            onClose={closeDialog} >
            <DialogTitle classes={{ root: classes.title }}>
                הוספת הרזומה שלך
                </DialogTitle>
            <DialogContent>
                <ProgressBar allSelectOptions={allSelectOptions} />
            </DialogContent>
        </Dialog>
    );
}

export default AddResumeDialog;