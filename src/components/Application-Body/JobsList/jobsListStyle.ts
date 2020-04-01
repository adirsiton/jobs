// import { createStyles } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            maxWidth: 345,
        },
        avatar: {
            height: "25px",
            width: "40px",
            textAlign: "center",
            backgroundColor: "#62e5ff",
            fontSize: "medium",
            color: "white",
            borderRadius: "5px"
        },
        jobsList: {
            margin: "30px auto",
            display: "flex",
            flexDirection: "column",
            width: "78%"
        },
        job: {
            boxShadow: "0px -1px 5px 4px #c5c5c5",
            marginBottom: "30px",
            display: "flex",
            flexDirection: "row",
            height: '13vh'
        },
        jobHeader: {
            display: "flex",
            flexDirection: "column",
            padding: "20px",
            width: "15%"
        },
        jobSecondaryTitles: {
            display: "flex",
            flexDirection: "column",
            color: "#a59e9e",
            fontSize: "medium",
            fontWeight: 400
        },
        jobMainTitle: {
            fontWeight: "bold",
            fontSize: "x-large",
            marginBottom: "10px",
            color: "#8e8d8d"
        },
        jobMainTitles: {
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between"
        },
        locationTitle: {
            display: "flex",
            alignItems: "center"
        },
        jobsLocationIcon: {
            fontSize: "1.1rem"
        },
        jobContent: {
            flexGrow: 1
        },
        jobFooter: {
            width: "16%",
            display: "flex",
            flexDirection: "row",
            backgroundColor: "#F8F9FC",
            justifyContent: "space-around",
        },
        jobBtn: {
            color: "#21BD90",
            fontSize: "larger",
            '&:hover': {
                color: "#64e4bf",
                backgroundColor: "transparent"
            }
        },
        btnIcon: {
            marginRight: "3px",
            marginLeft: "5px"
        }
    }),
);

export default useStyles;