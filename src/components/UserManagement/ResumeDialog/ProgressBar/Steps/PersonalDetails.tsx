import React from 'react';
import { useState, useEffect } from 'react';

import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';

import { Role } from '../../../../../types/Role';
import { Standard } from '../../../../../types/Standard';
import styles from './StepsStyle';


interface PersonalDetailsStepProps {
    roles: Role[];
    ranks: Standard[];
}

const PersonalDetailsStep: React.FC<PersonalDetailsStepProps> = (props): JSX.Element => {
    const classes = styles();
    const { roles, ranks } = props;
    const [selectedRole, setSelectedRole] = useState<number>(roles[0].id);
    const [selectedRank, setSelectedRank] = useState<number>(ranks[0].id);

    const rolesMenuItems = roles.map(role =>
        <MenuItem
            key={role.id}
            value={role.id}
        >
            {role.name}
        </MenuItem>
    )
    const rolesSelect = <Select
        classes={{ root: classes.inputfield }}
        disableUnderline
        value={selectedRole}
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
                setSelectedRole(event.target.value)
        }
    >
        {rolesMenuItems}
    </Select>

    const ranksMenuItems = ranks.map(rank =>
        <MenuItem
            key={rank.id}
            value={rank.id}
        >
            {rank.name}
        </MenuItem>
    )
    const ranksSelect = <Select
        classes={{ root: classes.inputfield }}
        disableUnderline
        value={selectedRank}
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
                setSelectedRank(event.target.value)
        }
    >
        {ranksMenuItems}
    </Select>


    const textInput = (disabled: boolean, text = "", placeHolder = ""): JSX.Element => {
        return <TextField classes={{ root: classes.inputfield }}
            disabled={disabled}
            value={text} />
    }

    const inputDiv = (title: string, input: JSX.Element): JSX.Element => {
        return (
            <div className={classes.inputDiv}>
                <InputLabel classes={{ root: classes.label, asterisk: classes.asterisk }} required={true}> {title} </InputLabel>
                {input}
            </div>
        )
    }

    return (
        <div className={classes.personalDetailsContainer}>
            {inputDiv("שם", textInput(true, "אילי מלאכי", ""))}
            {inputDiv("מ.א", textInput(true, "8485303", ""))}
            {inputDiv("תפקיד", rolesSelect)}
            {inputDiv("דרגה", ranksSelect)}
            <div className={classes.inputDiv}>
                <InputLabel classes={{ asterisk: classes.asterisk }} required={true}>
                    טלפון ליצירת קשר
                </InputLabel>
                <TextField
                    InputProps={{
                        disableUnderline: true
                    }}
                    className={`${classes.inputfield} ${classes.phoneInput}`}
                    // classes={{ root: [, ] }} 
                    />
            </div>

        </div>
    );
}

export default PersonalDetailsStep;