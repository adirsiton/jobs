import { createStyles } from '@material-ui/core';

const styles = () => createStyles({
    root: {
        backgroundColor: 'gray'
    },
    toolbar: { 
        display: 'flex',
        justifyContent: 'space-between'
    },
    avatar: {
        backgroundColor: 'rgb(87,87,87)',
        margin: '0 5px'
    },
    userDetails:{
        display: 'flex',
        alignItems: 'center'
    },
    logoContainer: {
        display: 'flex',
        alignItems: 'center'
    },
    logoIcon:{
        margin: '0 5px'
    },
    logoTitle: {
        color: 'white'
    }
});

export default styles;