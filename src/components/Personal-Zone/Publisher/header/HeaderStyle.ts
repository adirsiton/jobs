import makeStyles from "@material-ui/core/styles/makeStyles";
import { LIGHT_COLOR_TEXT, NEW_JOB_COLOR, AVATAR_COLOR } from "../../../../assets/projectJSS/Colors";

const styles = makeStyles({
    root: {
        display: 'flex',
        justifyContent: 'space-between',
        height: '5vh'
    },
    headerTitleName: {
        fontWeight: 'bolder'
    },
    headerTitle: {
        display: 'flex',
        flexDirection: 'row'
    },
    avatar: {
        backgroundColor: AVATAR_COLOR,
        margin: '0 1ch',
        height: '6vh',
        width: '6vh',
        fontSize: '3vh'
    },

    searchBar: {
        width: '50vw',
        fontSize: '1.3em',
        boxShadow: "0.5ch 0px 8px 2px #bbbbbb, -0.5ch 0px 8px 2px #bbbbbb",
    },
    searchBarText: {
        fontSize: '100%'
    }
});

export default styles;