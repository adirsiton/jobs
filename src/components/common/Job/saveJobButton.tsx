import * as React from 'react';

import { WithStyles, withStyles } from '@material-ui/core/styles';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import FullStarIcon from '@material-ui/icons/Star'
import Button from '@material-ui/core/Button';

import styles from './jobStyles';

interface SaveJobData {
    isFavorite: boolean;
    handleClick: () => void;
}

type SaveJobProps = SaveJobData & WithStyles<typeof styles>;

const SaveJobButton: React.FC<SaveJobProps> = (props): JSX.Element => {
    const { classes, isFavorite, handleClick } = props;

    const renderStarIcon = (): JSX.Element => {
        return isFavorite
            ? <FullStarIcon className={classes.btnIcon} />
            : <StarBorderOutlinedIcon className={classes.btnIcon} />
    }

    return (
        <Button 
            className={`${classes.jobBtn} ${isFavorite && classes.boldText}`}
            onClick={handleClick}
            startIcon={renderStarIcon()}
        >
            {isFavorite
                ? 'נשמר' 
                : 'שמירה'} 
        </Button>
    )
}

export default withStyles(styles)(SaveJobButton);



