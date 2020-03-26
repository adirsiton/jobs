import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { User } from '../../types/userTypes';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

interface AppBarData {
    user: User;
}

type AppBarProps = AppBarData;

export const JobsAppBar: React.FC<AppBarProps> = (props): JSX.Element => {
    
    const { user } = props;

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h5">
                    {user.userInitials}
                </Typography>
                <Typography variant="h3">
                    Meshushim
                </Typography>
            </Toolbar> 
        </AppBar>
    )
}