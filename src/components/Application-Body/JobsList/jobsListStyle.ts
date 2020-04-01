// import { createStyles } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            maxWidth: 345,
        },
        avatar: {
            width: "70px",
            height: "70px"
        },
        jobsList: {
            margin: "40px 42px 10px 0",
            display: "flex",
            flexWrap: "wrap"
        },
        job: {
            // display: inline-block;
            boxShadow: "-1px 1px 5px 1px #c5c5c5",
            width: "24vw",
            height: "38vh",
            margin: "0 60px 30px 0px",
            display: "flex",
            flexDirection: "column"
            // position: relative;
        },
        jobHeader: {
            flexGrow: 1,
            display: "flex",
            flexDirection:"row-reverse",
            justifyContent: "space-between",
            padding: "20px",
        },
        jobHeaderTitles: {
            display: "flex",
            flexDirection: "column",
            color: "#bbbbbb",
            fontSize: "small",
            fontWeight: 400
        },
        jobMainTitle: {
            fontWeight: "bold",
            fontSize: "x-large",
        },
        jobContent: {
            // height: "82%",
            flexGrow: 2
        },
        jobFooter: {
            flexGrow: 1,
            // height: "18%",
            backgroundColor: "#f1f1f1"
        }
    }),
);

export default useStyles;