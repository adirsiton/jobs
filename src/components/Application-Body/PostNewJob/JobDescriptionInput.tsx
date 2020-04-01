import * as React from 'react';

import Typography from '@material-ui/core/Typography';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

import styles from './PostNewJobStyles';

interface JobDescriptionInputProps {
    jobDescription: string;
    setJobDescription: (jobDescription: string) => void;
}

const JobDescriptionInput: React.FC<JobDescriptionInputProps> = (props): JSX.Element => {
    const { jobDescription, setJobDescription } = props;

    const classes = styles({});

    const jobDescriptionPlaceHolder = "כאן כתוב תיאור של התפקיד ועוד דרישות של מי שפרסם את התפקיד, אנחנו נתן מקום לשלוש שורות ככה שאנשים יוכלו לחפור ולהתפלצן בכייף שלהם."

    return (
        <>
            <Typography>
                תיאור התפקיד
            </Typography>
            <TextareaAutosize 
                className={classes.jobDescriptionArea}
                rowsMin={3}
                rowsMax={3}
                placeholder={jobDescriptionPlaceHolder}
                value={jobDescription}
                onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => 
                    setJobDescription(event.target.value)
                }                    
            />
        </>
    );
}

export default JobDescriptionInput;