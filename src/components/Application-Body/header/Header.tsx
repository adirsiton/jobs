import * as React from 'react';
import { useState } from 'react';
import { Button, OutlinedInput, InputAdornment } from '@material-ui/core';
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
                onClick={() => setOpenAddDialog(true)}>
                + פרסום תפקיד חדש
            </Button>
            {openAddDialog && <PostNewJob closeDialog={() => setOpenAddDialog(false)} />}
        </div>
    );
}

export default Header;