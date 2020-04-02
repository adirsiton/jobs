import * as React from 'react';
import { useState, useEffect } from 'react';

import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';

import styles from './PostNewJobStyles';

interface JobNicknameInputProps {
    jobNickname: string;
    setJobNickname: (jobNickname: string) => void;
    didValidationFail: boolean;
}

const JOB_NICKNAME_MIN_LENGTH = 8;
const JOB_NICKNAME_MAX_LENGTH = 35;

export const isJobNicknameInValidLength = (jobNickname: string): boolean => {
    return jobNickname.length >= JOB_NICKNAME_MIN_LENGTH;
}

const JobNicknameInput: React.FC<JobNicknameInputProps> = (props): JSX.Element => {
    const { jobNickname, setJobNickname, didValidationFail } = props;
    
    const classes = styles({});
    
    const [isInError, setIsInError] = useState<boolean>(false);

    useEffect(() => {
        if (didValidationFail) {
            setIsInError(!isJobNicknameInValidLength(jobNickname));
        }
    }, [didValidationFail, jobNickname]);

    const getHelperText = (): string => {
        if (!isInError)
            return '';
        return jobNickname
            ? `שם תפקיד קצר מדי, צריך להיות באורך של לפחות ${JOB_NICKNAME_MIN_LENGTH} תווים.`
            : 'שם תפקיד לא יכול להיות ריק.';
    }

    return (
        <>
            <div
                className={classes.jobNickname}
            >
                <InputLabel
                    required
                    error={isInError}
                >
                    שם התפקיד
                </InputLabel>
                <div
                    className={classes.jobRequirementsMargin}
                >
                    <TextField 
                        required                        
                        // Disable the underline...
                        className={classes.jobNicknameText}
                        placeholder='למשל: מנהל מוצר שו"ב ל"א'
                        error={isInError}
                        helperText={getHelperText()}

                        FormHelperTextProps={{
                            hidden: !isInError,
                        }}
                        value={jobNickname}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => 
                            setJobNickname(event.target.value)
                        }
                        inputProps={{
                            maxLength: JOB_NICKNAME_MAX_LENGTH,
                        }}
                        InputProps={{
                            disableUnderline: true,
                        }} />
                </div>
            </div>
        </>
    );        
}

export default JobNicknameInput;