import * as React from 'react';
import { withStyles, WithStyles, createStyles } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import StarIcon from '@material-ui/icons/Star';
import Tooltip from '@material-ui/core/Tooltip';
import { User } from '../../types/userTypes';

const styles = () => createStyles({
    root: {
        backgroundColor: 'gray'
    },
    toolbar: { 
        display: 'flex',
        justifyContent: 'space-between'
    },
    avatar: {
        backgroundColor: 'rgb(87,87,87)',
        margin: '0 5px'
    },
    starIconYellow:{
        color: 'yellow'
    },
    starIconWhite:{
        color: 'white'
    },
    userDetails:{
        display: 'flex',
        alignItems: 'center'
    },
    logoContainer: {
        display: 'flex',
        alignItems: 'center'
    },
    logoIcon:{
        margin: '0 5px'
    }
});

interface AppBarData extends WithStyles<typeof styles> {
    user: User;
}

type AppBarProps = AppBarData //&& withStyles<typeof styles>

const JobsAppBar: React.FC<AppBarProps> = (props): JSX.Element => {
    
    // For now I used a stupid function, just to get a different color   
    const userHaveFavorites = (): boolean =>{
        return Math.random() >= 0.5;
    }
    
    const { user, classes } = props;

    return (
        <AppBar className={classes.root} position="static">
            <Toolbar className={classes.toolbar}>
                <div className={classes.userDetails}>
                    <Avatar 
                        className={classes.avatar}
                    >
                        {user.userInitials}
                    </Avatar>
                    <Tooltip 
                        placement="right-end"
                        title="המועדפים שלי" 
                        aria-label="my favorites"
                        >
                        <IconButton
                            className={userHaveFavorites()? classes.starIconWhite : classes.starIconYellow}
                            // { todo onClick=showFaivorites } 
                            aria-label="my favorites" 
                            component="span">
                            <StarIcon />
                        </IconButton>
                    </Tooltip>
                </div>
                <div className={classes.logoContainer}>
                    <Typography variant="subtitle1">
                        jobs
                    </Typography>
                    <AccessibilityNewIcon className={classes.logoIcon}/>
                </div>
                
            </Toolbar> 
        </AppBar>
    );
}

export default withStyles(styles)(JobsAppBar);