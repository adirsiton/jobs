import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            maxWidth: 345,
        },
        tag: {
            width: "4ch",
            height: "1.5rem",
            textAlign: "center",
            color: "white",
            fontFamily: 'unset',
            borderRadius: "5px"
        },
        jobsList: {
            display: "flex",
            flexDirection: "column",
            width: "85%",
            '&::-webkit-scrollbar': {
                display: "none"
            },
            height: '60vh',
            overflow: 'hidden',
            overflowY: "scroll",
            padding: "34px",
            alignSelf: "center"
        },
        job: {
            boxShadow: "14px 0px 8px 2px #bbbbbb, -14px 0px 8px 2px #bbbbbb",
            marginBottom: "30px",
            display: "flex",
            flexDirection: "row",
            height: 'auto',
            width: "100%",
            minWidth: '1220px'
        },
        jobHeader: {
            display: "flex",
            flexDirection: "column",
            padding: "20px",
            width: "40%"
        },
        jobTitle: {
            fontWeight: "bold",
            width: '20ch',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            marginLeft: '6ch'
        },
        jobMainTitles: {
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginBottom: '10px'
        },
        candidates: {
            display: "flex",
            flexDirection: "column",
            color: "#a59e9e",
            fontSize: "medium",
            fontWeight: 400,
            lineHeight: 1.6
        },
        candidate: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between"
        },
        candidateName: {
            width: '15ch',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            overflow: 'hidden'
        },
        viewJobBtn: {
            color: "#21BD90",
            '&:hover': {
                color: "#64e4bf",
                backgroundColor: "transparent"
            },
            padding: 'unset'
        },
        locationTitle: {
            display: "flex",
            alignItems: "center"
        },
        jobsLocationIcon: {
            fontSize: "1.1rem"
        },
        jobContent: {
            flexGrow: 1,
            margin: "60px 0 10px 0",
            lineHeight: 1.6
        },
        jobContentFooter: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "48%"
        },
        jobContentTitle: {
            fontWeight: "bold",
            color: "#595959",
        },
        jobFooter: {
            width: "18%",
            display: "flex",
            flexDirection: "row",
            backgroundColor: "#F8F9FC",
            justifyContent: "space-around",

        },
        jobBtn: {
            color: "#21BD90",
            fontSize: "22px",
            flexGrow: 1,
            '&:hover': {
                color: "#64e4bf",
                backgroundColor: "transparent"
            }
        },
        btnIcon: {
            marginRight: "3px",
            marginLeft: "5px"
        },
        bigFont: {
            fontSize: '3em'
        }
    }),
);

export default useStyles;