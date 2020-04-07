import * as React from 'react';
import Button from '@material-ui/core/Button';
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import styles from './jobsListStyle';

import { Advertisement  } from '../../../types/Advertisements';

interface JobsProps {
    ad: Advertisement 
}

const Job: React.FC<JobsProps> = (props): JSX.Element => {
    const classes = styles();
    const { ad } = props;

    return (
        <div className={classes.job}>
            <div className={classes.jobHeader}>
                <div className={classes.jobMainTitles}>
                    <span className={classes.jobTitle}> {ad.name}</span>
                    <div className={classes.tag} style={{ backgroundColor: ad.tag.color }}> {ad.tag.name} </div>
                </div>
                <div className={classes.jobSecondaryTitles}>
                    <span> {`${ad.unit.name}/${ad.branch.name}/${ad.department.name}`}</span>
                    <span className={classes.locationTitle}><LocationOnOutlinedIcon className={classes.jobsLocationIcon} /> {ad.location.name} </span>
                </div>
            </div>
            <div className={classes.jobContent}>
                <span> {ad.description} </span>
                <div className={classes.jobContentFooter}>
                    <div> <span className={classes.jobContentTitle}> תקן:</span>  <span> {ad.standards.join('/')} </span></div>
                    <div > <span className={classes.jobContentTitle}> כניסה לתפקיד:</span>  <span> { ad.entryDate} </span></div>
                </div>
            </div>
            <div className={classes.jobFooter}>
                <Button className={classes.jobBtn} startIcon={<VisibilityOutlinedIcon className={classes.btnIcon} />}> צפייה  </Button>
                <Button className={classes.jobBtn} startIcon={<StarBorderOutlinedIcon className={classes.btnIcon} />}>  שמירה  </Button>
            </div>
        </div>
    );
}

export default Job;
