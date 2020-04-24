import * as React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import FullStarIcon from '@material-ui/icons/Star';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import styles from './jobsListStyle';

import { Advertisement  } from '../../../types/Advertisements';

interface JobsProps {
    ad: Advertisement;
    isFavorite: boolean;
    unsetFavoriteAd: () => void;
    setFavoriteAd: () => void;
}

const Job: React.FC<JobsProps> = (props): JSX.Element => {
    const classes = styles();
    const { ad , isFavorite, unsetFavoriteAd, setFavoriteAd} = props;

    const saveButtonText = isFavorite
    ? 'נשמר' 
    : 'שמירה';

    const getStarIcon = (): JSX.Element => {
        return isFavorite
        ? <FullStarIcon className={classes.btnIcon} />
        : <StarBorderOutlinedIcon className={classes.btnIcon} />
    }

    const handleOnClickSaveButton = () => {isFavorite? unsetFavoriteAd() : setFavoriteAd()}

    return (
        <div className={classes.job}>
            <div className={classes.jobHeader}>
                <div className={classes.jobMainTitles}>
                    <span className={classes.jobTitle}> {ad.name}</span>
                    <Typography 
                        className={classes.tag} 
                        style={{ backgroundColor: ad.role.color }}
                        >
                        {ad.role.initials}
                    </Typography>
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
                    <div > <span className={classes.jobContentTitle}> כניסה לתפקיד:</span>  <span> {ad.entryDate ? ad.entryDate : 'מיידי'} </span></div>
                </div>
            </div>
            <div className={classes.jobFooter}>
                <Button className={classes.jobBtn} startIcon={<VisibilityOutlinedIcon className={classes.btnIcon} />}> צפייה  </Button>
                <Button 
                    className={`${classes.jobBtn} ${isFavorite && classes.boldText}`}
                    onClick={handleOnClickSaveButton}
                    startIcon={getStarIcon()}
                >
                    {saveButtonText} 
                </Button>
            </div>
        </div>
    );
}

export default Job;
