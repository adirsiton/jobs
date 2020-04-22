import * as React from 'react';
import { useState, useEffect, useRef } from 'react';

import { observer, inject } from 'mobx-react';

import Button from '@material-ui/core/Button';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Typography from '@material-ui/core/Typography';
import InputAdornment from '@material-ui/core/InputAdornment';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';

import styles from './HeaderStyle';
import PostNewJob from './PostNewJob/PostNewJob';

import { getAllSelectOptions } from '../../../server/ads';
import { AllSelectOptions } from '../../../types/AllSelectOptions';
import { UserStore } from '../../../store/UserStore';

interface HeaderOwnProps {
    fetchAllAdsAfterPost: () => void;
    searchValue: string;
    onSearchValueChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    userStore?: UserStore;
}

const Header: React.FC<HeaderOwnProps> = (props): JSX.Element => {
    const { fetchAllAdsAfterPost, onSearchValueChange, searchValue } = props;
    const classes = styles({});
    const userStore: UserStore = props.userStore!;

    const [allSelectOptions, setAllSelectOptions] = useState<AllSelectOptions | null>(null);
    const [openAddDialog, setOpenAddDialog] = useState<boolean>(false);
    const addButtonRef = useRef(null);

    // when closing dialog - blur the add button
    useEffect(() => {
        if (userStore.user.isRamad && !openAddDialog && addButtonRef) {
            // @ts-ignore
            addButtonRef.current.blur();
        }
    }, [openAddDialog, userStore.user.isRamad]);

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
        <div className={classes.root}>
            <OutlinedInput 
                placeholder="תראו לי ג'ובים לפי...."
                className={classes.searchBar}
                startAdornment={
                    <InputAdornment position='start'>
                        <FontAwesomeIcon icon={faFilter}/>
                    </InputAdornment>
                }
                onChange={onSearchValueChange}
                value={searchValue}
            />
            { userStore.user.isRamad &&
                <>    
                    <Button
                        className={classes.addNewPostButton}
                        variant="contained"
                        onClick={() => setOpenAddDialog(true)}
                        ref={addButtonRef}
                    >
                        <Typography
                            variant='h6'
                        >
                            + פרסום תפקיד חדש
                        </Typography>
                    </Button>
                    { openAddDialog && allSelectOptions && <PostNewJob 
                        allSelectOptions={allSelectOptions}
                        fetchAllAdsAfterPost={fetchAllAdsAfterPost}
                        closeDialog={onCloseDialog} />}
                </>
            }
            </div>
    );
}

export default inject('userStore')(observer(Header));