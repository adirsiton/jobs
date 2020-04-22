import makeStyles from "@material-ui/core/styles/makeStyles";
import {  THEME_COLOR } from '../../../assets/projectJSS/Colors';

const styles = makeStyles({
    root: {
        display: 'flex',
        justifyContent: 'space-between',
        height: '5vh'
    },
    addNewPostButton: {
        color: "white",
        backgroundColor: THEME_COLOR,
        "&:hover": {
            backgroundColor: `#00d699`,
        },
        "&:focus": {
            backgroundColor: `#00eba8`,
        },
        width: '10vw'
    },
    searchBar: {
        width: '50vw',
        fontSize: '1.3em',
        boxShadow: '6px 5px 8px 3px #ccc'
    }
});

export default styles;