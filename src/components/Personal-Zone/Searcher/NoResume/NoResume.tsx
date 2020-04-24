import * as React from 'react';
import { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import AssignmentIndOutlinedIcon from '@material-ui/icons/AssignmentIndOutlined';
import AddIcon from '@material-ui/icons/Add';
import StarIcon from '@material-ui/icons/Star';

import styles from './NoResumeStyle';
import AddResumeDialog from '../AddResumeDialog/AddResumeDialog';


const NoResume: React.FC<{}> = (): JSX.Element => {
    const classes = styles();
    const [openResumeDialog, setOpenResumeDialog] = useState<boolean>(false);

    return (
        <div className={classes.noResumeContainer}>
            <AssignmentIndOutlinedIcon style={{ fontSize: 100 }} />
            <span className={classes.headline}> אז למה לי רזומה עכשיו? </span>
            <div className={classes.content}>
                <span>
                    אנחנו בג'ובניק מאמינים ברושם ראשוני ורוצים שהמפקד
                    הבא שלך יכיר אותך מהרגע הראשון-
                    מה הניסיון שלך, תפקידים קודמים או כל כישרון אחר.
                </span>
                <span>
                    בשמירת אחד מהג'ובים שלנו מפרסם הג'וב יוכל לצפות
                    ברזומה שלך ולהכיר אותך קצת יותר
                </span>
            </div>
            <Button className={`${classes.userBtn} ${classes.addResumeBtn}`} startIcon={<AddIcon className={classes.btnIcon} />}
                onClick={()=> {setOpenResumeDialog(true)}}>
                הוספת הרזומה שלך
            </Button>
            <Button className={`${classes.userBtn} ${classes.savedJobsBtn}`} startIcon={<StarIcon className={classes.btnIcon} />}>
                צפייה בג'ובים ששמרת
            </Button>

            <AddResumeDialog isOpen={openResumeDialog} closeDialog={()=> {setOpenResumeDialog(false)}}/>
        </div>
    );
}

export default NoResume;