import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) =>
    createStyles({
        adList: {
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
            direction: 'ltr',
            marginTop: '20px',
            height: '72vh',
            overflowX: "scroll",
            padding: "34px",
            alignSelf: "center"
        },
        favoriteTitle: {
            color: '#595959',
            fontSize: '30px',
            fontWeight: 'bold',
            margin: '33px 79px 0px 0px'
        }
    }),
);

export default useStyles;