import * as React from 'react';

import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';

import styles from './PostNewJobStyles';
import { BaseLocation } from '../../../../../types/BaseLocation';

interface JobBaseLocationInput {
    baseLocation: BaseLocation;
    setBaseLocation: (baseLocation: BaseLocation) => void;
    allBaseLocationOptions: BaseLocation[];
}

const JobBaseLocationInput: React.FC<JobBaseLocationInput> = (props): JSX.Element => {
    const { baseLocation, setBaseLocation, allBaseLocationOptions } = props;

    const classes = styles({});

    const menuItems: JSX.Element[] = allBaseLocationOptions.map(baseLocationOption => 
        <MenuItem 
            key={baseLocationOption.id}
            value={baseLocationOption.id}
        >
            {baseLocationOption.name}
        </MenuItem>
    );

    return (
        <div 
            className={classes.baseLocation}
        >
            <InputLabel
                required={true}
                classes={{
                    asterisk: classes.baseLocationLabelText
                }}
            >
                בסיס
            </InputLabel>
            <Select
                disableUnderline
                className={classes.select}
                classes={{
                    icon: classes.selectIcon,
                }}
                value={baseLocation.id}
                MenuProps={{
                    anchorOrigin: {
                        vertical: "bottom",
                        horizontal: "center"
                    },
                    transformOrigin: {
                        vertical: "top",
                        horizontal: "center"
                    },
                    getContentAnchorEl: null
                }}
                onChange={(event: React.ChangeEvent<{ name?: string | undefined; value: any/*NoOtherWay*/; }>) => 
                    setBaseLocation(allBaseLocationOptions.find(baseLocationOption => event.target.value === baseLocationOption.id)!)}
            >
                {menuItems}
            </Select>
        </div>
    );
}

export default JobBaseLocationInput;