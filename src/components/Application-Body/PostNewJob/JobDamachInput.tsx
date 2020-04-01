import * as React from 'react';

import Typography from '@material-ui/core/Typography';

import styles from './PostNewJobStyles';
import SwitchInput from './SwitchInput';

interface JobDamachInputProps {
    shouldHaveDamach: boolean;
    setShouldHaveDamach: (shouldHaveDamach: boolean) => void;
}

const JobDamachInput: React.FC<JobDamachInputProps> = (props): JSX.Element => {
    const { shouldHaveDamach, setShouldHaveDamach } = props;

    const classes = styles({});

    return (
        <div className={classes.jobDamachFields}>
            <Typography className={classes.jobDamachTitle}>
                מוכר לדמ"ח?
            </Typography>
            <SwitchInput 
                leftText="כן"
                rightText="לא"
                checked={shouldHaveDamach}
                setChecked={setShouldHaveDamach} />
        </div>
    );
}

export default JobDamachInput;