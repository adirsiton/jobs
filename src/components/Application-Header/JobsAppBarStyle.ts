import { createStyles } from '@material-ui/core';
import { LIGHT_COLOR_TEXT, AVATAR_COLOR, NAV_BAR_COLOR } from '../../assets/projectJSS/Colors';

const styles = () => createStyles({
    root: {
        backgroundColor: `${NAV_BAR_COLOR}`
    },
    toolbar: { 
        display: 'flex',
        justifyContent: 'space-between'
    },
    avatar: {
        backgroundColor: `${AVATAR_COLOR}`,
        margin: '0 5px'
    },
    starIcon: {
        fontSize: '150%'
    },
    starIconYellow: {
        color: 'yellow',
    },
    starIconWhite: {
        color: `${LIGHT_COLOR_TEXT}`,
    },
    userDetails: {
        display: 'flex',
        alignItems: 'center'
    },
    logoContainer: {
        display: 'flex',
        alignItems: 'center'
    },
    logoIcon: {
        margin: '0 5px',
        fontSize: '150%'
    },
    logoTitle: {
        color: `${LIGHT_COLOR_TEXT}`
    }
});

export default styles;