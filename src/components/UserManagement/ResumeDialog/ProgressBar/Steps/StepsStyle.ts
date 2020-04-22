import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) =>
    createStyles({
        personalDetailsContainer: {
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            marginBottom: '1px'
        },
        nextJobContainer: {
            display: 'flex',
            flexDirection: 'column',
        },
        label: {
            width: '60px'
        },
        inputDiv: {
            padding: '10px',
            display: 'flex',
            flexDirection: 'row',
            flexGrow: 1
        },
        asterisk: {
            color: 'red'
        },
        inputfield: {
            width: '125px',
            boxSizing: 'border-box',
            boxShadow: 'inset 0 1px 2px rgba(0,0,0,.39), 0 -1px 1px #fff, 0 1px 0 #fff'
        },
        phoneInput: {
            marginRight: '10px',
            width: '65%',
            '& .MuiInputBase-input': {
                textAlign: 'center'
            }
        },
        headline: {
            fontWeight: 'bold',
            fontSize: '13pt'
        },
        multiLineText: {
            borderRadius: '4px',
            margin: '10px'
        }
    }),
);

export default useStyles;