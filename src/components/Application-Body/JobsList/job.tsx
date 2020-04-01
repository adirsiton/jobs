import * as React from 'react';
import styles from './jobsListStyle';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';


const Job = (): JSX.Element => {
    const classes = styles();



    return (
        <div className={classes.job}>
            <div className={classes.jobHeader}>
                <div className={classes.jobMainTitles}>  
                    <span className={classes.jobMainTitle}> מנהל מוצר</span>
                    <div className={classes.avatar}> PM </div>
                </div>

                <div className={classes.jobSecondaryTitles}>
                    <span> מצפן</span>
                    <span className={classes.locationTitle}><LocationOnOutlinedIcon className={classes.jobsLocationIcon} /> שלישות </span>
                </div>
            </div>
            <div className={classes.jobContent} ></div>
            <div className={classes.jobFooter}>
                <Button className={classes.jobBtn} startIcon={<VisibilityOutlinedIcon className={classes.btnIcon} />}> צפייה  </Button>
                <Button className={classes.jobBtn} startIcon={<StarBorderOutlinedIcon className={classes.btnIcon} />}>  שמירה  </Button>
            </div>
        </div>


    );
}

export default Job;
