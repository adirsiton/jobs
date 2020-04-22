import * as React from 'react';

import Typography from '@material-ui/core/Typography';

import styles from './EmptyDisplayStyles';

const EmptyPublisherDisplay: React.FC= () => {
    const classes = styles();

    return (
        <div className={classes.root}>
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
        </div>
    );
}

export default EmptyPublisherDisplay;