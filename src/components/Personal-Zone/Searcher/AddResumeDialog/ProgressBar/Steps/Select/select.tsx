import React from 'react';

import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import styles from '../StepsStyle';

interface SelectInputProps {
    dataItems: { id: number, name: string }[];
    selectedValue: number;
    setValue: (id: number) => void;
}

const SelectInput: React.FC<SelectInputProps> = (props): JSX.Element => {
    const classes = styles();
    const { dataItems, selectedValue, setValue } = props;

    const rolesMenuItems = dataItems.map(item =>
        <MenuItem
            key={item.id}
            value={item.id}
        >
            {item.name}
        </MenuItem>
    )

    return (
        <Select
            classes={{ root: classes.inputfield }}
            disabled={dataItems.length === 0}
            disableUnderline
            value={selectedValue}
            title={dataItems.find(item => item.id === selectedValue)?.name}
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
                (event: React.ChangeEvent<{ value: any }>) =>
                    setValue(event.target.value)
            }
        >
            {rolesMenuItems}
        </Select>

    );
}

export default SelectInput;