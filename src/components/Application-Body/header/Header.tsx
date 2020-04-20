import * as React from 'react';

import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';

import styles from './HeaderStyle';

interface HeaderOwnProps {
    searchValue: string;
    onSearchValueChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Header: React.FC<HeaderOwnProps> = (props): JSX.Element => {
    const { onSearchValueChange, searchValue } = props;
    const classes = styles({});

    return (
        <div className={classes.root}>
            <OutlinedInput 
                placeholder="תראו לי ג'ובים לפי...."
                className={classes.searchBar}
                classes={{
                    input: classes.searchBarText
                }}
                startAdornment={
                    <InputAdornment position='start'>
                        <FontAwesomeIcon icon={faFilter}/>
                    </InputAdornment>
                }
                onChange={onSearchValueChange}
                value={searchValue}
            />
        </div>
    );
}

export default Header;