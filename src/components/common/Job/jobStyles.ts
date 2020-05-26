import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { TEXT_AND_ICONS_ADS_COLOR } from '../../../assets/projectJSS/Colors';
import { ITALIC_FONT } from '../../../assets/projectJSS/Fonts';

const JOB_PADDING_BOTTOM: string = '15px'

const styles = (theme: Theme) => createStyles({
    root: {
        maxWidth: 345,
    },
    tag: {
        width: "5ch",
        height: "1.5rem",
        textAlign: "center",
        color: "white",
        fontFamily: ITALIC_FONT,
        borderRadius: "5px",
        margin: '0px 10px 0px 15px',
        fontWeight: 100,

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
        direction: 'rtl',
        paddingBottom: JOB_PADDING_BOTTOM
    },
    jobHeader: {
        display: "flex",
        flexDirection: "column",
        padding: "20px 20px 20px 0",
        width: "18vw"
    },
    jobTitle: {
        fontWeight: "bold",
        fontSize: "24px",
        marginBottom: "10px",
        color: "#595959",
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        whiteSpace: 'nowrap'
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
        width: "16vw",
        display: "flex",
        flexDirection: "row",
        backgroundColor: "#F8F9FC",
        justifyContent: "space-around",
        height: `calc(100% + ${JOB_PADDING_BOTTOM})`
    },
    jobBtn: {
        color: "#21BD90",
        backgroundColor: '#F8F9FC',
        fontSize: "22px",
        width: '8vw',
        display: 'flex',
        justifyContent: 'center',

        '&:hover': {
            color: "#64e4bf",
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
        padding: "0"
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