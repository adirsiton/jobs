import React from 'react';
import { useState, useEffect } from 'react';

import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox/Checkbox';
import Typography from '@material-ui/core/Typography';
import CircleCheckedFilled from '@material-ui/icons/CheckCircleOutline';
import CircleUnchecked from '@material-ui/icons/RadioButtonUnchecked';

import { Role } from '../../../../../types/Role';
import styles from './StepsStyle';
import { TextField } from '@material-ui/core';


interface PersonalDetailsStepProps {
    roles: Role[];
}

const NextJob: React.FC<PersonalDetailsStepProps> = (props): JSX.Element => {
    const classes = styles();
    const { roles } = props;
    const [nextRoles, setNextRoles] = useState<number[]>([]);

    const rolesCheckBoxGroup = <FormGroup row>
        {roles.map(role =>
            <FormControlLabel
                control={
                    <Checkbox
                        disabled={nextRoles.length >= 3 && !nextRoles.includes(role.id)}
                        icon={<CircleUnchecked />}
                        checkedIcon={<CircleCheckedFilled />}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                            setNextRoles(
                                event.target.checked
                                    ? [...nextRoles, role.id]
                                    : nextRoles.filter(nextRole => nextRole !== role.id)
                            )
                        }
                    />}
                label={role.name}>

            </FormControlLabel>)
        }
    </FormGroup>

    return (

        <div className={classes.nextJobContainer}>
            <span className={classes.headline}> הייתי רוצה תפקיד של...</span>
            {rolesCheckBoxGroup}
            <span className={classes.headline}> יש עוד משהו שכדאי לדעת עליי</span>
            <TextField
                InputProps={{
                    disableUnderline: true,
                }}
                classes={{ root: classes.multiLineText }}
                multiline
                rows={4}>
            </TextField>
        </div>
    );
}

export default NextJob;