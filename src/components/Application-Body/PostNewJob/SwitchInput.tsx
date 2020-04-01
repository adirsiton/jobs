import * as React from 'react';

import Typography from '@material-ui/core/Typography';
import Switch from '@material-ui/core/Switch';

import styles from './PostNewJobStyles';

interface SwitchInputProps {
    leftText: string;
    rightText: string;
    checked: boolean;
    setChecked: (checked: boolean) => void;
}

// Flipped Switch 180 degrees (See className), for Hebrew input :)
const SwitchInput: React.FC<SwitchInputProps> = (props): JSX.Element => {
    const { leftText, rightText, checked, setChecked } = props;

    const classes = styles({});

    return (
        <>
            <Typography>
                {rightText}
            </Typography>
            <Switch
                className={classes.flippedSwitch}
                checked={checked}
                onChange={() => setChecked(!checked)}           
            />
            <Typography>
                {leftText}
            </Typography>
        </>
    );
}

export default SwitchInput;