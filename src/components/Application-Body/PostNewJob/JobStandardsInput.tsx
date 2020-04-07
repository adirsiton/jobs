import * as React from 'react';

import Typography from '@material-ui/core/Typography';
import InputLabel from '@material-ui/core/InputLabel';
import Checkbox from '@material-ui/core/Checkbox/Checkbox';
// import CircleChecked from '@material-ui/icons/CheckCircleOutline';
import CircleCheckedFilled from '@material-ui/icons/CheckCircleOutline';
import CircleUnchecked from '@material-ui/icons/RadioButtonUnchecked';

import styles from './PostNewJobStyles';
import { Standard } from '../../../types/Standard';

interface JobStandardsInputProps {
    standards: Standard[];
    setStandards: (standard: Standard[]) => void;
    allStandardOptions: Standard[];
}

const JobStandardsInput: React.FC<JobStandardsInputProps> = (props): JSX.Element => {
    const { standards, setStandards, allStandardOptions } = props;

    const classes = styles({});

    const standardCheckboxes: JSX.Element[] = allStandardOptions.map(standardOption => 
        <div 
            className={classes.checkboxField} 
            key={standardOption.id}
        >
            <Checkbox 
                className={classes.checkbox}
                icon={<CircleUnchecked className={classes.checkboxIcon} />} 
                checkedIcon={<CircleCheckedFilled className={classes.checkboxIcon} />}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => 
                    setStandards(
                        event.target.checked 
                            ? [...standards, standardOption]
                            : standards.filter(selectedStandard => selectedStandard.id !== standardOption.id)
                    )
                } />
            <Typography
                variant='subtitle1'
            >
                {standardOption.name}
            </Typography>
        </div>
    );
    
    return (
        <div className={classes.standardFields}>
            <InputLabel
                required={true}
            >
                תקן
            </InputLabel>
            <div
                className={classes.jobRequirementsMargin}
            >
                {standardCheckboxes}
            </div>
        </div>
    );    
}

export default JobStandardsInput;