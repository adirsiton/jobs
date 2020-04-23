import * as React from 'react';
import { useState, useEffect, useRef } from 'react';

import { inject } from 'mobx-react';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

import styles from './HeaderStyle';
import PostNewJob from './PostNewJob/PostNewJob';

import { UserStore } from '../../../../store/UserStore';
import { getAllSelectOptions } from '../../../../server/ads';
import { AllSelectOptions } from '../../../../types/AllSelectOptions';

interface HeaderOwnProps {
    userStore?: UserStore;
    fetchAllAdsAfterPost: () => void;
}

const Header: React.FC<HeaderOwnProps> = (props): JSX.Element => {
    const { fetchAllAdsAfterPost } = props;
    const classes = styles({});
    const userStore: UserStore = props.userStore!;

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
        const FIRST_NAME = userStore.getUser.name;

        return (
            <div className={classes.headerTitle}>
                <Avatar className={classes.avatar}>
                    {userStore.getUserInitials}
                </Avatar>
                <div>
                    <Typography variant='h6' className={classes.headerTitleName}>
                        היי {FIRST_NAME}!
                    </Typography>
                    <Typography variant='h6'>
                        הגעת לאזור האישי שלך בג'ובניק
                    </Typography>
                </div>
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
        <>
            <div className={classes.root}>           
                {headerTitle()}
                {addNewPostButton()}
                { openAddDialog && allSelectOptions && <PostNewJob 
                    allSelectOptions={allSelectOptions}
                    fetchAllAdsAfterPost={fetchAllAdsAfterPost}
                    closeDialog={onCloseDialog} />}
            </div>
            <Typography 
                variant='h4'
                className={classes.jobsHeaderTitle}>
                התעניינו בתפקידים שלך
            </Typography>
        </>
    );
}

export default inject('userStore')(Header);