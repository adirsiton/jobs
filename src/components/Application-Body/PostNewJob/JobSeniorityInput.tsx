import * as React from 'react';

import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

import styles from './PostNewJobStyles';
import SwitchInput from './SwitchInput';

interface JobSeniorityInputProps {
    shouldHaveSeniority: boolean;
    setShouldHaveSeniority: (shouldHaveSeniority: boolean) => void;
    yearsInSeniority: number;
    setYearsInSeniority: (yearsInSeniority: number) => void;
}

const JobSeniorityInput: React.FC<JobSeniorityInputProps> = (props): JSX.Element => {
    const { shouldHaveSeniority, setShouldHaveSeniority,
            yearsInSeniority, setYearsInSeniority } = props;

    const classes = styles({});

    const MAX_SENIORITY_IN_YEARS = 50;

    const seniorityNumberInputField = (): JSX.Element => {
        return (
            <TextField
                classes={{
                    root: classes.numberInput
                }}
                InputLabelProps={{
                    classes: {
                        root: classes.numberInputLabel,
                    },
                    required: true
                }}
                type="number"
                value={yearsInSeniority}
                label="ותק בשנים"
                onInput={(event: React.ChangeEvent<HTMLInputElement>) => {
                    const seniorityYearsInput = parseInt(event.target.value) | 1;

                    setYearsInSeniority(
                        Math.min(
                            Math.max(1, seniorityYearsInput), 
                            MAX_SENIORITY_IN_YEARS)
                        )
                }}
                inputProps={{
                    min: 1,
                    max: MAX_SENIORITY_IN_YEARS, // What is the maximum vetek a person might have? ^^
                    style: { // Couldn't do in jss, TODO
                        textAlign: "center"
                    }
                }}
            />
        );
    }

    return (
        <div className={classes.jobSeniorityFields}>
            <Typography className={classes.jobSeniorityTitle}>
                דרוש ותק?
            </Typography>
            <SwitchInput 
                leftText="כן"
                rightText="לא"
                checked={shouldHaveSeniority}
                setChecked={setShouldHaveSeniority} />
            { shouldHaveSeniority && seniorityNumberInputField() }
        </div>
    );
}

export default JobSeniorityInput;