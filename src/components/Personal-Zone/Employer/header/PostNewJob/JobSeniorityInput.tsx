import * as React from 'react';

import InputLabel from '@material-ui/core/InputLabel';
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

    const SENIORITY_SCROLL_STEP = 1;
    const MIN_SENIORITY_IN_YEARS = 1; // shouldHaveSeniority = false, Means 0...
    const MAX_SENIORITY_IN_YEARS = 50;

    const seniorityNumberInputField = (): JSX.Element => {
        return (
            <TextField
                classes={{
                    root: classes.seniorityNumberInput,
                }}
                InputProps={{
                    classes: {
                        input: classes.seniorityNumberText
                    }
                }}
                InputLabelProps={{
                    classes: {
                        root: classes.seniorityNumberInputLabel,                        
                    },
                    required: true
                }}
                type="number"
                value={yearsInSeniority}
                label="ותק בשנים"
                onInput={(event: React.ChangeEvent<HTMLInputElement>) => {
                    const seniorityYearsInput = parseInt(event.target.value) || MIN_SENIORITY_IN_YEARS;

                    if(seniorityYearsInput <= MAX_SENIORITY_IN_YEARS) {
                        setYearsInSeniority(Math.max(MIN_SENIORITY_IN_YEARS, seniorityYearsInput));
                    }
                }}
                inputProps={{
                    min: MIN_SENIORITY_IN_YEARS,
                    max: MAX_SENIORITY_IN_YEARS, // What is the maximum vetek a person might have? ^^
                    step: SENIORITY_SCROLL_STEP,
                    style: { // Couldn't do in jss, TODO
                        textAlign: "center"
                    }
                }}
            />
        );
    }

    return (
        <div className={classes.jobSeniorityFields}>
            <InputLabel>
                דרוש ותק?
            </InputLabel>
            <div
                className={classes.jobRequirementsMargin}
            >
                <SwitchInput 
                    leftText="כן"
                    rightText="לא"
                    checked={shouldHaveSeniority}
                    setChecked={setShouldHaveSeniority} />
                { shouldHaveSeniority && seniorityNumberInputField() }
            </div>
        </div>
    );
}

export default JobSeniorityInput;