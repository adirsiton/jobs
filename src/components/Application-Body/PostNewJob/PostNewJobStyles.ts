import makeStyles from '@material-ui/core/styles/makeStyles';

const postPadding = "1vw";
const dialogThemeColor = "rgb(89,89,89)";
const inputFieldBackgroundColor = "white";
const TEXT_FIELD_HEIGHT = "48px";
const ROW_TEXT_FIELD_HEIGHT_PADDING = "2.5vh";
const HALF_ROW_TEXT_FIELD_HEIGHT_PADDING = "1.25vh";
const boxShadow = "0px 1px 7px 1px rgba(0,0,0,0.75)";
const PostButtonColor = '#21BD90';

const styles = makeStyles({
    dialogPaper: {
      width: "40vw"
    },
    dialogTitle: {
        padding: "unset",
        paddingRight: `${postPadding}`,
        color: `${dialogThemeColor}`,
    },
    dialogTitleText: {
        fontSize: "150%"
    },
    dialogContent: {
        padding: "unset",
        paddingRight: `${postPadding}`,
    },
    baseLocation: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: '2vh'
    },
    baseLocationLabelText: {
        paddingRight: '0.5ch'
    },
    departmentHeader: {
        display: "flex",
    },
    departmentField: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },
    departmentFields: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: `${ROW_TEXT_FIELD_HEIGHT_PADDING}`,
        color: `${dialogThemeColor}`,
        marginLeft: `calc(${postPadding} + ${postPadding})`
    },
    subtitlesMargin: {
        display: 'flex',
        flexDirection: 'column',
        marginRight: '2ch'
    },
    jobRequirementsHeader: {
        marginTop: `${HALF_ROW_TEXT_FIELD_HEIGHT_PADDING}`,
        display: "flex",
    },
    jobRequirementsHeaderTitle: {
        whiteSpace: "nowrap"
    },
    jobRequirementsMargin: {
        position: 'absolute',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: '12ch',
    },
    jobRole: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginTop: `calc(${ROW_TEXT_FIELD_HEIGHT_PADDING} + ${HALF_ROW_TEXT_FIELD_HEIGHT_PADDING})`,
        marginBottom: `${ROW_TEXT_FIELD_HEIGHT_PADDING}`,
    },
    standardFields: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginTop: `${HALF_ROW_TEXT_FIELD_HEIGHT_PADDING}`,
    },
    datePicker: {
        // height: '32px',
        width: "10ch",
        marginRight: "2ch !important", // Important: TY @Material-ui -_-
        backgroundColor: `${inputFieldBackgroundColor}`
    },
    datePickerInput: {
        // height: '32px',
        textAlign: "center"
    },
    datePickerLabel: {
        // paddingBottom: '32px',
        alignSelf: "center",
        fontStyle: 'italic'
    },
    jobEntryDateTitle: {
        paddingLeft: "3ch",
    },    
    jobEntryDateFields: {
        height: `calc(${TEXT_FIELD_HEIGHT} + ${HALF_ROW_TEXT_FIELD_HEIGHT_PADDING})`,
        display: "flex",
        alignItems: "center"
    },
    jobSeniorityFields: {
        height: `calc(${TEXT_FIELD_HEIGHT} + ${HALF_ROW_TEXT_FIELD_HEIGHT_PADDING})`,
        display: "flex",
        alignItems: "center"
    },
    jobDamachFields: {
        // height: "10vh",
        display: "flex",
        alignItems: "center"
    },
    flippedSwitch: { // We want "$checked" to be on the -left- side, in material ui -default- is the -right- side...
        transform: "rotate(180deg)"
    },
    jobDescriptionArea: {
        width: `calc(100% - 3 * ${postPadding})`,
        backgroundColor: `${inputFieldBackgroundColor}`,
        marginLeft: `calc(2 * ${postPadding})`,
        boxShadow
    },
    select: {
        marginRight: '5px',
        width: "12ch",
    },
    selectDisabled: {
        marginRight: '5px',
        width: "12ch",
        backgroundColor: 'gray',
    },
    roleSelect: {
        width: "12ch",
    },
    tooltip: {
        fontSize: "100% !important" // Important: TY @Material-ui -_-
    },
    jobNickname: {
        display: "flex",
        alignItems: "center",
        marginTop: `${HALF_ROW_TEXT_FIELD_HEIGHT_PADDING}`,
    },
    jobNicknameText: {
        backgroundColor: `${inputFieldBackgroundColor}`,
        width: "40ch"
    },
    selectIcon: {
        direction: "rtl",
    },
    postButton: {
        width: "12ch",
        display: "flex",
        color: "white",
        backgroundColor: `${PostButtonColor}`,
        "&:hover": {
            backgroundColor: `${PostButtonColor}`,
        },
        "&:focus": {
            backgroundColor: `${PostButtonColor}`,
        }
    },
    postButtonLabel: {
        justifyContent: "center"
    },
    postButtonIcon: {
        marginRight: "unset",
        color: 'white'
    },
    postButtonText: {
        paddingRight: "5px",
        color: "white"
    },
    postButtonDisabled: {
        backgroundColor: 'gray !important', // Important: TY @Material-ui -_-
    },
    dashLine: {
        width: "100%",
        marginRight: "2px",
        borderBottom: "1px solid black",
        marginBottom: '0.75em'
    },
    checkboxField: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginLeft: `${postPadding}`
    },
    checkbox: {
        padding: "unset !important", // Important: TY @Material-ui -_-
    },
    checkboxIcon: {
        fontSize: "24px", // Radio button size
    },
    numberInput: { 
        width: "10ch",
        marginRight: "5ch !important", // Important: TY @Material-ui -_-
        backgroundColor: `${inputFieldBackgroundColor}`
    },
    numberInputLabel: {
        alignSelf: "center",
        fontStyle: 'italic'
    },
});

export default styles;