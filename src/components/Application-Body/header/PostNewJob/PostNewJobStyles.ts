import makeStyles from '@material-ui/core/styles/makeStyles';

const postPadding = "1vw";
const dialogThemeColor = "rgb(89,89,89)";
const inputFieldBackgroundColor = "rgb(206,206,206)";
const TEXT_FIELD_HEIGHT = "48px";
const ROW_TEXT_FIELD_HEIGHT_PADDING = "1vh";

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
        paddingLeft: `${postPadding}`
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
        color: `${dialogThemeColor}`,
    },
    jobRequirementsHeader: {
        display: "flex",
    },
    jobRequirementsHeaderTitle: {
        whiteSpace: "nowrap"
    },
    jobRole: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
    },
    standardTitle: {
        paddingLeft: "4ch"  
    },
    standardFields: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
    },
    jobEntryDateTitle: {
        paddingLeft: "2ch"  
    },    
    jobEntryDateFields: {
        height: `calc(${TEXT_FIELD_HEIGHT} + ${ROW_TEXT_FIELD_HEIGHT_PADDING})`,
        display: "flex",
        alignItems: "center"
    },
    jobSeniorityTitle: {
        paddingLeft: "6ch"
    },    
    jobSeniorityFields: {
        height: `calc(${TEXT_FIELD_HEIGHT} + ${ROW_TEXT_FIELD_HEIGHT_PADDING})`,
        display: "flex",
        alignItems: "center"
    },
    jobDamachTitle: {
        paddingLeft: "3ch"  
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
        width: "100%",
        backgroundColor: `${inputFieldBackgroundColor}`
    },
    select: {
        marginRight: "5px",
        width: "12ch",
        backgroundColor: `${inputFieldBackgroundColor}`
    },
    selectDisabled: {
        backgroundColor: 'gray',
    },
    tooltip: {
        fontSize: "100% !important" // Important: TY @Material-ui -_-
    },
    jobNicknameText: {
        backgroundColor: `${inputFieldBackgroundColor}`,
        paddingRight: "5px",
        width: "40ch"
    },
    selectIcon: {
        direction: "rtl"
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
        marginLeft: "2px",
        marginRight: "2px",
        borderBottom: "1px solid black",
        marginBottom: "0.5em"
    },
    checkboxField: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: "1vw"
    },
    checkbox: {
        padding: "unset",
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
    datePicker: {
        width: "10ch",
        marginRight: "2ch",
        backgroundColor: `${inputFieldBackgroundColor}`        
    },
    datePickerInput: {
        textAlign: "center"
    },
    datePickerLabel: {
        alignSelf: "center"
    }
});

export default styles;