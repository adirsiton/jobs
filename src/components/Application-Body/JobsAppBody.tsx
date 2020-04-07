import * as React from 'react';
import { useState, useEffect } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';

import JobsList from './JobsList/jobsList';
import Header from './header/Header';
import { getAllAds } from '../../server/ads';
import { Advertisement } from '../../types/Advertisements';

const styles = makeStyles({
    appBodyContent: {
        paddingLeft: '2vw',
        paddingRight: '2vw',
        paddingTop: '2vh',
        display: "flex",
        flexDirection: "column"
    }
});

const JobsAppBody: React.FC<{}> = (): JSX.Element => {
    const classes = styles({});
    const [ads, setAds] = useState<Advertisement[]>([]);
    const [searchValue, setSearchValue] = useState<string>('');

    useEffect(() => {
        getAllAds().then(data =>
            setAds(data)
        );
    }, []);

    const onSearchValueChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setSearchValue(event.target.value);
    }

    const getFilteredAds = (): Advertisement[] => {
        return ads.filter(ad => (
                ad.name.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1 ||
                ad.tag.name.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1
            )
        );
    }

    return (
        <div className={classes.appBodyContent}>
            <Header searchValue={searchValue} onSearchValueChange={onSearchValueChange}/>
            <JobsList ads={getFilteredAds()} isFiltered={searchValue !== '' && ads.length !== 0}/>
        </div>
    );
}

export default JobsAppBody;
