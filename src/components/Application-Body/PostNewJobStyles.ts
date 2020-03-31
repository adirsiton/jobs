import makeStyles from '@material-ui/core/styles/makeStyles';

const postPadding = "1vw";
const dialogThemeColor = "rgb(89,89,89)";
const inputFieldBackgroundColor = "rgb(206,206,206)";

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
    radioOption: {
        paddingLeft: "1vw"
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
        height: "10vh",
        display: "flex",
        alignItems: "center"
    },
    jobSeniorityTitle: {
        paddingLeft: "6ch"
    },    
    jobSeniorityFields: {
        height: "10vh",
        display: "flex",
        alignItems: "center"
    },
    jobDamachTitle: {
        paddingLeft: "3ch"  
    },    
    jobDamachFields: {
        height: "10vh",
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
    jobNicknameText: {
        backgroundColor: `${inputFieldBackgroundColor}`,
        paddingRight: "5px",
        width: "98%" // TODO: Fix, this is bad solution...
    },
    selectIcon: {
        direction: "rtl"
    },
    postButton: {
        color: "white",
        backgroundColor: `${dialogThemeColor}`,
        "&:hover": {
            backgroundColor: `${dialogThemeColor}`,
        },
        "&:focus": {
            backgroundColor: `${dialogThemeColor}`,
        }
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
    numberInput: { // Important: TY @Material-ui -_-
        width: "10vw",
        marginRight: "5ch !important",
        backgroundColor: `${inputFieldBackgroundColor}`
    },
    numberInputLabel: {
        alignSelf: "center"
    },
    datePicker: {
        width: "10vw",
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