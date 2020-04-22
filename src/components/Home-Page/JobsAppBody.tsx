import * as React from 'react';
import { useState, useEffect } from 'react';

import makeStyles from '@material-ui/core/styles/makeStyles';

import { LIGHT_COLOR_TEXT, THEME_COLOR } from '../../assets/projectJSS/Colors';
import JobsList from './JobsList/jobsList';
import Header from './header/Header';

import { getAllAds } from '../../server/ads';
import { Advertisement } from '../../types/Advertisements';

const styles = makeStyles({
    appBodyContent: {
        paddingLeft: '3vw',
        paddingRight: '2vw',
        paddingTop: '2vh',
        display: "flex",
        flexDirection: "column",
        height: '82vh'
    },
    addNewPostButton: {
        color: LIGHT_COLOR_TEXT,
        backgroundColor: THEME_COLOR,
        "&:hover": {
            backgroundColor: THEME_COLOR,
        },
        "&:focus": {
            backgroundColor: THEME_COLOR,
        },
        alignSelf: "flex-end"
    }
});

const JobsAppBody: React.FC<{}> = (): JSX.Element => {
  const classes = styles({});
  const [ads, setAds] = useState<Advertisement[]>([]);
  const [searchValue, setSearchValue] = useState<string>('');

  const fetchAllAds = (): void => {
    getAllAds().then(data => setAds(data));
  }

  useEffect(() => {
      fetchAllAds();
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
        <Header 
            searchValue={searchValue} 
            onSearchValueChange={onSearchValueChange}
            fetchAllAdsAfterPost={fetchAllAds} />
        <JobsList ads={getFilteredAds()} isFiltered={searchValue !== '' && ads.length !== 0}/>
    </div>
  );
}

export default JobsAppBody;
