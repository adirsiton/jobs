import * as React from 'react';

import Typography from '@material-ui/core/Typography';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

import styles from './PostNewJobStyles';
import { ITALIC_FONT } from '../../../assets/projectJSS/Fonts';

interface JobDescriptionInputProps {
    jobDescription: string;
    setJobDescription: (jobDescription: string) => void;
    isValid: boolean;
}

const NUM_ROWS_BEFORE_ELLIPSIS = 3;
const JOB_DESCRIPTION_MIN_LENGTH = 20;
const JOB_DESCRIPTION_MAX_LENGTH = 200;

export const isJobDescriptionInValidLength = (jobDescription: string): boolean => {
    return jobDescription.length >= JOB_DESCRIPTION_MIN_LENGTH &&
        jobDescription.length <= JOB_DESCRIPTION_MAX_LENGTH;
}

const JobDescriptionInput: React.FC<JobDescriptionInputProps> = (props): JSX.Element => {
    const { jobDescription, setJobDescription, isValid } = props;

    const classes = styles({});

    const jobDescriptionPlaceHolder = "אנחנו ממליצים לציין תחומי אחריות, הגורמים מולם נדרש לעבוד ותהליכים שיידרש להוביל כחלק מהתפקיד."

    const fontStyle: string =
        jobDescription
            ? 'initial'
            : ITALIC_FONT;

    return (
        <div 
            className={classes.subtitlesMargin}
        >
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
                style={{
                    fontStyle // TODO: Try to add this in classname
                }}
            />
        </div>
    );
}

export default JobDescriptionInput;