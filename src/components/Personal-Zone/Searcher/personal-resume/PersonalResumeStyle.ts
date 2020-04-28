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
      width: "200px",
      height: "400px",
    },
  })
);

export default useStyles;
