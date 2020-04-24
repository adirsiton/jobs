import { makeStyles, createStyles } from '@material-ui/core/styles';
import { TEXT_AND_ICONS_ADS_BACKGROUND_COLOR, } from '../../../../../../assets/projectJSS/Colors';
import { ITALIC_FONT } from '../../../../../../assets/projectJSS/Fonts';

const useStyles = makeStyles((theme) =>
    createStyles({
        datePicker: {
            width: "14ch",
            height: "4ch",
            backgroundColor: TEXT_AND_ICONS_ADS_BACKGROUND_COLOR
        },
        datePickerInput: {
            textAlign: "center"
        },
        datePickerLabel: {
            fontStyle: ITALIC_FONT
        },
    }),
);

export default useStyles;