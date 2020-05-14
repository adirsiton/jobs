import * as React from 'react';
import { useEffect, useState } from 'react';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Typography from '@material-ui/core/Typography';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import { DialogTitle } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';

import styles from './FilterAdsDialogStyle';
import { AdsStore } from '../../../../store/AdvertisementStore';

interface FilterAdsDialog {
    setOpenFilterAdDialog: (openFilterAadDialog: boolean) => void;
    toggleFilter: (e: React.ChangeEvent<HTMLInputElement>) => void;
    adsStore?: AdsStore;
    activeFilterRoles: string[];
}

const FilterAdsDialog: React.FC<FilterAdsDialog> = (props): JSX.Element => {
    const { setOpenFilterAdDialog, toggleFilter, activeFilterRoles } = props;
    const classes = styles();

    const isChecked = (roleInitials: string) => activeFilterRoles.lastIndexOf(roleInitials) !== -1;

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
            <DialogContent>
                <Typography variant="h6" className={classes.dialogTitleText}>
                    מקצוע
                </Typography>
            </DialogContent>
            <DialogActions className={classes.dialogActions}>
                <FormGroup row className={classes.filterIconsRow}>
                    <FormControlLabel
                        control={
                            <Checkbox
                                onChange={toggleFilter}
                                checked={isChecked('DEV')}
                                classes={{ root: classes.checkBox }}
                            />
                        }
                        label="תוכניתן"
                        name="DEV"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                onChange={toggleFilter}
                                checked={isChecked('TL')}
                                classes={{ root: classes.checkBox }}
                            />
                        }
                        label="ראש צוות"
                        name="TL"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                onChange={toggleFilter}
                                checked={isChecked('PM')}
                                classes={{ root: classes.checkBox }}
                            />
                        }
                        label="מנהל מוצר"
                        name="PM"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                onChange={toggleFilter}
                                checked={isChecked('PO')}
                                classes={{ root: classes.checkBox }}
                            />
                        }
                        label="מנהל פרוייקט"
                        name="PO"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                onChange={toggleFilter}
                                checked={isChecked('ARCH')}
                                classes={{ root: classes.checkBox }}
                            />
                        }
                        label="ארכיטקט"
                        name="ARCH"
                    />
                </FormGroup>
            </DialogActions>
        </Dialog>
    );
};

export default FilterAdsDialog;
