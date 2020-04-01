import * as React from 'react';

import Typography from '@material-ui/core/Typography';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import styles from './PostNewJobStyles';
import { Role, ROLE_DISPLAYS } from '../../../types/Role';

interface JobRoleInputProps {
    setRole: (role: Role) => void;
}

const JobRoleInput: React.FC<JobRoleInputProps> = (props): JSX.Element => {
    const { setRole } = props;

    const classes = styles({});

    const radioes = ROLE_DISPLAYS.map(jobRole => 
        <FormControlLabel
            key={jobRole}
            value={jobRole} 
            control={<Radio onClick={() => setRole(jobRole)} />} 
            label={jobRole} 
        />
    );
    
    return (
        <div className={classes.jobRole}>
            <Typography>
                תפקיד
            </Typography>
            <RadioGroup row>
                {radioes}
            </RadioGroup>
        </div>
    );
}

export default JobRoleInput;