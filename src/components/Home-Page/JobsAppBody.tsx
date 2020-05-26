import * as React from 'react';
import { useState, useEffect } from 'react';

import { observer, inject } from 'mobx-react';

import makeStyles from '@material-ui/core/styles/makeStyles';

import { RootStore } from '../../store/RootStore';
import JobsList from './JobsList/jobsList';
import Header from './header/Header';
import { Advertisement } from '../../types/Advertisements';

const styles = makeStyles({
    appBodyContent: {
        paddingLeft: '3vw',
        paddingRight: '1vw',
        paddingTop: '2vh',
        display: 'flex',
        flexDirection: 'column',
        height: '82vh',
    },
});

interface JobsAppBodyOwnProps {
    rootStore?: RootStore;
}

const JobsAppBody: React.FC<JobsAppBodyOwnProps> = (props): JSX.Element => {
    const classes = styles({});
    const rootStore: RootStore = props.rootStore!;

    const [searchValue, setSearchValue] = useState<string>('');

    useEffect(() => {
        rootStore.adsStore.loadAdvertisements();
        rootStore.userStore.loadFavoriteAds();
    }, [rootStore]);

    const onSearchValueChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setSearchValue(event.target.value);
    };

    const getFilteredAds = (): Advertisement[] => {
        const ads: Advertisement[] = rootStore.adsStore.advertisements;
        const activeFilterRoles = rootStore.adsStore.getActiveFilterRoles;

        return ads.filter(
            (ad) =>
                (ad.name.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1 ||
                    ad.role.initials.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1) &&
                (activeFilterRoles.indexOf(ad.role.initials) !== -1 || activeFilterRoles.length === 0)
        );
    };

    return (
        <div className={classes.appBodyContent}>
            <Header searchValue={searchValue} onSearchValueChange={onSearchValueChange} />
            <JobsList
                ads={getFilteredAds()}
                isFiltered={searchValue !== '' && rootStore.adsStore.advertisements.length !== 0}
            />
        </div>
    );
};

export default inject('rootStore')(observer(JobsAppBody));
