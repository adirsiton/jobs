import * as React from 'react';

import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';

import styles from './PostNewJobStyles';
import { BaseLocationManager, BaseLocation } from '../../../types/BaseLocation';

interface JobBaseLocationInput {
    baseLocation: BaseLocation; // ENUM?
    setBaseLocation: (baseLocation: BaseLocation) => void;
}

const JobBaseLocationInput: React.FC<JobBaseLocationInput> = (props): JSX.Element => {
    const { baseLocation, setBaseLocation } = props;

    const classes = styles({});

    const menuItems: JSX.Element[] = BaseLocationManager.getAllBaseLocations().map(value => 
        <MenuItem key={value} value={value}>
            {value}
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
                value={baseLocation}
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
                    setBaseLocation(event.target.value)}
            >
                {menuItems}
            </Select>
        </div>
    );
}

export default JobBaseLocationInput;