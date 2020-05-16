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
import { Role } from '../../../../types/Role';

interface FilterAdsDialog {
    setOpenFilterAdDialog: (openFilterAadDialog: boolean) => void;
    toggleFilter: (e: React.ChangeEvent<HTMLInputElement>) => void;
    adsStore?: AdsStore;
    activeFilterRolesIds: number[];
    allRoles: Role[];
}

const FilterAdsDialog: React.FC<FilterAdsDialog> = (props): JSX.Element => {
    const { setOpenFilterAdDialog, toggleFilter, activeFilterRolesIds, allRoles } = props;
    const classes = styles();

    const isChecked = (roleId: number) => activeFilterRolesIds.lastIndexOf(roleId) !== -1;

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
                    {allRoles.map((role) => {
                        return (
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        onChange={toggleFilter}
                                        checked={isChecked(role.id)}
                                        classes={{ root: classes.checkBox }}
                                        id={role.id.toString()}
                                    />
                                }
                                key={role.id}
                                id={role.id.toString()}
                                label={role.name}
                                name={role.initials}
                            />
                        );
                    })}
                </FormGroup>
            </DialogActions>
        </Dialog>
    );
};

export default FilterAdsDialog;
