import { makeStyles, createStyles } from '@material-ui/core/styles';
import {  THEME_COLOR, THEME_HOVER_COLOR } from '../../../../../assets/projectJSS/Colors';

const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            width: "96%"
        },
        button: {
            marginTop: 3,
            marginRight: 3,
            backgroundColor: THEME_COLOR,
            '&:hover': {
                backgroundColor: THEME_HOVER_COLOR
            },
            color: 'white',
        },
        actionsContainer: {
            marginBottom: 3 * 2,
            display: 'flex',
            justifyContent: 'flex-end'
        },
        resetContainer: {
            padding: 3 * 3
        },
        stepContent: {
            borderRight: '2px solid #d6d6d6',
            marginRight: '19px',
            paddingRight: '20px',
            paddingLeft: '8px',
            borderLeft: 'none',
            margin: '0 18px 0 0',
            width: '100%'
        },
        specificStepContet: {
            padding: '2px',
            maxHeight: '350px',
            overflowY: 'auto',
            overflowX: 'hidden'
        },
        stepper: {
            padding: 0,
            '& .MuiStepConnector-lineVertical': {
                borderRight: '2px solid #d6d6d6',
                borderLeftStyle: 'none',
                borderLeftWidth: 0,
            },
            '& .MuiStepConnector-vertical': {
                padding: 0,
                marginLeft: 0,
                marginRight: '19px'
            },
            '& .MuiStepConnector-completed .MuiStepConnector-lineVertical': {
                borderRightColor: THEME_COLOR
            },
            '& .MuiStepConnector-active .MuiStepConnector-lineVertical': {
                borderRightColor: THEME_COLOR
            }
        },
        stepLabel: {
            '& .MuiStepIcon-root': {
                width: 40,
                height: 40,
                fontSize: 18,
            },
            '& .MuiStepIcon-active': {
                color: THEME_COLOR,
            },
            '& .MuiStepIcon-completed': {
                color: THEME_COLOR,
            }
        },
        label: {
            marginRight: '5px',
            fontSize: '13pt'
        },
        iconContainer: {
            padding: 0
        }
    }),
);

export default useStyles;