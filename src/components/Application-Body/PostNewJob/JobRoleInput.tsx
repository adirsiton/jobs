import * as React from 'react';

import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';

import styles from './PostNewJobStyles';
import { Role, ROLES } from '../../../types/Role';

interface JobRoleInputProps {
    role: Role;
    setRole: (role: Role) => void;
}

const JobRoleInput: React.FC<JobRoleInputProps> = (props): JSX.Element => {
    const { role, setRole } = props;

    const classes = styles({});

    const menuItems = ROLES.map(jobRole => 
        <MenuItem
            key={jobRole}
            value={jobRole} 
        >
            {jobRole}
        </MenuItem>
    );
    
    return (
        <div className={classes.jobRole}>
            <InputLabel
                required={true}
            >
                מקצוע
            </InputLabel>
            <div 
                className={classes.jobRequirementsMargin}
            >
                <Select
                    disableUnderline
                    className={classes.roleSelect}
                    classes={{
                        icon: classes.selectIcon,
                    }}
                    value={role}
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
                        setRole(event.target.value)}
                >
                    {menuItems}
                </Select>
            </div>
        </div>
    );
}

export default JobRoleInput;