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
        color: `${dialogThemeColor}`
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
    standardTitle: {
        paddingLeft: "1vw"  
    },
    standardFields: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
    },
    jobEntryDateTitle: {
        paddingLeft: "1vw"  
    },    
    jobEntryDateFields: {
        height: "10vh",
        display: "flex",
        alignItems: "center"
    },
    jobSeniorityTitle: {
        paddingLeft: "1vw"  
    },    
    jobSeniorityFields: {
        height: "10vh",
        display: "flex",
        alignItems: "center"
    },
    jobDamachTitle: {
        paddingLeft: "1vw"  
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
        marginRight: "0.5vw",
        width: "8vw",
        backgroundColor: `${inputFieldBackgroundColor}`
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
        fontSize: "3vh",
    },
    numberInput: { // Important: TY @Material-ui -_-
        width: "10vw",
        marginRight: "1vw !important",
        backgroundColor: `${inputFieldBackgroundColor}`
    },
    numberInputLabel: {
        alignSelf: "center"
    },
    datePicker: {
        width: "10vw",
        marginRight: "1vw",
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