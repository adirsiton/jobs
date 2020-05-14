import React from 'react';
import { useState, useEffect } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import { getAllSelectOptions } from '../../../../server/ads';
import { AllSelectOptions } from '../../../../types/AllSelectOptions';
import ProgressBar from './ProgressBar/ProgressBar';
import styles from './ResumeDialogStyle';

interface AddResumeDialogProps {
    isOpen: boolean;
    closeDialog: () => void;
}

const AddResumeDialog: React.FC<AddResumeDialogProps> = (
    props
): JSX.Element => {
    const { isOpen, closeDialog } = props;
    const [
        allSelectOptions,
        setAllSelectOptions,
    ] = useState<AllSelectOptions | null>(null);

    const classes = styles();

    useEffect(() => {
        getAllSelectOptions().then((allSelectOptions) =>
            setAllSelectOptions(allSelectOptions)
        );
    }, []);

    return (
        <Dialog
            classes={{ paperFullWidth: classes.dialog }}
            fullWidth={true}
            open={isOpen}
            onClose={closeDialog}
        >
            <DialogTitle classes={{ root: classes.title }}>
                הוספת הרזומה שלך
            </DialogTitle>
            <DialogContent>
                <ProgressBar
                    allSelectOptions={allSelectOptions}
                    closeDialog={closeDialog}
                />
            </DialogContent>
        </Dialog>
    );
};

export default AddResumeDialog;
