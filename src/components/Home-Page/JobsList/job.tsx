import * as React from 'react';

import Button from '@material-ui/core/Button';
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import { WithStyles, withStyles } from '@material-ui/core/styles';

import styles from '../../common/Job/jobStyles';
import JobTitle from '../../common/Job/jobTitle';
import JobFullDetails from '../../common/Job-Full-Details/jobFullDetails';
import SaveJobButton from '../../common/Job/saveJobButton';
import JobDetail from '../../common/Job/jobDetail';
import { Advertisement  } from '../../../types/Advertisements';

interface JobData {
    ad: Advertisement;
    isFavorite: boolean;
    toggleFavoriteAd: (isFavorite: boolean) => void;
}

type JobProps = JobData & WithStyles<typeof styles>;

const Job: React.FC<JobProps> = (props): JSX.Element => {
    const { ad , isFavorite, toggleFavoriteAd, classes} = props;

    const [areFullDetailsShown, setAreFullDetailsShown] = React.useState<boolean>(false);

    const handleOnClickSaveButton = (): void => {
        isFavorite ? toggleFavoriteAd(false) : toggleFavoriteAd(true) 
    }

    return (
        <div className={classes.job}>
            <div className={classes.jobHeader}>
                <JobTitle ad={ad} showLocation={true} />    
            </div>
            <div className={classes.jobContent}>
                <span> {ad.description} </span>
                <div className={classes.jobContentFooter}>
                    <JobDetail title="תקן" data={ad.standards.join('/')} />
                    <JobDetail title="כניסה לתפקיד" data={ad.entryDate ||  'מיידי'} />
                </div>
            </div>
            <div className={classes.jobFooter}>
                <Button
                    className={classes.jobBtn} 
                    startIcon={<VisibilityOutlinedIcon className={classes.btnIcon} />}
                    onClick={() => setAreFullDetailsShown(true)}    
                >
                    צפייה  
                </Button>
                <SaveJobButton isFavorite={isFavorite} handleClick={handleOnClickSaveButton} />
            </div>

            <JobFullDetails
                isOpen={areFullDetailsShown}
                setIsOpen={setAreFullDetailsShown}
                ad={ad}
                isFavorite={isFavorite}
                isRamadView={false}
                onSave={handleOnClickSaveButton}
            />

        </div>
    );
}

export default withStyles(styles)(Job);
