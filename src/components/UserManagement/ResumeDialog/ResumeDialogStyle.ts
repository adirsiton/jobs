import { makeStyles, createStyles } from '@material-ui/core/styles';
import {  THEME_COLOR } from '../../../assets/projectJSS/Colors';

const useStyles = makeStyles((theme) =>
    createStyles({
        dialog: {
        },
        title: {
            '& .MuiTypography-root':{
                fontSize: '1.8rem',
                fontWeight: 'bold'
            },
            padding: '12px 24px'
        },
        button: {
            marginTop: 3,
            marginRight: 3,
            backgroundColor: THEME_COLOR,
            color: 'white',
        }
    })
);

export default useStyles;