import { createStyles } from '@material-ui/core';
import { YELLOW_STAR_COLOR, LIGHT_COLOR_TEXT } from '../../../assets/projectJSS/Colors';

const styles = () => createStyles({
    starIcon: {
        fontSize: '50px'
    },
    starIconYellow: {
        color: YELLOW_STAR_COLOR,
    },
    starIconWhite: {
        color: LIGHT_COLOR_TEXT,
    },
    favoriteRoot: {
        width: '18vw'
    },
    favoriteContent: {
        padding: '0.5vw'
    },
    favoriteHeader: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    favoriteTitle: {
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        fontWeight: "bold",
        fontSize: "24px",
        marginBottom: "10px",
        color: "#595959",
        maxWidth: '85%'
    },
    favoriteTag: {
        width: "4ch",
        height: "1.5rem",
        textAlign: "center",
        color: "white",
        fontFamily: 'unset',
        borderRadius: "5px"
},
    favoriteSecondaryTitle: {
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        color: "#a59e9e",
        fontSize: "medium",
        fontWeight: 400,
        lineHeight: 1.6
    },
    favoriteViewButton: {
        width: '100%',
        color: "#21BD90",
        fontSize: "22px",
        backgroundColor: "#F8F9FC",
        flexGrow: 1,
        '&:hover': {
            color: "#64e4bf",
            backgroundColor: "#F8F9FC"
        }
    },
    viewIcon: {
        marginRight: "3px",
        marginLeft: "5px"
    },
});

export default styles;