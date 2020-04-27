import * as React from 'react';
import { useState } from 'react';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import EditRoundedIcon from '@material-ui/icons/EditRounded';
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import CancelPresentationIcon from '@material-ui/icons/CancelPresentation';

import { RamadAds } from '../../../../types/User';
import styles from './jobsListStyle';
import CloseJobDialog from './Close-Job-Dialog/closeJobDialog';

interface JobsProps {
    ad: RamadAds;
}

const Job: React.FC<JobsProps> = (props): JSX.Element => {
    const classes = styles();
    const { ad } = props;
  const [isOpenCloseAdDialog, setIsOpenCloseAdDialog] = useState(false);

    const getJobName = (): JSX.Element => {
        return (
            <Typography 
                variant='h5'
                className={classes.jobTitle}
                title={ad.name}
            >
                {ad.name}
            </Typography>
        );
    };

    const getJobTag = (): JSX.Element => {
        return (
            <Typography 
                className={classes.tag} 
                style={{ backgroundColor: ad.role.color }}
                >
                {ad.role.initials}
            </Typography>
        );
    };

    const getJobCandidates = () => {
        return ad.candidates.map(candidate => (
            <div key={ad.id} className={classes.candidate}>
                <Typography className={classes.candidateName} variant='h6'>
                    {candidate.name}
                </Typography>
                <Typography variant='h6'>
                    {candidate.upn}
                </Typography>
                <Typography variant='h6'>
                    {candidate.phoneNumber}
                </Typography>
                <Button 
                    className={classes.viewJobBtn} 
                    startIcon={<VisibilityOutlinedIcon className={classes.btnIcon} />}>
                    <Typography variant='h6'>
                        לצפייה ברזומה
                    </Typography>
                </Button>
            </div>
        ));
    };

    const getJobButtons = () => {
        return ad.isClosed
        ? ( 
            <Button 
                className={classes.jobBtn}
                // TODO onClick open ad
            >
                פתיחה מחדש
            </Button>
        )
        : (<>
            <Button 
                className={classes.jobBtn} 
                startIcon={<EditRoundedIcon className={classes.btnIcon} />}
            >
                עריכה
            </Button>
            <Button 
                className={classes.jobBtn} 
                startIcon={<CancelPresentationIcon className={classes.btnIcon} />}
                onClick={() => setIsOpenCloseAdDialog(true)}
            >
                סגירת תפקיד
            </Button>
        </>);    
        }

    return (
        <div className={classes.job}>
            <div className={classes.jobHeader}>
                <div className={classes.jobMainTitles}>
                    {getJobName()}
                    {getJobTag()}
                </div>
                <div className={classes.candidates}>
                    {getJobCandidates()}
                </div>
            </div>
            <div className={classes.jobContent} />
            <div className={classes.jobFooter}>
                {getJobButtons()}
            </div>
            {isOpenCloseAdDialog && 
                <CloseJobDialog 
                    closeDialog={() => setIsOpenCloseAdDialog(false)}
                />
            }
        </div>
    );
}

export default Job;
