import { makeStyles, createStyles } from '@material-ui/core/styles';
import {  THEME_COLOR, THEME_HOVER_COLOR } from '../../assets/projectJSS/Colors';

const useStyles = makeStyles((theme) =>
    createStyles({
        container: {
            padding: '2vh 2vw'
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
        noResumeContainer: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '2vh 33vw',
            lineHeight: 2
        },
        headline: {
            color: '#595959',
            fontSize: '24pt',
            fontWeight: 'bold'
        },
        content: {
            display: 'flex',
            flexDirection: 'column',
            textAlign: 'center',
            lineHeight: 1.4,
            fontSize: '16pt',
            fontWeight: 500,
            color: '#686868',
            marginBottom: '15px'
        },
        userBtn: {
            width: '14vw',
            height: '7vh',
            fontSize: '14pt',
            borderRadius: 0,
            margin: '8px',
            boxShadow: 'rgb(153, 153, 153) 0px 0px 4px 1px'
        },
        addResumeBtn: {
            backgroundColor: THEME_COLOR,
            color: '#FFFFFF',
            '&:hover': {
                backgroundColor: THEME_HOVER_COLOR
            }
        },
        savedJobsBtn: {
            backgroundColor: '#FFFFFF',
            color: THEME_COLOR,
            '&:hover': {
                backgroundColor: '#fffefe',
                color: THEME_HOVER_COLOR
            }
        },
        btnIcon: {
            marginLeft: "5px"
        }
    }),
);

export default useStyles;