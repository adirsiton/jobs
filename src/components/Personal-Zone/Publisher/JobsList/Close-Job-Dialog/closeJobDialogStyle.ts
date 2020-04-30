import { makeStyles, createStyles } from '@material-ui/core/styles';
import { LIGHT_COLOR_TEXT, THEME_COLOR } from '../../../../../assets/projectJSS/Colors';

const useStyles = makeStyles((theme) =>
    createStyles({
        icon: {
            fontSize: 'xxx-large',
        },
        dialogContent: {
            textAlign: 'center'
        },
        dialogTitleText: {
            fontWeight: 'bold',
        },
        dialogText: {
            fontWeight: 580,
            fontSize: '1.2rem'
        },
        dialogActions: {
            justifyContent: 'center'
        },
        confirmButton: {
            color: LIGHT_COLOR_TEXT,
            backgroundColor: THEME_COLOR,
            "&:hover": {
                backgroundColor: `#00d699`,
            },
            "&:focus": {
                backgroundColor: `#00eba8`,
            },
            width: '120px'
        },
        cancelButton: {
            backgroundColor: 'rgb(191, 191, 191)',
            color: 'white',
            width: '120px',
            margin: '0 10px'
        }
    })
);

export default useStyles;