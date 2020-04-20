import * as React from 'react';

import InputLabel from '@material-ui/core/InputLabel';

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
            <InputLabel>
                מוכר לדמ"ח?
            </InputLabel>
            <div
                className={classes.jobRequirementsMargin}
            >
                <SwitchInput 
                    leftText="כן"
                    rightText="לא"
                    checked={shouldHaveDamach}
                    setChecked={setShouldHaveDamach} />
            </div>
        </div>
    );
}

export default JobDamachInput;