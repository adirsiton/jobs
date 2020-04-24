import makeStyles from '@material-ui/core/styles/makeStyles';
import { NEW_JOB_COLOR,
         LIGHT_COLOR_TEXT,
         TEXT_AND_ICONS_ADS_BACKGROUND_COLOR, 
         BOX_SHADOW} from '../../../../../assets/projectJSS/Colors';
import { ITALIC_FONT } from '../../../../../assets/projectJSS/Fonts';

const postPadding = "1vw";
const TEXT_FIELD_HEIGHT = "48px";
const ROW_TEXT_FIELD_HEIGHT_PADDING = "2.5vh";
const HALF_ROW_TEXT_FIELD_HEIGHT_PADDING = "1.25vh";
const MINIMAL_HEIGHT_PADDING = "1em";

const styles = makeStyles({
    dialogPaper: {
      width: "40vw"
    },
    dialogTitle: {
        padding: "unset",
        paddingRight: postPadding,
    },
    dialogTitleText: {
        fontSize: "150%"
    },
    dialogContent: {
        padding: "unset",
        paddingRight: postPadding,
        overflowY: 'unset'
    },
    baseLocation: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
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
        marginTop: MINIMAL_HEIGHT_PADDING,
        marginLeft: `calc(2 * ${postPadding})`
    },
    subtitlesMargin: {
        display: 'flex',
        flexDirection: 'column',
        marginRight: '2ch'
    },
    jobRequirementsHeader: {
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
        marginTop: `calc(3 * ${HALF_ROW_TEXT_FIELD_HEIGHT_PADDING})`,
        marginBottom: ROW_TEXT_FIELD_HEIGHT_PADDING,
    },
    standardFields: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
    },
    datePicker: {
        width: "11.5ch",
        height: "4ch",
        backgroundColor: TEXT_AND_ICONS_ADS_BACKGROUND_COLOR
    },
    datePickerInput: {
        textAlign: "center"
    },
    datePickerLabel: {
        fontStyle: ITALIC_FONT
    },
    jobEntryDateTitle: {
        paddingLeft: "3ch"
    },    
    jobEntryDateFields: {
        marginTop: ROW_TEXT_FIELD_HEIGHT_PADDING,
        display: "flex",
        alignItems: "center"
    },
    jobSeniorityFields: {
        marginTop: `calc(3 * ${HALF_ROW_TEXT_FIELD_HEIGHT_PADDING})`,
        display: "flex",
        alignItems: "center"
    },
    jobDamachFields: {
        marginTop: MINIMAL_HEIGHT_PADDING,
        marginBottom: MINIMAL_HEIGHT_PADDING,
        display: "flex",
        alignItems: "center"
    },
    flippedSwitch: { // We want "$checked" to be on the -left- side, in material ui -default- is the -right- side...
        transform: "rotate(180deg)",
        position: 'absolute', // So all switches are aligned together, veritcal (In column)
        marginRight: '3ch'
    },
    leftOfSwitch: {
        position: 'absolute',
        marginRight: 'calc(3.5 * 3ch)'
    },
    afterSwitch: {
        marginRight: '12ch'
    },
    jobDescriptionArea: {
        marginTop: '2px',
        width: `calc(100% - 3 * ${postPadding})`,
        backgroundColor: TEXT_AND_ICONS_ADS_BACKGROUND_COLOR,
        marginLeft: `calc(2 * ${postPadding})`,
        ...BOX_SHADOW
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
    jobNickname: {
        display: "flex",
        alignItems: "center",
        marginTop: HALF_ROW_TEXT_FIELD_HEIGHT_PADDING,
    },
    jobNicknameText: {
        backgroundColor: TEXT_AND_ICONS_ADS_BACKGROUND_COLOR,
        width: "40ch"
    },
    contactInfo: {
        display: "flex",
        alignItems: "center",
        marginTop: MINIMAL_HEIGHT_PADDING,
        marginBottom: ROW_TEXT_FIELD_HEIGHT_PADDING
    },
    contactNicknameText: {
        fontStyle: ITALIC_FONT,
        backgroundColor: TEXT_AND_ICONS_ADS_BACKGROUND_COLOR,
        width: "17ch"
    },
    // contactNicknameLabel: {
    //     fontStyle: ITALIC_FONT,
    //     '&:focus': {
    //         transform: 'translate(0, 8px) scale(1)'
    //     }
    // },
    contactPhoneSuffix: {
        backgroundColor: TEXT_AND_ICONS_ADS_BACKGROUND_COLOR,
        fontStyle: ITALIC_FONT,
        marginLeft: '1ch',
        marginRight: '2ch',
        width: '6ch',
        direction: 'ltr',
        paddingLeft: '1ch'
    },
    contactPhonePrefix: {
        marginRight: '1ch'
    },
    selectIcon: {
        direction: "rtl",
    },
    postButton: {
        width: "12ch",
        display: "flex",
        color: LIGHT_COLOR_TEXT,
        backgroundColor: NEW_JOB_COLOR,
        "&:hover": {
            backgroundColor: NEW_JOB_COLOR,
        },
        "&:focus": {
            backgroundColor: NEW_JOB_COLOR,
        },
        '&:disabled': {
            backgroundColor: 'gray'
        }
    },
    postButtonLabel: {
        justifyContent: "center"
    },
    postButtonIcon: {
        marginRight: "unset",
        color: LIGHT_COLOR_TEXT
    },
    postButtonText: {
        paddingRight: "5px",
        color: LIGHT_COLOR_TEXT
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
        marginLeft: postPadding
    },
    checkbox: {
        padding: "unset !important", // Important: TY @Material-ui -_-
    },
    checkboxIcon: {
        fontSize: "24px", // Radio button size
    },
    seniorityNumberInput: { 
        height: "4ch",
        width: "11.5ch",
        marginRight: "1.25ch",
        backgroundColor: TEXT_AND_ICONS_ADS_BACKGROUND_COLOR
    },
    seniorityNumberText: { 
        padding: 'unset !important',
        paddingBottom: '3px !important',
        direction: 'ltr'
    },
    seniorityNumberInputLabel: {
        fontStyle: ITALIC_FONT
    },
});

export default styles;