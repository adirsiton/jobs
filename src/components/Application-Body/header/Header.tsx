import * as React from 'react';
import { useState, useEffect, useRef } from 'react';
import { Button, OutlinedInput, InputAdornment, ButtonProps } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';

import styles from './HeaderStyle';
import PostNewJob from './PostNewJob/PostNewJob';

interface HeaderOwnProps {
    searchValue: string;
    onSearchValueChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Header: React.FC<HeaderOwnProps> = (props): JSX.Element => {
    const { onSearchValueChange, searchValue } = props;
    const classes = styles({});

    const [openAddDialog, setOpenAddDialog] = useState<boolean>(false);
    const addButtonRef = useRef(null);

    // when closing dialog - blur the add button
    useEffect(() => {
        if (!openAddDialog && addButtonRef) {
            // @ts-ignore
            addButtonRef.current.blur();
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
                
            <Button
                className={classes.addNewPostButton}
                variant="contained"
                onClick={() => setOpenAddDialog(true)}
                ref={addButtonRef}>
                + פרסום תפקיד חדש
            </Button>
            {openAddDialog && <PostNewJob closeDialog={onCloseDialog} />}
        </div>
    );
}

export default Header;