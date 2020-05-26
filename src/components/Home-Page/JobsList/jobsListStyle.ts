import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) =>
    createStyles({
        jobsList: {
            display: "flex",
            flexDirection: "column",
            width: "85%",
            '&::-webkit-scrollbar': {
                width: '12px',
                backgroundColor: 'transparent'
            },
            '&::-webkit-scrollbar-thumb': {
                borderRadius: '10px',
                WebkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,.3)',
                backgroundColor: 'rgb(127, 140, 157)'
            },
            height: "76vh",
            padding: "34px",
            paddingRight: '100px',
            marginTop: '30px',
            overflowX: 'auto',
            direction: 'ltr'
        },
        searchNotFound: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: '28vh'
        },
        bigFont: {
            fontSize: '3em'
        },
    }),
);

export default useStyles;