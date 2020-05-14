import * as React from 'react';
import { useState, useEffect } from 'react';

import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';

import FilterAdsDialog from './filter-ads-dialog/FilterAdsDialog';
import styles from './HeaderStyle';

interface HeaderOwnProps {
    searchValue: string;
    onSearchValueChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Header: React.FC<HeaderOwnProps> = (props): JSX.Element => {
    const { onSearchValueChange, searchValue } = props;

    const classes = styles({});

    const [openFilterAdDialog, setOpenFilterAdDialog] = useState<boolean>(false);

    useEffect(() => {}, [openFilterAdDialog]);

    return (
        <div className={classes.root}>
            <OutlinedInput
                placeholder="תראו לי ג'ובים לפי...."
                className={classes.searchBar}
                classes={{
                    input: classes.searchBarText,
                }}
                startAdornment={
                    <InputAdornment position="start">
                        <IconButton>
                            <FontAwesomeIcon icon={faFilter} onClick={() => setOpenFilterAdDialog(true)} />
                            {openFilterAdDialog && <FilterAdsDialog setOpenFilterAdDialog={setOpenFilterAdDialog} />}
                        </IconButton>
                    </InputAdornment>
                }
                onChange={onSearchValueChange}
                value={searchValue}
            />
        </div>
    );
};

export default Header;
