import { makeStyles, createStyles } from '@material-ui/core/styles';
import {  THEME_COLOR, THEME_HOVER_COLOR } from '../../../../assets/projectJSS/Colors';

const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '2vh 33vw',
            lineHeight: 2
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
        jobsBtn: {
            width: '14vw',
            height: '7vh',
            fontSize: '14pt',
            borderRadius: 0,
            margin: '8px',
            boxShadow: 'rgb(153, 153, 153) 0px 0px 4px 1px',
            backgroundColor: THEME_COLOR,
            color: '#FFFFFF',
            '&:hover': {
                backgroundColor: THEME_HOVER_COLOR
            }
        },
        jobsIcon: {
            fontSize: 100
        }
    }),
);

export default useStyles;