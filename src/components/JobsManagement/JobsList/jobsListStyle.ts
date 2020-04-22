import { makeStyles, createStyles } from '@material-ui/core/styles';
import {  THEME_COLOR, THEME_HOVER_COLOR } from '../../../assets/projectJSS/Colors';

const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            maxWidth: 345,
        },
        tag: {
            height: "25px",
            width: "45px",
            textAlign: "center",
            backgroundColor: "#62e5ff",
            fontSize: "medium",
            color: "white",
            borderRadius: "5px"
        },
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
        job: {
            boxShadow: "14px 0px 8px 2px #bbbbbb, -14px 0px 8px 2px #bbbbbb",
            marginBottom: "30px",
            display: "flex",
            flexDirection: "row",
            height: '14vh',
            minHeight: '120px',
            width: "100%",
            minWidth: '1220px'
        },
        jobHeader: {
            display: "flex",
            flexDirection: "column",
            padding: "20px",
            width: "24%"
        },
        jobTitle: {
            fontWeight: "bold",
            fontSize: "24px",
            marginBottom: "10px",
            color: "#595959"
        },
        jobMainTitles: {
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between"
        },
        jobSecondaryTitles: {
            display: "flex",
            flexDirection: "column",
            color: "#a59e9e",
            fontSize: "medium",
            fontWeight: 400,
            lineHeight: 1.6
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
            color: THEME_COLOR,
            fontSize: "22px",
            flexGrow: 1,
            '&:hover': {
                color: THEME_HOVER_COLOR,
                backgroundColor: "transparent"
            }
        },
        btnIcon: {
            marginRight: "3px",
            marginLeft: "5px"
        },
        searchNotFound: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: '28vh'
        },
        bigFont: {
            fontSize: '3em'
        }
    }),
);

export default useStyles;