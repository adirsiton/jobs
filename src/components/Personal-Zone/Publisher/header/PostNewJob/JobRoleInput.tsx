import * as React from 'react';

import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';

import styles from './PostNewJobStyles';
import { Role } from '../../../../../types/Role';

interface JobRoleInputProps {
    role: Role;
    setRole: (role: Role) => void;
    allRoleOptions: Role[];
}

const JobRoleInput: React.FC<JobRoleInputProps> = (props): JSX.Element => {
    const { role, setRole, allRoleOptions } = props;

    const classes = styles({});

    const menuItems = allRoleOptions.map(roleOption => 
        <MenuItem
            key={roleOption.id}
            value={roleOption.id} 
        >
            {roleOption.name}
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
                    value={role.id}
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
                    onChange={
                        (event: React.ChangeEvent<{ name?: string | undefined; value: any/*NoOtherWay*/; }>) =>
                            setRole(allRoleOptions.find(roleOption => event.target.value === roleOption.id)!)
                    }
                >
                    {menuItems}
                </Select>
            </div>
        </div>
    );
}

export default JobRoleInput;