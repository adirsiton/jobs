import { makeStyles, createStyles } from "@material-ui/core/styles";
import {
  THEME_COLOR,
  THEME_HOVER_COLOR,
} from "../../../assets/projectJSS/Colors";

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      padding: "2vh 2vw",
    },
    introduction: {
      display: "flex",
      flexDirection: "row",
    },
    introductionContent: {
      display: "flex",
      flexDirection: "column",
      lineHeight: 1.4,
      fontSize: "16pt",
      fontWeight: 500,
      color: "#686868",
    },
    avatar: {
      color: "#fafafa",
      backgroundColor: "#bdbdbd",
      width: "55px",
      height: "55px",
      fontSize: "1.5rem",
      marginLeft: "15px",
      alignSelf: "center",
    },
    headline: {
      color: "#595959",
      fontSize: "16pt",
      fontWeight: "bold",
    },
  })
);

export default useStyles;
