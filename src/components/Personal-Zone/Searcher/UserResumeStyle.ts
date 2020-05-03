import { makeStyles, createStyles } from '@material-ui/core/styles';
import {  THEME_COLOR, THEME_HOVER_COLOR } from '../../../assets/projectJSS/Colors';

const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            padding: '2vh 2vw'
        },
        header: {
            display: 'flex',
            justifyContent: 'space-between'
        },
        introduction: {
            display: 'flex',
            flexDirection: 'row',
        },
        introductionContent: {
            display: 'flex',
            flexDirection: 'column',
            lineHeight: 1.4,
            fontSize: '16pt',
            fontWeight: 500,
            color: '#686868'
        },
        avatar: {
            color: '#fafafa',
            backgroundColor: '#bdbdbd',
            width: '55px',
            height: '55px',
            fontSize: '1.5rem',
            marginLeft: '15px',
            alignSelf: 'center'
        },
        headline: {
            color: '#595959',
            fontSize: '24pt',
            fontWeight: 'bold'
        },
        resumeLink: {
            backgroundColor: '#FFFFFF',
            color: THEME_COLOR,
            '&:hover': {
                backgroundColor: '#fffefe',
                color: THEME_HOVER_COLOR
            },
            width: '12vw',
            height: '5vh',
            fontSize: '17pt',
            borderRadius: 0,
            margin: '8px',
            boxShadow: 'rgb(153, 153, 153) 0px 0px 4px 1px'
        }
    }),
);

export default useStyles;