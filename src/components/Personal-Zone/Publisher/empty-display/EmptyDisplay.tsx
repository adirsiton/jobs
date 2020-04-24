import * as React from 'react';

import Typography from '@material-ui/core/Typography';

import styles from './EmptyDisplayStyles';
import NewJobButton from '../new-job/new-job-button/NewJobButton';
import ResumeIcon from '../../../../assets/icons/ResumeIcon';

const EmptyPublisherDisplay: React.FC= () => {
    const classes = styles();

    return (
        <div className={classes.root}>
            <ResumeIcon className={classes.resumeIcon}/>
            <span className={classes.messageTitle}>
                פרסמת? מצאת!
            </span>
            <Typography variant='body1' className={classes.messageBody}>
                אנחנו בג'ובניק מאמינים שככל שיותר אנשים ייחשפו
                לתפקיד אצלך הסיכוי שלך למצוא מועמד מתאים גבוה 
                יותר!
            </Typography>
            <Typography variant='body1' className={classes.messageBody}>
                כל תפקיד שתפרסם יופיע בג'ובניק ואנחנו נוכל להפנות
                אותך לכל מי שהתעניין בו
            </Typography>
            <div className={classes.buttonWrapper}>
                <NewJobButton />
            </div>
        </div>
    );
}

export default EmptyPublisherDisplay;