import * as React from 'react';

import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';

import styles from './PostNewJobStyles';
import { DepartmentData, DepartmentsManager } from '../../../types/Departments';


interface DepartmentInputProps {
    department: DepartmentData;
    setDepartment: (department: DepartmentData) => void;
}

const DepartmentInput: React.FC<DepartmentInputProps> = (props): JSX.Element => {
    const { department, setDepartment } = props;

    const classes = styles({});


    const getDepartmentHeader = (): JSX.Element => {
        return (
            <div className={classes.departmentHeader}>
                <Typography variant="caption">
                    שיוך
                </Typography>
                <div className={classes.dashLine} />
            </div>
        );
    }

    const departmentFieldMenuItems = (fieldName: string): JSX.Element[] => {
        return DepartmentsManager.getDepartmentSelectOptions(department, fieldName).map(value => 
            <MenuItem key={value} value={value}>
                {value}
            </MenuItem>
        );
    }

    const getDepartmentFields = (): JSX.Element => {
        const selectors: JSX.Element[] = DepartmentsManager.getDepartmentFields().map(fieldName => {
            const menuItems: JSX.Element[] = departmentFieldMenuItems(fieldName);
            const isDisabled: boolean = menuItems.length === 0;
            const tooltipTitle: string = DepartmentsManager.getSelectToolTip(isDisabled, fieldName);

            return (
                <div 
                    className={classes.departmentField}
                    key={fieldName}
                >
                    <Typography>
                        {DepartmentsManager.getDepartmentFieldDisplay(fieldName)}
                    </Typography>
                    <Tooltip 
                        title={tooltipTitle}
                        classes={{ 
                            tooltip: classes.tooltip
                        }}
                    >
                        <Select
                            className={classes.select}
                            classes={{
                                icon: classes.selectIcon,
                                disabled: classes.selectDisabled
                            }}
                            disabled={isDisabled}
                            value={department[fieldName]}
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
                                setDepartment(DepartmentsManager.updateDepartment(department, fieldName, String(event.target.value)))}
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

    return (
        <> 
            {getDepartmentHeader()}
            {getDepartmentFields()}
        </>
    );
}

export default DepartmentInput;