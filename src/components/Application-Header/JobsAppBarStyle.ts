import { createStyles } from '@material-ui/core';
import { LIGHT_COLOR_TEXT, AVATAR_COLOR, 
         NAV_BAR_COLOR, YELLOW_STAR_COLOR } from '../../assets/projectJSS/Colors';

const styles = () => createStyles({
    root: {
        backgroundColor: NAV_BAR_COLOR
    },
    toolbar: { 
        display: 'flex',
        justifyContent: 'space-between',
        paddingRight: '0px'
    },
    avatar: {
        backgroundColor: AVATAR_COLOR,
        margin: '0 5px',
        textDecoration: 'none'
    },
    starIcon: {
        fontSize: '150%'
    },
    starIconYellow: {
        color: YELLOW_STAR_COLOR,
    },
    starIconWhite: {
        color: LIGHT_COLOR_TEXT,
    },
    userDetails: {
        display: 'flex',
        alignItems: 'center'
    },
    logoContainer: {
        display: 'flex',
        alignItems: 'center',
        textDecoration: 'none'
    },
    logoIcon: {
        margin: '0 5px',
        fontSize: '150%'
    },
    logoTitle: {
        color: LIGHT_COLOR_TEXT
    },
    logoSystemName: {
        color: 'white',
        marginLeft: '20px',
        fontWeight: 'bold'    
    },
    logoSubTitle: {
        marginTop: '20px',
        color: 'white'
    }
});

export default styles;