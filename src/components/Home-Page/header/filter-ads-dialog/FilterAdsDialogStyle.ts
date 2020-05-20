import makeStyles from '@material-ui/core/styles/makeStyles';

const styles = makeStyles({
    scrollPaper: {
        justifyContent: 'end',
        alignItems: 'end',
        marginTop: '-2vh',
    },
    dialog: {
        backgroundColor: 'transparent',
    },
    dialogTitle: {
        paddingRight: '6px',
    },
    checkBox: {
        color: '#14bf14',
    },
    dialogTitleContainer: {
        paddingBottom: '4px',
    },
    filterIconsRow: {
        width: '100%',
    },
    icon: {
        fontSize: 'xxx-large',
    },
    dialogTitleText: {
        fontWeight: 'bold',
    },
    dialogText: {
        fontWeight: 580,
        fontSize: '1.2rem',
    },
    dialogActions: {
        justifyContent: 'end',
    },
    confirmButton: {
        color: 'rgb(127,127,127)',
        backgroundColor: 'rgb(255,255,255)',
        '&:hover': {
            backgroundColor: `#00d699`,
        },
        '&:focus': {
            backgroundColor: `#00eba8`,
        },
        width: '120px',
    },
    cancelButton: {
        backgroundColor: 'rgb(191, 191, 191)',
        color: 'white',
        width: '120px',
        margin: '0 10px',
        fontSize: '0.9em',
    },
});

export default styles;
