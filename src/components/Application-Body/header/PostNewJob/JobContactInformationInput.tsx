import * as React from 'react';
import { useState, useEffect } from 'react';

import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

import styles from './PostNewJobStyles';
import { ContactInformation } from '../../../../types/ContactInformation';

interface ContactInformationProps {
    contactInformation: ContactInformation;
    setContactInformation: (contactInformation: ContactInformation) => void;
}

const CONTACT_NICKNAME_MIN_LENGTH = 2;
const CONTACT_NICKNAME_MAX_LENGTH = 20;
const PHONE_SUFFIX_LEGAL_LENGTH = 7;

const isContactNameInValidLength = (contactNickname: string): boolean => {
    return contactNickname.length >= CONTACT_NICKNAME_MIN_LENGTH;
}

const isPhoneNumberLegal = (phoneNumber: string): boolean => {
    const dashIndex = phoneNumber.indexOf('-');

    return phoneNumber.substring(0, dashIndex) !== '' && 
        phoneNumber.substring(dashIndex).length === PHONE_SUFFIX_LEGAL_LENGTH;
}

export const isContactInfoLegal = (contactInformation: ContactInformation): boolean => {
    return isContactNameInValidLength(contactInformation.fullName) &&
        isPhoneNumberLegal(contactInformation.phoneNumber);
}

const JobContactInformationInput: React.FC<ContactInformationProps> = (props): JSX.Element => {
    const { contactInformation, setContactInformation } = props;
    const [phonePrefix, setPhonePrefix] = useState<string>('');
    const [phoneSuffix, setPhoneSuffix] = useState<string>('');

    const classes = styles({});

    const updatePhoneNumber = (): void => {
        setContactInformation({
            ...contactInformation,
            phoneNumber: `${phonePrefix}-${phoneSuffix}`
        });
    }

    const contactNameInput = (): JSX.Element => {
        return (
            <TextField 
            required                        
            // Disable the underline...
            className={classes.contactNicknameText}
            // InputLabelProps={{
            //     classes: {
            //         formControl: classes.contactNicknameLabel,
            //     },
            //     required: true
            // }}                        
            placeholder='שם/כינוי'
        //    error={isInError}: TODO
    //                    helperText={getHelperText()}: TODO
            // FormHelperTextProps={{
            //     hidden: !isInError,
            // }}
            value={contactInformation.fullName}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => 
                setContactInformation({
                    ...contactInformation,
                    fullName: event.target.value
                })
            }
            inputProps={{
                maxLength: CONTACT_NICKNAME_MAX_LENGTH,
            }}
            InputProps={{
                disableUnderline: true,
            }} />
        );
    }

    const phoneSuffixInput = (): JSX.Element => {
        return (
            <TextField 
                required                        
                // Disable the underline...
                className={classes.contactPhoneSuffix}
                // placeholder='7 ספרות'
            //    error={isInError}: TODO
        //                    helperText={getHelperText()}: TODO
                // FormHelperTextProps={{
                //     hidden: !isInError,
                // }}
                value={phoneSuffix}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => 
                    {
                        setPhoneSuffix(event.target.value);
                        updatePhoneNumber();
                    }
                }
                inputProps={{
                    maxLength: PHONE_SUFFIX_LEGAL_LENGTH,
                }}
                InputProps={{
                    disableUnderline: true,
                }} />
        );
    }

    const phonePrefixInput = (): JSX.Element => {
        const ALLOWED_PHONE_PREFIXES: string[] 
            = ['050', '051', '052', '053', '054', '055', '058'];
        
        const menuItems: JSX.Element[] = ALLOWED_PHONE_PREFIXES.map(phonePrefixOption => 
            <MenuItem
                key={phonePrefixOption}
                value={phonePrefixOption}>
                {phonePrefixOption}
            </MenuItem>
        )

        return (
            <Select
                className={classes.contactPhonePrefix}
                disableUnderline
                classes={{
                    icon: classes.selectIcon,
                }}
                value={phonePrefix}
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
                onChange={(event: React.ChangeEvent<{ name?: string | undefined; value: any/*NoOtherWay*/; }>) => {
                    setPhonePrefix(event.target.value);
                    updatePhoneNumber();
                }}
            >
                {menuItems}
            </Select>
        );
    }

    return (
        <div 
            className={classes.subtitlesMargin}
        >
            <div className={classes.contactInfo}>
                <InputLabel
                    required={true}
                >
                        איש קשר
                </InputLabel>
                <div
                    className={classes.jobRequirementsMargin}
                >
                    {contactNameInput()}
                    {phoneSuffixInput()}
                    -
                    {phonePrefixInput()}
                </div>        
            </div>
        </div>
    );
}

export default JobContactInformationInput;
