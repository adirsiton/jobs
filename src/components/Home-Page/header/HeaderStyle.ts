import makeStyles from '@material-ui/core/styles/makeStyles';
import { LIGHT_COLOR_TEXT, THEME_COLOR } from '../../../assets/projectJSS/Colors';

const styles = makeStyles({
    root: {
        display: 'flex',
        justifyContent: 'space-between',
        height: '5vh',
    },
    addNewPostButton: {
        color: LIGHT_COLOR_TEXT,
        backgroundColor: THEME_COLOR,
        '&:hover': {
            backgroundColor: `#00d699`,
        },
        '&:focus': {
            backgroundColor: `#00eba8`,
        },
        minWidth: '10ch',
    },
    searchBar: {
        marginRight: '2vw',
        width: '50vw',
        fontSize: '1.3em',
        boxShadow: '0.5ch 0px 8px 2px #bbbbbb, -0.5ch 0px 8px 2px #bbbbbb',
    },
    searchBarText: {
        fontSize: '100%',
    },
    activeFilterRolesContainer: {
        position: 'absolute',
        marginRight: '283px',
        display: 'flex',
    },
    activeFilterRole: {
        color: 'white',
        borderRadius: '5px',
        marginLeft: '11px',
        padding: '2px 15px',
    },
});

export default styles;
