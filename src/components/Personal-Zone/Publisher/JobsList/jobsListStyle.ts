import { makeStyles, createStyles } from '@material-ui/core/styles';
import { ITALIC_FONT } from '../../../../assets/projectJSS/Fonts';

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
            fontFamily: ITALIC_FONT,
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
            paddingRight: '100px'
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
        jobsHeaderTitle: {
            fontWeight: 'bolder',
            marginTop: '4vh',
            marginRight: '5vw'
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
            width: "20%",
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
        },
        closedAdLabel: {
            transform: 'rotate(-20deg)',
            color: 'rgb(238, 0, 0)',
            backgroundColor: 'rgb(255, 200, 200)',
            textAlign: 'center',
            width: '110px',
            fontWeight: 700,
            float: 'left',
            marginLeft: '25px',
            marginTop: '-20px',
            lineHeight: 2
        },
        closeAdButton: {
            whiteSpace: 'nowrap'
        }
    }),
);

export default useStyles;