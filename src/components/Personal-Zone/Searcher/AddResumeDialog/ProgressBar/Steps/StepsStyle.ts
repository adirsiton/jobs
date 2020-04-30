import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) =>
    createStyles({
        personalDetailsContainer: {
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            marginBottom: '1px',
            width:  '80%'
        },
        nextJobContainer: {
            display: 'flex',
            flexDirection: 'column',
        },
        previousJobsContainer: {
            display: 'flex',
            flexDirection: 'column',
            borderRight: '2px solid #d6d6d6',
            paddingRight: '5px',
            marginBottom: '60px',
            '&:last-child': {
                marginBottom: '0px'
            }
        },
        previousJobsRow: {
            display: 'flex',
            flexDirection: 'row',
        },
        removeJobBtn: {
            alignSelf: 'flex-end'
        },
        label: {
            width: '60px'
        },
        inputDiv: {
            padding: '10px',
            display: 'flex',
            flexDirection: 'row',
            flexGrow: 1,
            alignItems: 'center'
        },
        asterisk: {
            color: 'red'
        },
        inputfield: {
            width: '125px',
            boxSizing: 'border-box',
            '& .MuiInputBase-root': {
                height: '34px'
            },
        },
        longInput: {
            marginRight: '10px',
            width: '65%',
        },
        phoneInput: {
            '& .MuiInputBase-input': {
                textAlign: 'center',
            },
            marginRight: '10px',
            width: '65%',
        },
        headline: {
            fontWeight: 'bold',
            fontSize: '13pt'
        },
        multiLineText: {
            borderRadius: '4px',
            margin: '10px'
        },
        nextJobBtn: {
            color: 'blue',
            '&:hover': {
                backgroundColor: 'transparent',
                textDecoration: 'underline'
            },
            '&:active': {
                backgroundColor: 'transparent'
            }
        },
        perviousJobsDiv: {
            // overflowY: "scroll"
        },
        selectIconOutlined: {
            right: 'unset'
        },
        selectRoot: {
            borderRadius: '4px',
            padding: '9px'
        }
    }),
);

export default useStyles;