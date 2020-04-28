import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) =>
    createStyles({
        jobsList: {
            display: "flex",
            flexDirection: "column",
            width: "85%",
            '&::-webkit-scrollbar': {
                display: "none"
            },
            height: "76vh",
            overflow: "scroll",
            padding: "34px",
            alignSelf: "center"
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