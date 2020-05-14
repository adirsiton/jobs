import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) =>
    createStyles({
        adList: {
            display: "flex",
            flexDirection: "column",
            width: "85%",
            '&::-webkit-scrollbar': {
                display: "none"
            },
            height: '72vh',
            overflowY: "scroll",
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