import { createStyles } from '@material-ui/core';

const styles = () => createStyles({
    root: {
        backgroundColor: 'rgb(39,54,68)'
    },
    toolbar: { 
        display: 'flex',
        justifyContent: 'space-between',
        paddingRight: '0px'
    },
    avatar: {
        backgroundColor: 'rgb(72,90,115)',
        margin: '0 5px'
    },
    starIconYellow:{
        color: 'yellow'
    },
    starIconWhite:{
        color: 'white'
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
    logoSystemName: {
        color: 'white',
        marginLeft: '20px',
        fontWeight: 'bold'    
    },
    logoSubTitle: {
        marginTop: '20px',
        color: 'white'
    }
});

export default styles;