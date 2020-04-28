import * as React from 'react';
import AssignmentIndOutlinedIcon from '@material-ui/icons/AssignmentIndOutlined';
import Button from '@material-ui/core/Button';

import styles from './FavoriteJobsStyle';
import { Link } from 'react-router-dom';


const FavoriteJobs: React.FC<{}> = (): JSX.Element => {
    const classes = styles();

    return (
        <div className={classes.root}>
            <AssignmentIndOutlinedIcon style={{ fontSize: 100 }} />
            <span className={classes.content}>
                עדיין לא התעניינת באף תפקיד,<br/>
                אנחנו חושבים שזה הזמן לעבור שוב על התפקידים
            </span>
            <Link to='/'>
                <Button 
                    className={`${classes.userBtn} ${classes.addResumeBtn}`}
                >
                    תראו לי את רשימת התפקידים
                </Button>
            </Link>
        </div>
    );
}

export default FavoriteJobs;