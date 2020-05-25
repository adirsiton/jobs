import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { TEXT_AND_ICONS_ADS_COLOR } from '../../../assets/projectJSS/Colors';

const styles = (theme: Theme) => createStyles({
    root: {
        maxWidth: 345,
    },
    tag: {
        width: "4ch",
        height: "1.5rem",
        textAlign: "center",
        color: "white",
        fontFamily: 'unset',
        borderRadius: "5px"
    },
    job: {
        boxShadow: "14px 0px 8px 2px #bbbbbb, -14px 0px 8px 2px #bbbbbb",
        marginBottom: "30px",
        display: "flex",
        flexDirection: "row",
        height: '14vh',
        minHeight: '120px',
        width: "100%",
        minWidth: '1220px',
        direction: 'rtl'
    },
    jobHeader: {
        display: "flex",
        flexDirection: "column",
        padding: "20px",
        width: "19vw"
    },
    jobTitle: {
        fontWeight: "bold",
        fontSize: "24px",
        marginBottom: "10px",
        color: "#595959"
    },
    jobMainTitles: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    jobSecondaryTitles: {
        display: "flex",
        flexDirection: "column",
        color: "#a59e9e",
        fontSize: "medium",
        fontWeight: 400,
        lineHeight: 1.6
    },
    locationTitle: {
        display: "flex",
        alignItems: "center"
    },
    jobsLocationIcon: {
        fontSize: "1.1rem"
    },
    jobContent: {
        flexGrow: 1,
        margin: "60px 0 10px 0",
        lineHeight: 1.6
    },
    jobContentFooter: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "22vw"
    },
    jobContentTitle: {
        fontWeight: "bold",
        color: "#595959",
        marginLeft: "0.5vw"
    },
    jobFooter: {
        width: "18%",
        display: "flex",
        flexDirection: "row",
        backgroundColor: "#F8F9FC",
        justifyContent: "space-around",

    },
    jobBtn: {
        color: "#21BD90",
        fontSize: "22px",
        flexGrow: 1,
        '&:hover': {
            color: "#64e4bf",
            backgroundColor: "transparent"
        }
    },
    jobDetail: {
        marginBottom: "1vh",
        display: "flex",
        flexDirection: "row"
    },
    jobDetailData: {
        display: "flex",
        alignItems: "center"
    },
    btnIcon: {
        marginRight: "3px",
        marginLeft: "5px"
    },
    boldText: {
        fontWeight: 600
    },
    dialog: {
        margin: 0,
        padding: theme.spacing(1) 
    },
    dialogHeader: {
        display: "flex",
        flexDirection: "column",
        padding: "20px",
        width: "19vw"
    },
    dialogActions: {
        marginLeft: "1.5vw"
    },
    dialogContentText: {
        paddingBottom: "20px"
    },
    dialogDetailColumn: {
        display: "flex",
        flexDirection: "column",
        justifyItems: "space-between"
    },
    dialogDetails: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: "2vh",
        width: "55%"
    },
    isDamachIcon: {
        color: TEXT_AND_ICONS_ADS_COLOR,
        maxHeight: "18px"
    },
    isntDamachIcon: {
        color: "#a59e9e",
        maxHeight: "18px"
    }
});

export default styles;