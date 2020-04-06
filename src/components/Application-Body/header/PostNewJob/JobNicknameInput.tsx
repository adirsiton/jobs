import * as React from 'react';

import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

import styles from './PostNewJobStyles';

interface JobNicknameInputProps {
    jobNickname: string;
    setJobNickname: (jobNickname: string) => void;
}

const JOB_NICKNAME_MAX_LENGTH = 35;

const JobNicknameInput: React.FC<JobNicknameInputProps> = (props): JSX.Element => {
    const { jobNickname, setJobNickname } = props;

    const classes = styles({});

    return (
        <>
            <Typography>
                שם התפקיד
            </Typography>
            <TextField 
                className={classes.jobNicknameText}
                placeholder='למשל: מפתח צוות תכנון שו"ב'
                value={jobNickname}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => 
                    setJobNickname(event.target.value)
                }
                inputProps={{
                    maxLength: JOB_NICKNAME_MAX_LENGTH
                }}
            />
        </>
    );        
}

export default JobNicknameInput;