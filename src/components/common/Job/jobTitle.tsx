import * as React from 'react';

import { WithStyles, withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';

import styles from './jobStyles';
import { Advertisement } from '../../../types/Advertisements';

interface JobTitleData {
    ad: Advertisement;
    showLocation: boolean;
}

type JobTitleProps = JobTitleData & WithStyles<typeof styles>;

const JobTitle: React.FC<JobTitleProps> = (props): JSX.Element => {
    const { classes, ad, showLocation} = props;

    return (
        <>
            <div className={classes.jobMainTitles}>
                <span title={ad.name} className={classes.jobTitle}>{ad.name}</span>
                <Typography 
                    className={classes.tag} 
                    style={{ backgroundColor: ad.role.color }}
                >
                    {ad.role.initials}
                </Typography>
            </div>
            <div className={classes.jobSecondaryTitles}>
                <span> {`${ad.unit.name}/${ad.branch.name}/${ad.department.name}`}</span>
                {
                    showLocation &&
                    <span className={classes.locationTitle}><LocationOnOutlinedIcon className={classes.jobsLocationIcon} /> 
                        {ad.location.name}
                    </span>
                }
            </div>
        </>
    )
}

export default withStyles(styles)(JobTitle);