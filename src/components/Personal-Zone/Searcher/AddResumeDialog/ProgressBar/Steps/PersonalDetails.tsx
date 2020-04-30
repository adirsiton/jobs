import React from 'react';

import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';

import { Role } from '../../../../../../types/Role';
import { Standard } from '../../../../../../types/Standard';
import styles from './StepsStyle';
import { User } from '../../../../../../types/User';
import { InputErrors } from './Step';

interface PersonalDetailsStepProps {
    roles: Role[];
    ranks: Standard[];
    selectedRoleId: number;
    setSelectedRoleId: (roleId: number) => void;
    selectedRankId: number;
    setSelectedRankId: (rankId: number) => void;
    phoneNumber: string;
    setPhoneNumber: (phoneNumber: string) => void;
    user: User;
    inputErrors: InputErrors;
}

const PersonalDetailsStep: React.FC<PersonalDetailsStepProps> = (props): JSX.Element => {
    const classes = styles();
    const { roles, ranks, selectedRoleId, setSelectedRoleId, selectedRankId,
        setSelectedRankId, phoneNumber, setPhoneNumber, user, inputErrors} = props;

    const rolesMenuItems = roles.map(role =>
        <MenuItem
            key={role.id}
            value={role.id}
        >
            {role.name}
        </MenuItem>
    )
    const rolesSelect = <Select
        className={classes.inputfield}
        classes={{
            root: classes.selectRoot,
            iconOutlined: classes.selectIconOutlined,
        }}
        value={selectedRoleId}
        variant="outlined"
        onChange={
            (event: React.ChangeEvent<{ value: any }>) =>
                setSelectedRoleId(event.target.value)
        }
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
        className={classes.inputfield}
        classes={{
            root: classes.selectRoot,
            iconOutlined: classes.selectIconOutlined,
        }}
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
        variant="outlined"
        onChange={
            (event: React.ChangeEvent<{ value: any }>) =>
                setSelectedRankId(event.target.value)
        }
    >
        {ranksMenuItems}
    </Select>


    const textInput = (disabled: boolean, text = "", placeHolder = ""): JSX.Element => {
        return (
            <TextField 
                className={classes.inputfield}
                variant="outlined"
                disabled={disabled}
                value={text} 
            />
        );
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
                    error={!!inputErrors.phoneError}
                    helperText={inputErrors.phoneError}
                    value={phoneNumber}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setPhoneNumber(event.target.value)
                    }
                    variant="outlined"
                    className={`${classes.inputfield} ${classes.phoneInput}`}
                />
            </div>
        )
    }




    return (
        <div className={classes.personalDetailsContainer}>
            {inputDiv("שם", textInput(true, user.name, ""))}
            {inputDiv("מ.א", textInput(true, user.upn, ""))}
            {inputDiv("תפקיד", rolesSelect)}
            {inputDiv("דרגה", ranksSelect)}
            {phoneInput()}
        </div>
    );
}

export default PersonalDetailsStep;