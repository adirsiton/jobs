import * as React from 'react';

import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Tooltip from '@material-ui/core/Tooltip';

import styles from './PostNewJobStyles';
import { DepartmentData, DepartmentsManager, Unit, Branch, Department } from '../../../types/Departments';

interface DepartmentInputProps {
    department: DepartmentData;
    setDepartment: (department: DepartmentData) => void;
    allUnitOptions: Unit[];
    allBranchOptions: Branch[];
    allDepartmentOptions: Department[];
}

const DepartmentInput: React.FC<DepartmentInputProps> = (props): JSX.Element => {
    const { department, setDepartment,
            allUnitOptions, allBranchOptions, allDepartmentOptions } = props;

    const classes = styles({});

    const departmentFieldMenuItems = (allUnitOptions: Unit[], allBranchOptions: Branch[], allDepartmentOptions: Department[], fieldName: string): JSX.Element[] => {
        return DepartmentsManager.getDepartmentSelectOptions(allUnitOptions, allBranchOptions, allDepartmentOptions, 
                                                             department, fieldName).map(value => 
            <MenuItem key={value.id} value={value.id}>
                {value.name}
            </MenuItem>
        );
    }

    const selectors: JSX.Element[] = DepartmentsManager.getDepartmentFields().map(fieldName => {
        const menuItems: JSX.Element[] = departmentFieldMenuItems(allUnitOptions, allBranchOptions, allDepartmentOptions, fieldName);
        const isDisabled: boolean = menuItems.length === 0;
        const tooltipTitle: string = DepartmentsManager.getSelectToolTip(isDisabled, fieldName);

        return (
            <div 
                className={classes.departmentField}
                key={fieldName}
            >
                <InputLabel
                    required={true}
                >
                    {DepartmentsManager.getDepartmentFieldDisplay(fieldName)}
                </InputLabel>
                <Tooltip 
                    title={tooltipTitle}
                >
                    <Select
                        disableUnderline
                        className={classes.select}
                        classes={{
                            icon: classes.selectIcon,
                            disabled: classes.selectDisabled
                        }}
                        disabled={isDisabled}
                        value={department[fieldName].id}
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
                        onChange={(event: React.ChangeEvent<{ name?: string | undefined; value: unknown; }>) => 
                            setDepartment(DepartmentsManager
                                .updateDepartment(allUnitOptions, allBranchOptions, allDepartmentOptions, 
                                                  department, fieldName, parseInt(String(event.target.value))))}
                    >
                        {menuItems}
                    </Select>
                </Tooltip>
            </div>
        )
    });
        
    return (
        <div className={classes.departmentFields}>
            {selectors}
        </div>
    );
}

export default DepartmentInput;