import * as React from 'react';
import { useState, useEffect, useRef } from 'react';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import styles from './HeaderStyle';
import PostNewJob from './PostNewJob/PostNewJob';

import { getAllSelectOptions } from '../../../../server/ads';
import { AllSelectOptions } from '../../../../types/AllSelectOptions';

interface HeaderOwnProps {
    fetchAllAdsAfterPost: () => void;
}

const Header: React.FC<HeaderOwnProps> = (props): JSX.Element => {
    const { fetchAllAdsAfterPost } = props;
    const classes = styles({});

    const [allSelectOptions, setAllSelectOptions] = useState<AllSelectOptions | null>(null);
    const [openAddDialog, setOpenAddDialog] = useState<boolean>(true/*TODO:false*/);
    const addButtonRef = useRef(null);

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

    const headerTitle = (): JSX.Element => {
        return (
            <div>
                <Typography>
                    היי 
                </Typography>
                <Typography>
                    הגעת לאזור האישי שלך בג'ובניק
                </Typography>
            </div>
        );
    }

    const addNewPostButton = (): JSX.Element => {
        return (
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
        );
    }

    return (
        <div className={classes.root}>           
            {headerTitle()}
            {addNewPostButton()}
            { openAddDialog && allSelectOptions && <PostNewJob 
                allSelectOptions={allSelectOptions}
                fetchAllAdsAfterPost={fetchAllAdsAfterPost}
                closeDialog={onCloseDialog} />}
        </div>
    );
}

export default Header;