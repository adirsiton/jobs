import * as React from 'react';

import Typography from '@material-ui/core/Typography';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

import styles from './PostNewJobStyles';

interface JobDescriptionInputProps {
    jobDescription: string;
    setJobDescription: (jobDescription: string) => void;
    didValidationFail: boolean;
}

const NUM_ROWS_BEFORE_ELLIPSIS = 3;
const JOB_DESCRIPTION_MIN_LENGTH = 20;
const JOB_DESCRIPTION_MAX_LENGTH = 200;

export const isJobDescriptionInValidLength = (jobDescription: string): boolean => {
    return jobDescription.length >= JOB_DESCRIPTION_MIN_LENGTH &&
        jobDescription.length <= JOB_DESCRIPTION_MAX_LENGTH;
}

const JobDescriptionInput: React.FC<JobDescriptionInputProps> = (props): JSX.Element => {
    const { jobDescription, setJobDescription, didValidationFail } = props;

    const classes = styles({});

    const jobDescriptionPlaceHolder = "כאן כתוב תיאור של התפקיד ועוד דרישות של מי שפרסם את התפקיד, אנחנו נתן מקום לשלוש שורות ככה שאנשים יוכלו לחפור ולהתפלצן בכייף שלהם."

    return (
        <>
            <Typography>
                תיאור התפקיד
            </Typography>
            <TextareaAutosize 
                className={classes.jobDescriptionArea}
                rowsMin={NUM_ROWS_BEFORE_ELLIPSIS} // Better than 1 line
                rowsMax={NUM_ROWS_BEFORE_ELLIPSIS} // So won't affect modal... They have scroll :)
                placeholder={jobDescriptionPlaceHolder}
                onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => 
                    setJobDescription(event.target.value)
                }
            />
        </>
    );
}

export default JobDescriptionInput;