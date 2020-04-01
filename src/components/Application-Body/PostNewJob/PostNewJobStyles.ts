import makeStyles from '@material-ui/core/styles/makeStyles';

const postPadding = "1vw";
const dialogThemeColor = "rgb(89,89,89)";
const inputFieldBackgroundColor = "rgb(206,206,206)";
const TEXT_FIELD_HEIGHT = "48px";
const ROW_TEXT_FIELD_HEIGHT_PADDING = "2.5vh";
const HALF_ROW_TEXT_FIELD_HEIGHT_PADDING = "1.25vh";

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
        paddingLeft: `${postPadding}`
    },
    jobRequirementsHeader: {
        marginTop: `${HALF_ROW_TEXT_FIELD_HEIGHT_PADDING}`,
        display: "flex",
    },
    jobRequirementsHeaderTitle: {
        whiteSpace: "nowrap"
    },
    jobRole: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginTop: `${HALF_ROW_TEXT_FIELD_HEIGHT_PADDING}`,
    },
    jobRoleLabel: {
        marginLeft: '7ch'
    },
    standardTitle: {
        paddingLeft: "9ch"  
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
        alignSelf: "center"
    },
    jobEntryDateTitle: {
        paddingLeft: "3ch",
    },    
    jobEntryDateFields: {
        height: `calc(${TEXT_FIELD_HEIGHT} + ${HALF_ROW_TEXT_FIELD_HEIGHT_PADDING})`,
        display: "flex",
        alignItems: "center"
    },
    jobSeniorityTitle: {
        paddingLeft: "7ch"
    },    
    jobSeniorityFields: {
        height: `calc(${TEXT_FIELD_HEIGHT} + ${HALF_ROW_TEXT_FIELD_HEIGHT_PADDING})`,
        display: "flex",
        alignItems: "center"
    },
    jobDamachTitle: {
        paddingLeft: "4.5ch"  
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
        width: `calc(100% - 2 * ${postPadding})`,
        backgroundColor: `${inputFieldBackgroundColor}`,
        paddingLeft: `${postPadding}`
    },
    select: {
        marginRight: "5px",
        width: "12ch",
        backgroundColor: 'rgb(250,250,250)'
    },
    selectDisabled: {
        backgroundColor: 'gray',
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
        marginRight: "3ch",
        paddingRight: "5px",
        width: "40ch"
    },
    selectIcon: {
        direction: "rtl",
    },
    postButton: {
        width: "12ch",
        display: "flex",
        color: "white",
        backgroundColor: `${dialogThemeColor}`,
        "&:hover": {
            backgroundColor: `${dialogThemeColor}`,
        },
        "&:focus": {
            backgroundColor: `${dialogThemeColor}`,
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
        marginBottom: '0.5em'
    },
    checkboxField: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: "1vw"
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
        alignSelf: "center"
    },
});

export default styles;