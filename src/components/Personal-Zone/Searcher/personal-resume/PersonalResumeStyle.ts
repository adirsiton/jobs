import { makeStyles, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) =>
  createStyles({
    resumeContainer: {
      paddingRight: "9vw",
      paddingTop: "2vh",
    },
    resumeHeader: {
      fontWeight: "bold",
      fontSize: "1.4em",
    },
    resumeBox: {
      width: "400px",
      height: "388px",
      boxShadow: "0px 0px 13px -3px black",
      marginRight: "18px",
      marginTop: "19px",
      display: "flex",
      flexDirection: "column",
    },
    resumePersonalDetails: {
      padding: "13px",
      flex: "9",
    },
    topSection: {
      flex: 1,
      display: "flex",
    },
    bottomSection: {
      flex: 2,
      paddingTop: "10px",
    },
    resumeContactDetails: {
      display: "flex",
      flexDirection: "column",
      paddingRight: "18px",
    },
    noPicturePlaceholder: {
      background: "#b4b3b3bf",
      borderRadius: "7px",
      width: "96px",
      height: "102px",
    },
    noPictureIcon: {
      color: "#66646496",
      margin: "auto",
      fontSize: "76px",
      marginTop: "11px",
      marginRight: "9px",
    },
    sectionTitle: {
      fontWeight: "bold",
    },
    sectionText: {
      color: "#3f3f3f",
      marginLeft: "20px",
    },
    resumeSearcherName: {
      fontSize: "1.3em",
      color: "#3c3c3c",
    },
    resumeSearcherID: {
      color: "#7f7f7f",
      paddingTop: "5px",
      fontSize: "0.9em",
    },
    resumeSearcherJobAndLocation: {
      paddingTop: "6px",
      display: "flex",
    },
    tag: {
      width: "4ch",
      height: "1.5rem",
      textAlign: "center",
      color: "white",
      fontFamily: "unset",
      borderRadius: "5px",
      background: "blueviolet",
    },
    resumeEditButton: {
      width: "100%",
      color: "#21bd91",
      background: "#fbf9f8",
      "&:hover": {
        background: "#a4d4c63b",
      },
    },
    previousJobs: {
      display: "flex",
      flexDirection: "column",
      marginTop: "10px",
      height: "128px",
      overflowY: "auto",
    },
    row: {
      display: "flex",
    },
    previousJob: {
      marginBottom: "10px",
    },
    jobSection: {
      marginLeft: "10px",
      display: "inline-flex",
    },
    sectionValue: {
      marginRight: "4px",
    },
    resumeFreeText: {
      marginBottom: "10px",
    },
  })
);

export default useStyles;
