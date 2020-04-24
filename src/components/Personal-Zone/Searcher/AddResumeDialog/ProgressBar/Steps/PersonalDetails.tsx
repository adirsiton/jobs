import React from 'react';

import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';

// import PhoneInput from 'react-phone-number-input/input'

import { Role } from '../../../../../types/Role';
import { Standard } from '../../../../../types/Standard';
import styles from './StepsStyle';

interface PersonalDetailsStepProps {
    roles: Role[];
    ranks: Standard[];
    selectedRoleId: number;
    setSelectedRoleId: (roleId: number) => void;
    selectedRankId: number;
    setSelectedRankId: (rankId: number) => void;
    phoneNumber: string;
    setPhoneNumber: (phoneNumber: string) => void;
}

const PersonalDetailsStep: React.FC<PersonalDetailsStepProps> = (props): JSX.Element => {
    const classes = styles();
    const { roles, ranks, selectedRoleId, setSelectedRoleId, selectedRankId,
        setSelectedRankId, phoneNumber, setPhoneNumber } = props;

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
        value={selectedRoleId}
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
                setSelectedRoleId(event.target.value)
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
        value={selectedRankId}
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
                setSelectedRankId(event.target.value)
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

    const phoneInput = (): JSX.Element => {
        return (
            <div className={classes.inputDiv}>
                <InputLabel classes={{ asterisk: classes.asterisk }} required={true}>
                    טלפון ליצירת קשר
            </InputLabel>
                <TextField
                    InputProps={{
                        disableUnderline: true
                    }}
                    inputProps={{ pattern: "[0-9]{3}-[0-9]{2}-[0-9]{3}" }}
                    value={phoneNumber}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setPhoneNumber(event.target.value)
                    }
                    className={`${classes.inputfield} ${classes.phoneInput} ${classes.longInput}`}
                />
            </div>
        )
    }




    return (
        <div className={classes.personalDetailsContainer}>
            {inputDiv("שם", textInput(true, "אילי מלאכי", ""))}
            {inputDiv("מ.א", textInput(true, "8485303", ""))}
            {inputDiv("תפקיד", rolesSelect)}
            {inputDiv("דרגה", ranksSelect)}
            {phoneInput()}
        </div>
    );
}

export default PersonalDetailsStep;