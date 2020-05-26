import * as React from 'react';

import { WithStyles, withStyles } from '@material-ui/core/styles';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import FullStarIcon from '@material-ui/icons/Star'
import Button from '@material-ui/core/Button';

import styles from './jobStyles';

interface SaveJobData {
    isFavorite: boolean;
    handleClick: () => void;
    width?: string
}

type SaveJobProps = SaveJobData & WithStyles<typeof styles>;

const SaveJobButton: React.FC<SaveJobProps> = (props): JSX.Element => {
    const { classes, isFavorite, handleClick, width } = props;

    const renderStarIcon = (): JSX.Element => {
        return isFavorite
            ? <FullStarIcon className={classes.btnIcon} />
            : <StarBorderOutlinedIcon className={classes.btnIcon} />
    }

    return (
        <Button
            style={{width: width}}
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



