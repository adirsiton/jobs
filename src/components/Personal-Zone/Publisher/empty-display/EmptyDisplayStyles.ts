import { makeStyles, createStyles } from '@material-ui/core/styles';
import { DARK_TEXT_COLOR } from '../../../../assets/projectJSS/Colors';

const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            display: 'flex',
            flexDirection: 'column',
            width: '26vw',
            height: '67vh',
            margin: 'auto',
            marginTop: '7vh',
            justifyContent: 'center',
            textAlign: 'center',
            alignItems: 'center'
        },
        messageTitle: {
            fontFamily: 'Assistant',
            fontSize: 'xx-large',
            fontWeight: 'bolder',
            color: DARK_TEXT_COLOR,
            marginBottom: '1.5vh'
        },
        messageBody: {
            fontSize: 'x-large',
            fontWeight: 600,
            marginBottom: '1vh'
        },
        buttonWrapper: {
            marginTop: '3vh'
        },
        resumeIcon: {
            fontSize: '10.5rem'
        }
    })
);

export default useStyles;