import * as React from 'react';

import { observer, inject } from 'mobx-react';

import ListIcon from '@material-ui/icons/List';
import BlockIcon from '@material-ui/icons/Block';

import { Advertisement  } from '../../../types/Advertisements';
import { UserStore } from '../../../store/UserStore';
import styles from './jobsListStyle';
import Job from './job';


interface JobsListProps {
    ads: Advertisement[];
    isFiltered: boolean;
    userStore?: UserStore;
}

const JobsList: React.FC<JobsListProps> = (props): JSX.Element => {
    const { ads, isFiltered } = props;
    const classes = styles();
    const userStore: UserStore = props.userStore!;

    const renderJobs = (): JSX.Element => {
        if (ads.length === 0) {
            if (isFiltered) {
                return (
                    <div className={`${classes.searchNotFound} ${classes.bigFont}`}>
                        לא מצאנו ג'ובים
                        <BlockIcon className={classes.bigFont}/>
                    </div>
                );
            } else {
                return (
                    <div className={`${classes.searchNotFound} ${classes.bigFont}`}>
                        אין ג'ובים כרגע
                        <ListIcon className={classes.bigFont}/>
                    </div>
                );
            }
        } else {
            return <>{ads.map(ad => (
                <Job
                    key={ad.id}
                    ad={ad} 
                    isFavorite={userStore.getFavoriteAds.includes(ad.id)} 
                    toggleFavoriteAd={(isFavorite) => userStore.toggleFavoriteAd(ad.id, isFavorite)}
                />
            ))}</>;
        }
    }

    return (
        <div className={classes.jobsList}>
            {renderJobs()}
        </div>
    );
}

export default inject('userStore')(observer(JobsList));