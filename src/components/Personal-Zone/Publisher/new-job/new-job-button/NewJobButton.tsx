import * as React from 'react';
import { useState, useRef, useEffect } from 'react';

import { observer, inject } from 'mobx-react';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import makeStyles from "@material-ui/core/styles/makeStyles";

import { AllSelectOptions } from '../../../../../types/AllSelectOptions';
import { getAllSelectOptions } from '../../../../../server/ads';
import { LIGHT_COLOR_TEXT, THEME_COLOR } from '../../../../../assets/projectJSS/Colors';
import PostNewJobDialog from '../new-job-form/PostNewJob';
import { AdsStore } from '../../../../../store/AdvertisementStore';

const styles = makeStyles({
    addNewPostButton: {
        color: LIGHT_COLOR_TEXT,
        backgroundColor: THEME_COLOR,
        "&:hover": {
            backgroundColor: `#00d699`,
        },
        "&:focus": {
            backgroundColor: `#00eba8`,
        },
        minWidth: '10ch',
        auto: 'left'
    },
});

interface NewJobButtonOwnProps {
    adsStore?: AdsStore;
};

const NewJobButton: React.FC<NewJobButtonOwnProps> = (props) => {
    const [allSelectOptions, setAllSelectOptions] = useState<AllSelectOptions | null>(null);
    const [openAddDialog, setOpenAddDialog] = useState<boolean>(false);
    const addButtonRef = useRef(null);
    const adsStore: AdsStore = props.adsStore!;

    const classes = styles();
    
    // when closing dialog - blur the add button
    useEffect(() => {
        if (!openAddDialog && addButtonRef) {
            // @ts-ignore
            addButtonRef.current.blur();
        }
    }, [openAddDialog]);

    useEffect(() => {
        if (openAddDialog) {
            getAllSelectOptions()
              .then(allSelectOptions => setAllSelectOptions(allSelectOptions));
        }
    }, [openAddDialog]);
    

    const onCloseDialog = (): void => {
        setOpenAddDialog(false);
    }

    return (
        <>
            <Button
                className={classes.addNewPostButton}
                variant="contained"
                onClick={() => setOpenAddDialog(true)}
                ref={addButtonRef}
            >
                <Typography
                    variant='h5'
                >
                    + פרסום תפקיד חדש 
                </Typography>
            </Button>
            { (openAddDialog && allSelectOptions) && 
                <PostNewJobDialog 
                    allSelectOptions={allSelectOptions}
                    fetchAllAdsAfterPost={adsStore.loadAdvertisements}
                    closeDialog={onCloseDialog} 
                />
            }
        </>
    );
}

export default inject('adsStore')(observer(NewJobButton));
