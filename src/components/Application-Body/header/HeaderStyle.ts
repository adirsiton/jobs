import makeStyles from "@material-ui/core/styles/makeStyles";

const styles = makeStyles({
    root: {
        display: 'flex',
        justifyContent: 'space-between',
        height: '5vh'
    },
    addNewPostButton: {
        color: "white",
        backgroundColor: `#21bd90`,
        "&:hover": {
            backgroundColor: `#00d699`,
        },
        "&:focus": {
            backgroundColor: `#00eba8`,
        },
        width: '10vw'
    },
    searchBar: {
        width: '50vw',
        fontSize: '1.3em',
        boxShadow: '6px 5px 8px 3px #ccc'
    }
});

export default styles;