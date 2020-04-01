import * as React from 'react';
import { useState, useEffect } from 'react';
import { withStyles, WithStyles } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import styles from './jobsListStyle';
import Job from './job'

interface JobsListProps {
    ads: any

}

const JobsList: React.FC<JobsListProps> = (props): JSX.Element => {
    const { ads } = props;
    const classes = styles();

    useEffect(() => {

    }, []);

    return (
        <div className={classes.jobsList}>
            {/* {ads.map(() =>
                <div className={classes.card}>

                </div>
            )} */}
            {/* <Card  className={classes.root}>
                <CardHeader
                    avatar={
                        <Avatar aria-label="recipe" className={classes.avatar}>
                            R
                         </Avatar>
                    }
                    // action={
                    //     <IconButton aria-label="settings">
                    //         <MoreVertIcon />
                    //     </IconButton>
                    // }
                    title="רשצ"
                    subheader="מיקום"
                />
                <CardContent />
            </Card> */}

            <Job />
            <Job />
            <Job />
            <Job />

        </div>
    );
}

export default JobsList;
