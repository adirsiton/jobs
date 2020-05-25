import { createStyles } from '@material-ui/core';
import { LIGHT_COLOR_TEXT, AVATAR_COLOR, 
         NAV_BAR_COLOR } from '../../assets/projectJSS/Colors';

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
    userDetails: {
        display: 'flex',
        alignItems: 'center'
    },
    logoContainer: {
        display: 'flex',
        alignItems: 'center',
        textDecoration: 'none'
    },
    logoImg: {
        height: '80px'
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